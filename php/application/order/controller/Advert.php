<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\order\controller;

use think\facade\Request;

class Advert extends ApiCommon
{
    
    public function index()
    {
        $advertModel = model('Advert');
        $data = $advertModel->getDataList();
        return resultArray(['data' => $data]);
    }

    public function read()
    {
        $advertModel = model('Advert');
        $param = $this->param;
        $data = $advertModel->getDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $advertModel->getError()]);
        } 
        return resultArray(['data' => $data]);
    }

    public function save()
    {
        $advertModel = model('Advert');
        $param = $this->param;
        $data = $advertModel->createData($param);
        if (!$data) {
            return resultArray(['error' => $advertModel->getError()]);
        } 
        return resultArray(['data' => '添加成功']);
    }

    public function update()
    {
        $advertModel = model('Advert');
        $param = $this->param;
        $data = $advertModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $advertModel->getError()]);
        } 
        return resultArray(['data' => '编辑成功']);
    }

    public function delete()
    {
        $advertModel = model('Advert');
        $param = $this->param;
        $data = $advertModel->delDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $advertModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']);    
    }

    public function deletes()
    {
        $advertModel = model('Advert');
        $param = $this->param;
        $data = $advertModel->delDatas($param['ids']);
        if (!$data) {
            return resultArray(['error' => $advertModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']); 
    }

    public function enables()
    {
        $advertModel = model('Advert');
        $param = $this->param;
        $data = $advertModel->enableDatas($param['ids'], $param['status'], true);
        if (!$data) {
            return resultArray(['error' => $advertModel->getError()]);
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
            return resultArray(['error' => '请上传广告图！']);
        }
        $info = $file->validate(['ext'=>'jpg,png,jpeg'])->move(ROOT_PATH . DS . 'public' . DS . 'uploads' . DS . 'adverts');
        if ($info) {
            return resultArray(['data' =>  'uploads/adverts/'. $info->getSaveName() ]);
        }
        return resultArray(['error' =>  $file->getError()]);
    }
}
 