<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\order\controller;

use Lib\Qrcode;

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
        $data = $tableModel->delDatas($param['ids'], false);
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
    public function qrcode(){
        $host_name = exec("hostname");
        $host_ip = gethostbyname($host_name); //获取本机的局域网IP
        $param = $this->param;
        $url = $url = url('/dist/frontend','tid='.$param['id'],'', $host_ip);

        $qrcode = new Qrcode();
        $qrcode->content = $url;
        $qrcode->is_save = true;
        $qrcode->logo_file = false;
        $save_path = ROOT_PATH ."public".DS."qrcode" .DS;
        $qrcode->save_path = $save_path;
        if(!is_dir($qrcode->save_path)){
            @mkdir($qrcode->save_path,0777, true);
        }
        $imgName=$qrcode->build();
        $imgPath=$qrcode->save_path . $imgName;
        header("Cache-Control: public");
        header("Content-Description: File Transfer");
        header('Content-disposition: attachment; filename='.basename($imgName)); //文件名
        header("Content-Transfer-Encoding: binary"); //告诉浏览器，这是二进制文件
        header('Content-Length: '. filesize($imgPath)); //告诉浏览器，文件大小
        header('Content-Type: application/octet-stream'); //告诉浏览器，文件大小
        @readfile($imgPath);
    }
}
 