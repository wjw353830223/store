<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\index\controller;

class Car extends ApiCommon
{

    public function index()
    {
        $carModel = model('OrderCar');
        $param = $this->request->param();
        $page = isset($param['page'])?$param['page']:0;
        $limit = isset($param['limit'])?$param['limit']:0;
        $data = $carModel->getDataList($this->member_info['member_id'],$page, $limit);
        return resultArray(['data' => $data]);
    }
    public function read()
    {

    }
    public function save()
    {
        $carModel = model('OrderCar');
        $param = $this->request->param();
        $param['member_id']=$this->member_info['member_id'];
        $data = $carModel->createData($param);
        if (!$data) {
            return resultArray(['error' => $carModel->getError()]);
        }
        return resultArray(['data' => 'success']);
    }

    public function update()
    {
        $carModel = model('OrderCar');
        $param = $this->request->param();
        $data = $carModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $carModel->getError()]);
        }
        return resultArray(['data' => 'success']);
    }
    public function updates()
    {
        $carModel = model('OrderCar');
        $param = $this->request->param();

        $data = $carModel->batchUpdate(json_decode($param['goods'],true));
        if (!$data) {
            return resultArray(['error' => $carModel->getError()]);
        }
        return resultArray(['data' => 'success']);
    }

    public function delete()
    {
        $carModel = model('OrderCar');
        $param = $this->request->param();
        $data = $carModel->delDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $carModel->getError()]);
        }
        return resultArray(['data' => 'success']);
    }
}
