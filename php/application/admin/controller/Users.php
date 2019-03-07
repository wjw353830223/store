<?php
// +----------------------------------------------------------------------
// | Description: 系统用户
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\admin\controller;

use app\common\model\Message;
use GatewayClient\Gateway;

class Users extends ApiCommon
{

    public function index()
    {   
        $userModel = model('User');
        $param = $this->param;
        $keywords = !empty($param['keywords']) ? $param['keywords']: '';
        $page = !empty($param['page']) ? $param['page']: '';
        $limit = !empty($param['limit']) ? $param['limit']: '';    
        $data = $userModel->getDataList($keywords, $page, $limit);
        return resultArray(['data' => $data]);
    }

    public function read()
    {   
        $userModel = model('User');
        $param = $this->param;
        $data = $userModel->getDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => $data]);
    }

    public function save()
    {
        $userModel = model('User');
        $param = $this->param;
        $data = $userModel->createData($param);
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => '添加成功']);
    }

    public function update()
    {
        $userModel = model('User');
        $param = $this->param;
        $data = $userModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => '编辑成功']);
    }

    public function delete()
    {
        $userModel = model('User');
        $param = $this->param;
        $data = $userModel->delDataById($param['id']);       
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']);    
    }

    public function deletes()
    {
        $userModel = model('User');
        $param = $this->param;
        $data = $userModel->delDatas($param['ids']);  
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']); 
    }

    public function enables()
    {
        $userModel = model('User');
        $param = $this->param;
        $data = $userModel->enableDatas($param['ids'], $param['status']);  
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => '操作成功']);         
    }
    /**
     * websocket 绑定uid 和 client_id
     */
    public function bind(){
        $param = $this->param;
        $userinfo=$GLOBALS['userInfo'];
        Gateway::bindUid($param['client_id'],'admin:'.$userinfo['id']);
        Gateway::setSession($param['client_id'],['uid'=>'admin:'.$userinfo['id']]);
        if(!empty($userinfo['groups'])){
            foreach($userinfo['groups'] as $val){
                Gateway::joinGroup($param['client_id'], $val['id']);
            }
        }else{
            Gateway::joinGroup($param['client_id'], 'admin');
        }

        $messages = Message::where([
            'receiver_id'=>'admin:'.$userinfo['id'],
            'status' => 0
        ])->order('create_at','desc')->select();
        if(!$messages->isEmpty()){
           foreach($messages as $message){
               Gateway::sendToUid('admin:'.$userinfo['id'],$message['message']);
           }
        }
        return resultArray(['data' => 'success']);
    }
    
}
 