<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\order\controller;

class Tables extends ApiCommon
{
    
    public function index()
    {
        $tableModel = model('Table');
        $param = $this->param;
        $data = $tableModel->getDataList($param['keywords'], $param['page'], $param['limit']);
        return resultArray(['data' => $data]);
    }

    public function read()
    {
        $tableModel = model('Table');
        $param = $this->param;
        $data = $tableModel->getDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $tableModel->getError()]);
        } 
        return resultArray(['data' => $data]);
    }

    public function save()
    {
        $tableModel = model('Table');
        $param = $this->param;
        $data = $tableModel->createData($param);
        if (!$data) {
            return resultArray(['error' => $tableModel->getError()]);
        } 
        return resultArray(['data' => '添加成功']);
    }

    public function update()
    {
        $tableModel = model('Table');
        $param = $this->param;
        $data = $tableModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $tableModel->getError()]);
        } 
        return resultArray(['data' => '编辑成功']);
    }

    public function delete()
    {
        $tableModel = model('Table');
        $param = $this->param;
        $data = $tableModel->delDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $tableModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']);    
    }

    public function deletes()
    {
        $tableModel = model('Table');
        $param = $this->param;
        $data = $tableModel->delDatas($param['ids'], true);
        if (!$data) {
            return resultArray(['error' => $tableModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']); 
    }

    public function enables()
    {
        $tableModel = model('Table');
        $param = $this->param;
        $data = $tableModel->enableDatas($param['ids'], $param['status'], true);
        if (!$data) {
            return resultArray(['error' => $tableModel->getError()]);
        } 
        return resultArray(['data' => '操作成功']);         
    }
}
 