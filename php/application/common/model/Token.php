<?php
// +----------------------------------------------------------------------
// | Description: 岗位
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\common\model;

class Token extends Common
{

    /**
     * 为了数据库的整洁，同时又不影响Model和Controller的名称
     * 我们约定每个模块的数据表都加上相同的前缀，比如微信模块用weixin作为数据表前缀
     */
	protected $name = 'order_token';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';
	protected $autoWriteTimestamp = true;
	public function member(){
	    return $this->hasOne('Member','member_id', 'mid');
    }
    public function getInfoByToken($token){
	    $info=$this->getByToken($token);
	    return $info;
    }
    public function createToken($mobile){
	    $memberModel = model('Member');
        $member = $memberModel->getByMemberMobile($mobile);
        if (empty($member)) {
            return null;
        }
        //生成新的token
        $token = md5($mobile . strval(time()) . strval(rand(0,999999)));
        $token_info = $this->getByMid($member->member_id);
        if(empty($token_info)){
            $this->mid=$member->member_id;
            $this->token=$token;
            $res = $this->save();
            if($res === false){
                return null;
            }
        }else{
            $res = $this->where('mid',$member->member_id)->update(['token'=>$token]);
            if($res === false){
                return null;
            }
        }

        return $token;
    }
}