<?php
// +----------------------------------------------------------------------
// | Description: Api基础类，验证权限
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\index\controller;
use app\common\controller\Common;
use think\facade\Request;

class ApiCommon extends Common
{
    protected $open_controller = ['Open','Position','Menus','Category'];
    protected $request = null;
    protected $member_info = null;
    public function initialize()
    {
        parent::initialize();
        $this->request = Request::instance();
        $param = $this->param;
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
    protected function check_access($param){
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
