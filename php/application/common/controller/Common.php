<?php
// +----------------------------------------------------------------------
// | Description: 解决跨域问题
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\common\controller;

use think\Controller;
use think\facade\Request;

class Common extends Controller
{
    public $param;
    public function initialize()
    {
        parent::initialize();
        $origin = isset($_SERVER['HTTP_ORIGIN'])?$_SERVER['HTTP_ORIGIN']:(isset($_SERVER['HTTP_REFERER'])?$_SERVER['HTTP_REFERER']:'');

        /*防止跨域*/
        header('Access-Control-Allow-Origin: '.$origin);//允许的请求域
        header('Access-Control-Allow-Credentials: true');//允许请求携带Cookies
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');//支持的请求方法
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, authKey, sessionId");//允许的请求头
        $param =  Request::instance()->param();            
        $this->param = $param;
    }

    public function object_array($array) 
    {  
        if (is_object($array)) {  
            $array = (array)$array;  
        } 
        if (is_array($array)) {  
            foreach ($array as $key=>$value) {  
                $array[$key] = $this->object_array($value);  
            }  
        }  
        return $array;  
    }
}
 