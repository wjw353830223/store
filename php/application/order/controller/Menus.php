<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\order\controller;

use think\facade\Request;

class Menus extends ApiCommon
{
    
    public function index()
    {
        $menuModel = model('OrderMenu');
        $param = $this->param;
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

    public function save()
    {
        $menuModel = model('OrderMenu');
        $param = $this->param;
        $data = $menuModel->createData($param);
        if (!$data) {
            return resultArray(['error' => $menuModel->getError()]);
        } 
        return resultArray(['data' => '添加成功']);
    }

    public function update()
    {
        $menuModel = model('OrderMenu');
        $param = $this->param;
        $data = $menuModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $menuModel->getError()]);
        } 
        return resultArray(['data' => '编辑成功']);
    }

    public function delete()
    {
        $menuModel = model('OrderMenu');
        $param = $this->param;
        $data = $menuModel->delDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $menuModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']);    
    }

    public function deletes()
    {
        $menuModel = model('OrderMenu');
        $param = $this->param;
        $data = $menuModel->delDatas($param['ids']);
        if (!$data) {
            return resultArray(['error' => $menuModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']); 
    }

    public function enables()
    {
        $menuModel = model('OrderMenu');
        $param = $this->param;
        $data = $menuModel->enableDatas($param['ids'], $param['status'], true);
        if (!$data) {
            return resultArray(['error' => $menuModel->getError()]);
        } 
        return resultArray(['data' => '操作成功']);         
    }
    public function upload()
    {
        /*防止跨域*/
        header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);//允许的请求域
        header('Access-Control-Allow-Credentials: true');//允许请求携带Cookies
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');//支持的请求方法
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, authKey, sessionId");//允许的请求头
        $request = Request::instance();
        $file = $request->file('image');
        if (!$file) {
            return resultArray(['error' => '请上传菜品图片']);
        }
        $info = $file->validate(['ext'=>'jpg,png,jpeg'])->move(ROOT_PATH . DS . 'public' . DS . 'uploads' . DS . 'menus');
        if ($info) {
            return resultArray(['data' =>  'uploads/menus/'. $info->getSaveName() ]);
        }
        return resultArray(['error' =>  $file->getError()]);
    }
    public function uploadDetailFiles()
    {
        /*防止跨域*/
        header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);//允许的请求域
        header('Access-Control-Allow-Credentials: true');//允许请求携带Cookies
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');//支持的请求方法
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, authKey, sessionId");//允许的请求头
        $request = Request::instance();
        $file = $request->file('upfile');
        if (!$file) {
            return resultArray(['error' => '文件为空！']);
        }
        $info = $file->validate(['ext'=>'jpg,png,jpeg'])->move(ROOT_PATH . DS . 'public' . DS . 'uploads' . DS . 'details');
        if ($info) {
            return resultArray(['data' =>  'uploads/details/'. $info->getSaveName() ]);
        }
        return resultArray(['error' =>  $file->getError()]);
    }
}
 