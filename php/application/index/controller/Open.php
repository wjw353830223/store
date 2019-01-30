<?php
// +----------------------------------------------------------------------
// | Description: Api基础类，验证权限
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\index\controller;

use app\common\model\Member;

class Open extends ApiCommon
{

    public function login(){
        $model=model('Member');
        $mobile = input('post.mobile','','trim');
        if (empty($mobile)) {
            return resultArray(['error'=>'invalid param']);
        }
        //严格验证手机号
        if (!is_mobile($mobile)) {
            return resultArray(['error'=>'invalid mobile']);
        }
        $member_info = $model->where('member_mobile',$mobile)->find();
        if (!empty($member_info)) {

            //锁定用户无法登录
            $member_info = $member_info->toArray();
            if ($member_info['status']==0) {
                return resultArray(['error'=>'用户被锁定']);
            }
            //更新登录信息
            $model->login_num = ['inc',1];
            $model->where(['member_mobile' => $mobile])
                ->update(['login_time' => time(),'login_ip' => get_client_ip(0,true)]);
            $member_id = $member_info['member_id'];
        }else{
            //创建会员
            $member_model=new Member();
            $salt = random_string(6,5);
            $password = random_string(6,5);
            $pwd = sp_password($password,$salt);
            $member_model->member_mobile=$mobile;
            $member_model->member_name=$mobile;
            $member_model->login_num=1;
            $member_model->login_time=time();
            $member_model->password=$pwd;
            $member_model->login_ip=get_client_ip(0,true);
            $member_model->encrypt=$salt;
            $result = $member_model->save();
            if ($result === false) {
                return resultArray(['error'=>'注册失败']);
            }
            //获取添加会员ID
            $member_id = $member_model->member_id;
        }
        $tokenModel=model('Token');
        //创建token
        $token = $tokenModel->createToken($mobile);
        if (is_null($token)) {
            return resultArray(['error'=>'token创建失败']);
        }else{
            return resultArray(['data'=>$member_id]);
        }
    }
}
