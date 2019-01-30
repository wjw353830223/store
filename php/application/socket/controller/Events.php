<?php
namespace app\socket\controller;


/**
 * 用于检测业务代码死循环或者长时间阻塞等问题
 * 如果发现业务卡死，可以将下面declare打开（去掉//注释），并执行php start.php reload
 * 然后观察一段时间workerman.log看是否有process_timeout异常
 */
//declare(ticks=1);
use \GatewayWorker\Lib\Gateway;
use Workerman\MySQL\Connection;

class Events
{
    public static $db;
    //进程启动时 实例化数据库连接 将db实例存储在全局变量中(也可以存储在某类的静态成员中)
    public static function onWorkerStart($worker){
        $db_config = config('database.');
        self::$db = new Connection($db_config['hostname'], $db_config['hostport'], $db_config['username'],
            $db_config['password'], $db_config['database'], $db_config['charset']);
    }
    /**
     * 当客户端连接时触发
     * 将client_id 发给客户端 客户端通过ajax请求绑定用户uid
     * 后端绑定操作：
     * Gateway::bindUid($client_id, $uid)
     * Gateway::joinGroup($client_id, $group_id)
     * @param int $client_id 连接id
     */
    public static function onConnect($client_id)
    {
        Gateway::sendToClient($client_id, json_encode(array(
            'type'      => 'init',
            'client_id' => $client_id
        )));
    }
    /**
     * 有消息时
     * @param int $client_id
     * @param mixed $message
     */
    public static function onMessage($client_id, $message)
    {
        // debug
        echo "client:{$_SERVER['REMOTE_ADDR']}:{$_SERVER['REMOTE_PORT']} gateway:{$_SERVER['GATEWAY_ADDR']}:{$_SERVER['GATEWAY_PORT']}  client_id:$client_id session:".json_encode($_SESSION)." onMessage:".$message."\n";

        // 客户端传递的是json数据
        $message_data = json_decode($message, true);
        if(!$message_data)
        {
            return ;
        }

        // 根据类型执行不同的业务
        switch($message_data['type'])
        {
            // 客户端回应服务端的心跳
            case 'pong':
                return;
            // 客户端登录 message格式: {type:login, name:xx, room_id:1} ，添加到客户端，广播给所有客户端xx进入聊天室
            case 'waiter':

                return;
        }
    }

    /**
     * 当客户端断开连接时
     * @param integer $client_id 客户端id
     */
    public static function onClose($client_id)
    {
        // debug
        echo "client:{$_SERVER['REMOTE_ADDR']}:{$_SERVER['REMOTE_PORT']} gateway:{$_SERVER['GATEWAY_ADDR']}:{$_SERVER['GATEWAY_PORT']}  client_id:$client_id onClose:''\n";
        // 向所有人发送
        GateWay::sendToAll("$client_id logout");
    }

}