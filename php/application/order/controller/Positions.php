<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\order\controller;

class Positions extends ApiCommon
{
    
    public function index()
    {
        $advertPositionModel = model('OrderPosition');
        $data = $advertPositionModel->getDataList();
        return resultArray(['data' => $data]);
    }

    public function read()
    {
        $advertPositionModel = model('OrderPosition');
        $param = $this->param;
        $data = $advertPositionModel->getDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $advertPositionModel->getError()]);
        } 
        return resultArray(['data' => $data]);
    }

    public function save()
    {
        $advertPositionModel = model('OrderPosition');
        $param = $this->param;
        $data = $advertPositionModel->createData($param);
        if (!$data) {
            return resultArray(['error' => $advertPositionModel->getError()]);
        } 
        return resultArray(['data' => '添加成功']);
    }

    public function update()
    {
        $advertPositionModel = model('OrderPosition');
        $param = $this->param;
        $data = $advertPositionModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $advertPositionModel->getError()]);
        } 
        return resultArray(['data' => '编辑成功']);
    }

    public function delete()
    {
        $advertPositionModel = model('OrderPosition');
        $param = $this->param;
        $data = $advertPositionModel->delDataById($param['id'], false);
        if (!$data) {
            return resultArray(['error' => $advertPositionModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']);    
    }

    public function deletes()
    {
        $advertPositionModel = model('OrderPosition');
        $param = $this->param;
        $data = $advertPositionModel->delDatas($param['ids'], false);
        if (!$data) {
            return resultArray(['error' => $advertPositionModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']); 
    }

    public function enables()
    {
        $advertPositionModel = model('OrderPosition');
        $param = $this->param;
        $data = $advertPositionModel->enableDatas($param['ids'], $param['status'], true);
        if (!$data) {
            return resultArray(['error' => $advertPositionModel->getError()]);
        } 
        return resultArray(['data' => '操作成功']);         
    }
}
 