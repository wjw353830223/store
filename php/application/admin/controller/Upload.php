<?php
// +----------------------------------------------------------------------
// | Description: 图片上传
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------
namespace app\admin\controller;

use think\facade\Request;
use think\Controller;

class Upload extends Controller
{   
    public function index()
    {
        $origin = isset($_SERVER['HTTP_ORIGIN'])?$_SERVER['HTTP_ORIGIN']:(isset($_SERVER['HTTP_REFERER'])?$_SERVER['HTTP_REFERER']:'');
        /*防止跨域*/
        header('Access-Control-Allow-Origin: '.$origin);//允许的请求域
        header('Access-Control-Allow-Credentials: true');//允许请求携带Cookies
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');//支持的请求方法
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, authKey, sessionId");//允许的请求头

        $file = Request::instance()->file('file');
        if (!$file) {
        	return resultArray(['error' => '请上传文件']);
        }
        $info = $file->validate(['ext'=>'jpg,png,gif'])->move(ROOT_PATH . DS . 'public' . DS . 'uploads');
        if ($info) {
            return resultArray(['data' =>  'uploads'. DS .$info->getSaveName()]);
        }
        
        return resultArray(['error' =>  $file->getError()]);
    }
}
 