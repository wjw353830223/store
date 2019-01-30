<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\index\controller;

class Menus extends ApiCommon
{

    public function index()
    {
        $menuModel = model('OrderMenu');
        $param = $this->request->param;
        $data = $menuModel->getDataList($param['keywords'], $param['page'], $param['limit']);
        return resultArray(['data' => $data]);
    }
    public function read()
    {
        $menuModel = model('OrderMenu');
        $param = $this->param;
        $data = $menuModel->getDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $menuModel->getError()]);
        }
        return resultArray(['data' => $data]);
    }
}
