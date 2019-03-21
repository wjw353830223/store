<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\order\controller;


use app\common\event\OrderOrder;

class Orders extends ApiCommon
{

    public function index()
    {
        $orderModel = model('OrderOrder');
        $param = $this->param;
        $orderSn = isset($param['orderSn'])?$param['orderSn']:null;
        $startTime = isset($param['startTime'])?$param['startTime']:null;
        $endTime = isset($param['endTime'])?$param['endTime']:null;
        $status = isset($param['status'])?$param['status']:null;
        $page = isset($param['page'])?$param['page']:null;
        $limit = isset($param['limit'])?$param['limit']:null;
        $payStatus = isset($param['payStatus'])?$param['payStatus']:null;
        $mod = isset($param['mod'])?$param['mod']:null;
        $data = $orderModel->ordersList($orderSn, $startTime, $endTime, $status, $page, $limit, $payStatus, $mod);
        return resultArray(['data' => $data]);
    }
    public function update()
    {
        $orderModel = model('OrderOrder');
        $param = $this->param;
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
}
