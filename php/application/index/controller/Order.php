<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\index\controller;

use app\common\event\OrderOrder;

class Order extends ApiCommon
{

    public function index()
    {
        $orderModel = model('OrderOrder');
        $param = $this->request->param();
        $param['member_id'] = $this->member_info['member_id'];
        $data = $orderModel->getDataList($param);
        return resultArray(['data' => $data]);
    }
    public function read()
    {

    }
    public function save()
    {
        $orderModel = model('OrderOrder');
        $param = $this->request->param();
        $param['member_id']=$this->member_info['member_id'];
        $data = $orderModel->createData($param);
        if (!$data) {
            if(!is_null(OrderOrder::$error)){
                return resultArray(['socketError' => OrderOrder::$error]);
            }else{
                return resultArray(['error' => $orderModel->getError()]);
            }
        }

        return resultArray(['data' => 'success']);
    }

    public function update()
    {
        $orderModel = model('OrderOrder');
        $param = $this->request->param();
        $data = $orderModel->updateDataById($param, $param['id']);
        if (!$data) {
            if(!is_null(OrderOrder::$error)){
                return resultArray(['socketError' => OrderOrder::$error]);
            }else{
                return resultArray(['error' => $orderModel->getError()]);
            }
        }
        return resultArray(['data' => 'success']);
    }
    public function delete()
    {
        $orderModel = model('OrderOrder');
        $param = $this->request->param();
        $data = $orderModel->delDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $orderModel->getError()]);
        }
        return resultArray(['data' => 'success']);
    }
}
