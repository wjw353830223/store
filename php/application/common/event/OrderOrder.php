<?php
namespace app\common\event;
use GatewayClient\Gateway;
use app\common\model\Member;
use app\common\model\OrderOrder as Order;
use app\common\model\User;
use app\common\model\Desk;
use app\common\model\OrderMenuAttribution;
use app\common\model\Message;
use think\Exception;
class OrderOrder
{
    public static $error = null;
    const EXPIRE_LIMIT = 5 * 3600;
    public function beforeInsert($order){
        //下单时厨师都不在线
        if(Gateway::getClientIdCountByGroup(2) <= 0){
            $member = Member::get($order['member_id']);
            if($order['type']==Order::TYPE_WAITER){
                $user = User::get($order['member_id']);
                $uid = 'admin:'.$user->id;
            }else{
                $uid = $member['member_id'];
            }
            $message = '厨师都未上线，请线下点餐！';
            Gateway::sendToUid($uid, json_encode([
                'type'=>'chiefoffline',
                'data'=> [
                    'message'=>$message
                ]
            ]));
            self::$error = '厨师都不在线，请线下点餐！';
            return false;
        }
    }
    public function beforeUpdate($order){
        $press_status = isset($order->press_status)?$order->press_status:null;
        $status = isset($order->status)?$order->status:null;
        $order = Order::get($order->id);
        if(is_null($press_status)){
            $press_status=$order->press_status;
        }
        if(is_null($status)){
            $status=$order->status;
        }
        $member = Member::get($order['member_id']);
        if ($order['type'] == Order::TYPE_WAITER) {
            $user = User::get($order['member_id']);
            $uid = 'admin:' . $user->id;
        } else {
            $uid = $member['member_id'];
        }
        //订单过期了
        $expire = $order->created_at + self::EXPIRE_LIMIT;
        if($status == Order::STATUS_MAKE && $expire < time()){
            $message = '订单已过期，请重新下单！';
            Gateway::sendToUid($uid, json_encode([
                'type' => 'orderexpire',
                'data' => [
                    'message' => $message
                ]
            ]));
            self::$error = $message;
            return false;
        }
        //催单时厨师都不在线
        if($press_status==Order::STATUS_PRESS && Gateway::getClientIdCountByGroup(2) <= 0) {
            $message = '厨师都不在线，请联系商家！';
            Gateway::sendToUid($uid, json_encode([
                'type' => 'chiefoffline',
                'data' => [
                    'message' => $message
                ]
            ]));
            self::$error = $message;
            return false;
        }
    }

    /**
     * 下单成功发给厨师和后台
     * @param $order
     */
    public function afterInsert($order) {
        if(isset($order->orderGoods)){
            $goods = json_decode($order->orderGoods,true);
        }else{
            $order = Order::get($order->id);
            $goods = $order->partitions->toArray();
        }
        $member = Member::get($order['member_id']);
        if($order['type']==Order::TYPE_WAITER){
            $user = User::get($order['member_id']);
            $member = [
                'member_id'=>$user->id,
                'member_mobile'=>$user->mobile
            ];
        }
        $table = Desk::get($order->tid);
        if(!empty($goods)){
            foreach($goods as &$good){
                $good['sku'] = [];
                if($good['sku_id']){
                    $sku = OrderMenuAttribution::get($good['sku_id']);
                    $good['sku'] = json_decode($sku->specValue,true);
                }
            }
            unset($good);
        }
        $message = [
            'type'=> 'order',
            'data'=> [
                'type'=>$order['type'],
                'tid'=>$order->tid,
                'member'=>[
                    'id'=>$member['member_id'],
                    'mobile'=>$member['member_mobile']
                ],
                'desk'=>[
                    'id'=>$table->id,
                    'name'=>$table->name
                ],
                'orderGoods' => $goods
            ]
        ];
        try{
            Gateway::sendToGroup('admin', json_encode($message));
            if(Gateway::getClientIdCountByGroup(2) > 0){
                $data = [
                    'sender_id' => $order['type']==Order::TYPE_WAITER?'admin:'.$order['member_id']:$order['member_id'],
                    'message' => '',
                    'communicate' => $order['type']==Order::TYPE_WAITER?Message::COMMUNICATE_WAITER_TO_CHIEF:Message::COMMUNICATE_CUSTOMER_TO_CHIEF,
                    'type' => 'order'
                ];
                $list=Gateway::getClientSessionsByGroup(2);
                foreach($list as $client_id=>$session){
                    $data['receiver_id'] = $session['uid'];
                    $messageModel = Message::create($data);
                    $message['message_id'] = $messageModel->id;
                    $messageModel->message = json_encode($message);
                    $messageModel->save();
                    Gateway::sendToUid($session['uid'], json_encode($message));
                }
            }
        }catch(\Exception $e){
            echo $e->getMessage();
            return;
        }
    }
    public function afterUpdate($order){
        $partition_id = isset($order['partition_id'])?$order['partition_id']:null;
        $status = isset($order->status)?$order->status:null;
        $press_status=isset($order->press_status)?$order->press_status:null;
        $order = Order::get($order->id);

        $goods = $order->partitions->toArray();
        $member = Member::get($order['member_id']);
        if($order['type']==Order::TYPE_WAITER){
            $user = User::get($order['member_id']);
            $member = [
                'member_id'=>$user->id,
                'member_mobile'=>$user->mobile
            ];
        }
        $table = Desk::get($order->tid);
        if(!empty($goods)){
            foreach($goods as &$good){
                $good['sku'] = [];
                if($good['sku_id']){
                    $sku = OrderMenuAttribution::get($good['sku_id']);
                    $good['sku'] = json_decode($sku->specValue,true);
                }
            }
            unset($good);
        }
        if($status == Order::STATUS_MAKE){
            $type = 'make';
            $data = [
                'type'=>$type,
                'tid'=>$order->tid,
                'orderGoods' => $goods,
                'desk'=>[
                    'id'=>$table->id,
                    'name'=>$table->name
                ],
            ];
            if(!is_null($partition_id)){
                $data['current_partition_id']=$partition_id;
            }
            if($order['type']==Order::TYPE_WAITER){
                $user = User::get($order['member_id']);
                $data['waiter'] = [
                    'id'=>$user->id,
                    'username'=>$user->username
                ];
                $uid = 'admin:'.$user->id;
                $communicate = Message::COMMUNICATE_CHIEF_TO_WAITER;
            }else{
                $data['member'] = [
                    'id'=>$member['member_id'],
                    'mobile'=>$member['member_mobile']
                ];
                $uid = $member['member_id'];
                $communicate = Message::COMMUNICATE_CHIEF_TO_CUSTOMER;
            }
            $message = [
                'type'=> $type,
                'data'=> $data
            ];
            try{
                Gateway::sendToGroup('admin', json_encode($message));
                $data = [
                    'type'=>$type,
                    'sender_id' => 'admin:'.$GLOBALS['userInfo']->id,
                    'message' => '',
                    'communicate' => $communicate,
                    'receiver_id' => $uid
                ];
                $messageModel = Message::create($data);
                $message['message_id'] = $messageModel->id;
                $messageModel->message = json_encode($message);
                $messageModel->save();
                Gateway::sendToUid($uid, json_encode($message));
            }catch(Exception $e){
                return;
            }
        }
        if($status == Order::STATUS_EAT){
            $type='eat';
            $data = [
                'type'=>$type,
                'tid'=>$order->tid,
                'orderGoods' => $goods,
                'desk'=>[
                    'id'=>$table->id,
                    'name'=>$table->name
                ],
            ];
            if(!is_null($partition_id)){
                $data['current_partition_id']=$partition_id;
            }
            if($order['type']==Order::TYPE_WAITER){
                $user = User::get($order['member_id']);
                $data['waiter'] = [
                    'id'=>$user->id,
                    'username'=>$user->username
                ];
                $uid = 'admin:'.$user->id;
                $communicate = Message::COMMUNICATE_SYSTEM_TO_WAITER;
            }else{
                $data['member'] = [
                    'id'=>$member['member_id'],
                    'mobile'=>$member['member_mobile']
                ];
                $uid = $member['member_id'];
                $communicate = Message::COMMUNICATE_SYSTEM_TO_CUSTOMER;
            }
            $message1 = $message2 = $message = [
                'type'=> $type,
                'data'=> $data
            ];
            try{
                Gateway::sendToGroup('admin', json_encode($message));
                $data = [
                    'type'=>$type,
                    'sender_id' => 'admin:'.$GLOBALS['userInfo']->id,
                    'message' => '',
                    'communicate' => $communicate,
                    'receiver_id' => $uid
                ];
                $messageModel = Message::create($data);
                $message['message_id'] = $messageModel->id;
                $messageModel->message = json_encode($message);
                $messageModel->save();
                Gateway::sendToUid($uid, json_encode($message));
                //通知服务员(随机)注意结账
                if(Gateway::getClientIdCountByGroup(3) > 0 && $order->payed_at==0){
                    $data = [
                        'type'=> 'eat',
                        'sender_id' => 'admin:'.$GLOBALS['userInfo']->id,
                        'message' => '',
                        'communicate' => Message::COMMUNICATE_SYSTEM_TO_WAITER
                    ];
                    $list=Gateway::getClientSessionsByGroup(3);
                    $client_id = array_rand($list);
                    $session = $list[$client_id];
                    $data['receiver_id'] = $session['uid'];
                    $messageModel = Message::create($data);
                    $message1['message_id']=$messageModel->id;
                    $messageModel->message = json_encode($message1);
                    $messageModel->save();
                    Gateway::sendToClient($client_id, json_encode($message1));
                }
                //通知厨师取餐完成
                if(Gateway::getClientIdCountByGroup(2) > 0){
                    $data = [
                        'type'=> 'eat',
                        'sender_id' => 'admin:'.$GLOBALS['userInfo']->id,
                        'message' => '',
                        'communicate' => Message::COMMUNICATE_SYSTEM_TO_CHIEF
                    ];
                    $list=Gateway::getClientSessionsByGroup(2);
                    foreach($list as $client_id=>$session){
                        $data['receiver_id'] = $session['uid'];
                        $messageModel = Message::create($data);
                        $message2['message_id'] = $messageModel->id;
                        $messageModel->message = json_encode($message2);
                        $messageModel->save();
                        Gateway::sendToUid($session['uid'],json_encode($message));
                    }

                }
            }catch(Exception $e){
                return;
            }
        }
        if($status == Order::STATUS_CANCEL){
            $type='cancel';
            $data = [
                'type'=>$type,
                'tid'=>$order->tid,
                'member'=>[
                    'id'=>$member['member_id'],
                    'mobile'=>$member['member_mobile']
                ],
                'desk'=>[
                    'id'=>$table->id,
                    'name'=>$table->name
                ],
                'orderGoods' => $goods
            ];
            $group = 0;
            $communicate = 0;
            //给厨师发消息 订单已取消
            if($status==Order::STATUS_CANCEL){
                $group = 2;
                $communicate = $order['type']==Order::TYPE_WAITER?Message::COMMUNICATE_WAITER_TO_CHIEF:Message::COMMUNICATE_CUSTOMER_TO_CHIEF;
            }
            $message = [
                'type'=> $type,
                'data'=> $data
            ];
            try{
                Gateway::sendToGroup('admin', json_encode($message));
                if(Gateway::getClientIdCountByGroup($group) > 0){
                    $data = [
                        'type'=> $type,
                        'sender_id' => $order['type']==Order::TYPE_WAITER?'admin:'.$order['member_id']:$order['member_id'],
                        'message' => '',
                        'communicate' => $communicate
                    ];
                    $list=Gateway::getClientSessionsByGroup($group);
                    foreach($list as $client_id=>$session){
                        $data['receiver_id'] = $session['uid'];
                        $messageModel = Message::create($data);
                        $message['message_id'] = $messageModel->id;
                        $messageModel->message = json_encode($message);
                        $messageModel->save();
                        Gateway::sendToUid($session['uid'],json_encode($message));
                    }
                }
            }catch(Exception $e){
                return;
            }
        }
        if($press_status==Order::STATUS_PRESS){
            $type='press';
            $data = [
                'type'=>$type,
                'tid'=>$order->tid,
                'member'=>[
                    'id'=>$member['member_id'],
                    'mobile'=>$member['member_mobile']
                ],
                'desk'=>[
                    'id'=>$table->id,
                    'name'=>$table->name
                ],
                'orderGoods' => $goods
            ];
            $group = 0;
            $communicate = 0;
            //给厨师发消息 用户催单了
            if($press_status==Order::STATUS_PRESS){
                $group = 2;
                $communicate = $order['type']==Order::TYPE_WAITER?Message::COMMUNICATE_WAITER_TO_CHIEF:Message::COMMUNICATE_CUSTOMER_TO_CHIEF;
            }
            $message = [
                'type'=> $type,
                'data'=> $data
            ];
            try{
                Gateway::sendToGroup('admin', json_encode($message));
                if(Gateway::getClientIdCountByGroup($group) > 0){
                    $data = [
                        'type'=> $type,
                        'sender_id' => $order['type']==Order::TYPE_WAITER?'admin:'.$order['member_id']:$order['member_id'],
                        'message' => '',
                        'communicate' => $communicate
                    ];
                    $list=Gateway::getClientSessionsByGroup($group);
                    foreach($list as $client_id=>$session){
                        $data['receiver_id'] = $session['uid'];
                        $messageModel = Message::create($data);
                        $message['message_id'] = $messageModel->id;
                        $messageModel->message = json_encode($message);
                        $messageModel->save();
                        Gateway::sendToUid($session['uid'],json_encode($message));
                    }
                }
            }catch(Exception $e){
                return;
            }
        }
    }
}