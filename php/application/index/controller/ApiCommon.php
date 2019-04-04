<?php
// +----------------------------------------------------------------------
// | Description: Api基础类，验证权限
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\index\controller;
use app\common\controller\Common;
use think\Db;
use think\Request;
class ApiCommon extends Common
{
    protected $open_controller = ['Open','Position','Menus','Category'];
    public $request = null;
    protected $member_info = null;
    public function __construct(Request $request)
    {
        parent::__construct();
        $this->request = $request;
    }
    public function initialize()
    {
        parent::initialize();
        /*获取头部信息*/
        $header = $this->request->header();
        $param = $this->request->param();
        $authKey = isset($header['authkey'])?$header['authkey']:null;
        $sessionId = isset($header['sessionid'])?$header['sessionid']:null;
        $cache = cache('Auth_'.$authKey);
        // 校验sessionid和authKey
        if(!empty($sessionId) && !empty($authKey)){
            $userInfo = $cache['userInfo'];
            $map['id'] = $userInfo['id'];
            $map['status'] = 1;
            if (!Db::name('admin_user')->where($map)->value('id')) {
                header('Content-Type:application/json; charset=utf-8');
                exit(json_encode(['code'=>103, 'error'=>'账号已被删除或禁用']));
            }
            // 更新缓存
            cache('Auth_'.$authKey, $cache, config('LOGIN_SESSION_VALID'));
            $this->member_info = [
                'member_id'=>$userInfo->id,
                'member_mobile'=>$userInfo->mobile
            ];
        }else{
            $controller = $this->request->controller();
            if (!in_array($controller,$this->open_controller) && $this->check_access($param)) {
                $token_info = model('Token')->getInfoByToken($param['token']);
                if (empty($token_info)) {
                    exit(json_encode(['code'=>102, 'error'=>'没有权限']));
                }
                $member = $token_info->member->toArray();
                $this->member_info = $member;
            }
        }

    }
    protected function check_access($param){
        if($this->request->method()=='PUT'){
            $param = $this->request->put();
        }
        if($this->request->method()=='DELETE'){
            $param = $this->request->delete();
        }
        //时间戳向后不大于300 向前不大于300
        $now_time = time();
        $timestamp = isset($param['_timestamp']) ? intval($param['_timestamp']) : 0;
        if (!is_int($timestamp) || $now_time - $timestamp > 300 || $timestamp - $now_time > 300) {
            exit(json_encode(['code'=>103, 'error'=>'时间戳无效']));
        }

        //严格验证签名格式
        $signature = isset($param['signature']) ? trim($param['signature']) : '';
        if (empty($signature) || !preg_match("/^(?!([a-f]+|\d+)$)[a-f\d]{40}$/",$signature)) {
            exit(json_encode(['code'=>104, 'error'=>'签名格式错误']));
        }

        //缓存存在签名的忽略处理
        if (cache('sign_'.$signature)) {
            exit(json_encode(['code'=>105, 'error'=>'接口调用频繁']));
        }

        $token = isset($param['token']) ? trim($param['token']) : '';
        //开放接口token可以为空
        $controller = $this->request->controller();
        if (!in_array($controller,$this->open_controller) && empty($token)) {
            exit(json_encode(['code'=>101, 'error'=>'登录失效']));
        }
        ksort($param);
        unset($param['signature']);
        $sort_str = http_build_query($param);
        $oper_sign = sha1($sort_str);
        if ($oper_sign !== $signature) {
            exit(json_encode(['code'=>106, 'error'=>'无效的访问']));
        }
        cache('sign_'.$signature,$now_time,600);
        return true;
    }
}
