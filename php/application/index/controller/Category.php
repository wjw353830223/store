<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\index\controller;

class Category extends ApiCommon
{

    public function index()
    {
        $menuCategoryModel = model('OrderMenuCategory');
        $data = $menuCategoryModel->getDataList();
        return resultArray(['data' => $data]);
    }

    public function read()
    {
        $menuCategoryModel = model('OrderMenuCategory');
        $param = $this->param;
        $data = $menuCategoryModel->getDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $menuCategoryModel->getError()]);
        }
        return resultArray(['data' => $data]);
    }
}
