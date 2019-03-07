<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\index\controller;

use GatewayClient\Gateway;

class Member extends ApiCommon
{

    public function index()
    {
        $memberModel = model('Member');
        $param = $this->request->param;
        $data = $memberModel->getDataList($param['keywords'], $param['page'], $param['limit']);
        return resultArray(['data' => $data]);
    }
    public function read()
    {
        $memberModel = model('Member');
        $param = $this->param;
        $data = $memberModel->getDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $memberModel->getError()]);
        }
        return resultArray(['data' => $data]);
    }
    /**
     * websocket 绑定uid 和 client_id
     */
    public function bind(){
        $param = $this->param;
        $userinfo=$this->member_info;
        Gateway::bindUid($param['client_id'], $userinfo['member_id']);
        Gateway::setSession($param['client_id'],['uid'=>$userinfo['member_id']]);
        Gateway::joinGroup($param['client_id'], 'member');
        return resultArray(['data' => 'success']);
    }
}
