<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\order\controller;

class MenuCategory extends ApiCommon
{
    
    public function index()
    {
        $menuCategoryModel = model('OrderMenuCategory');
        $param = $this->param;
        $data = $menuCategoryModel->getDataList($param['keywords'], $param['page'], $param['limit']);
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

    public function save()
    {
        $menuCategoryModel = model('OrderMenuCategory');
        $param = $this->param;
        $data = $menuCategoryModel->createData($param);
        if (!$data) {
            return resultArray(['error' => $menuCategoryModel->getError()]);
        } 
        return resultArray(['data' => '添加成功']);
    }

    public function update()
    {
        $menuCategoryModel = model('OrderMenuCategory');
        $param = $this->param;
        $data = $menuCategoryModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $menuCategoryModel->getError()]);
        } 
        return resultArray(['data' => '编辑成功']);
    }

    public function delete()
    {
        $menuCategoryModel = model('OrderMenuCategory');
        $param = $this->param;
        $data = $menuCategoryModel->delDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $menuCategoryModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']);    
    }

    public function deletes()
    {
        $menuCategoryModel = model('OrderMenuCategory');
        $param = $this->param;
        $data = $menuCategoryModel->delDatas($param['ids'], true);
        if (!$data) {
            return resultArray(['error' => $menuCategoryModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']); 
    }

    public function enables()
    {
        $menuCategoryModel = model('OrderMenuCategory');
        $param = $this->param;
        $data = $menuCategoryModel->enableDatas($param['ids'], $param['status'], true);
        if (!$data) {
            return resultArray(['error' => $menuCategoryModel->getError()]);
        } 
        return resultArray(['data' => '操作成功']);         
    }
}
 