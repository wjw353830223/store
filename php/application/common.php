<?php
use think\facade\Hook;
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件
/**
 * 行为绑定
 */

Hook::add('app_init','app\\common\\behavior\\InitConfigBehavior');

/**
 * 返回对象
 * @param $array 响应数据
 */
function resultArray($array)
{
    if(isset($array['data'])) {
        $array['error'] = '';
        $code = 200;
    } elseif (isset($array['error'])) {
        $code = 400;
        $array['data'] = '';
    }
    return [
        'code'  => $code,
        'data'  => $array['data'],
        'error' => $array['error']
    ];
}

/**
 * 调试方法
 * @param  array   $data  [description]
 */
function p($data,$die=1)
{
    echo "<pre>";
    print_r($data);
    echo "</pre>";
    if ($die) die;
}

/**
 * 用户密码加密方法
 * @param  string $str      加密的字符串
 * @param  [type] $auth_key 加密符
 * @return string           加密后长度为32的字符串
 */
function user_md5($str, $auth_key = '')
{
    return '' === $str ? '' : md5(sha1($str) . $auth_key);
}
/**
 * 验证输入的手机号码
 *
 * @access  public
 * @param   string      $user_mobile      需要验证的手机号码
 *
 * @return bool
 */
function is_mobile($user_mobile){
    $chars = "/^((\(\d{2,3}\))|(\d{3}\-))?1(3|5|7|8|9)\d{9}$/";

    if (preg_match($chars, $user_mobile)){
        return true;
    }else{
        return false;
    }
}
/**
 * 获取客户端IP地址
 * @param integer $type 返回类型 0 返回IP地址 1 返回IPV4地址数字
 * @param boolean $adv 是否进行高级模式获取（有可能被伪装）
 * @return mixed
 */
function get_client_ip($type = 0,$adv=false) {
    $type       =  $type ? 1 : 0;
    static $ip  =   NULL;
    if ($ip !== NULL) return $ip[$type];
    if($adv){
        if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $arr    =   explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
            $pos    =   array_search('unknown',$arr);
            if(false !== $pos) unset($arr[$pos]);
            $ip     =   trim($arr[0]);
        }elseif (isset($_SERVER['HTTP_CLIENT_IP'])) {
            $ip     =   $_SERVER['HTTP_CLIENT_IP'];
        }elseif (isset($_SERVER['REMOTE_ADDR'])) {
            $ip     =   $_SERVER['REMOTE_ADDR'];
        }
    }elseif (isset($_SERVER['REMOTE_ADDR'])) {
        $ip     =   $_SERVER['REMOTE_ADDR'];
    }
    // IP地址合法验证
    $long = sprintf("%u",ip2long($ip));
    $ip   = $long ? array($ip, $long) : array('0.0.0.0', 0);
    return $ip[$type];
}
/**
 * 统一密码生成
 * @param string $password 客户输入密码
 * @param string $salt 账户绑定散列码
 * @return string
 */
function sp_password($password,$salt){
    if (empty($salt) || strlen($salt) < 6 ) {
        return false;
    }
    return md5(md5($password).$salt);
}
/**
 * 随机字符串生成
 * @param int $len 生成的字符串长度
 * @param int $rule 字符串规则 1.纯数字 2.纯小写字母 3.纯大写字母 4.大小写字母混合 5.大小写字母混合加数字(default)
 * @return string
 */
function random_string($len = 6,$rule = 0) {
    $chars = array();

    $lower = array(
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z"
    );

    $capital = array(
        "A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"
    );

    $nums = array("0", "1", "2","3", "4", "5", "6", "7", "8", "9");

    switch ($rule) {
        case '1':
            $chars = $nums;
            break;
        case '2':
            $chars = $lower;
            break;
        case '3':
            $chars = $capital;
            break;
        case '4':
            $chars = array_merge($lower,$capital);
            break;
        case '5':
            $chars = array_merge($lower,$capital,$nums);
            break;
        default:
            $chars = array_merge($lower,$capital,$nums);
            break;
    }

    $charsLen = count($chars) - 1;
    shuffle($chars);    // 将数组打乱
    $output = "";
    for ($i = 0; $i < $len; $i++) {
        $output .= $chars[random_int(0, $charsLen)];
    }
    return $output;
}



