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
        $menuModel = model('OrderCar');
        $param = $this->request->param();
        $page = isset($param['page'])?$param['page']:0;
        $limit = isset($param['limit'])?$param['limit']:0;
        $data = $menuModel->getCategoryDataList($param['cid'], $page, $limit);
        return resultArray(['data' => $data]);
    }
    public function read()
    {
        $menuModel = model('OrderCar');
        $param = $this->request->param();
        $data = $menuModel->getDataById($param['mid']);
        if (!$data) {
            return resultArray(['error' => $menuModel->getError()]);
        }
        return resultArray(['data' => $data]);
    }
}
