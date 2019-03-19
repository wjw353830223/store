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
    public function beforeInsert($order){
        //下单时厨师都不在线
//        if(Gateway::getClientIdCountByGroup(2) <= 0){
//            $member = Member::get($order->member_id);
//            if($order['type']==Order::TYPE_WAITER){
//                $user = User::get($order->member_id);
//                $uid = 'admin:'.$user->id;
//            }else{
//                $uid = $member->member_id;
//            }
//            $message = '厨师都未上线，请线下点餐！';
//            Gateway::sendToUid($uid, json_encode([
//                'type'=>'chiefoffline',
//                'data'=> [
//                    'message'=>$message
//                ]
//            ]));
//            self::$error = '厨师都不在线，请线下点餐！';
//            return false;
//        }
    }
    public function beforeUpdate($order){
        //催单时厨师都不在线
//        if($order['press_status']==1 && Gateway::getClientIdCountByGroup(2) <= 0) {
//            $order = Order::get($order->id);
//            $member = Member::get($order->member_id);
//            if ($order['type'] == Order::TYPE_WAITER) {
//                $user = User::get($order->member_id);
//                $uid = 'admin:' . $user->id;
//            } else {
//                $uid = $member->member_id;
//            }
//            $message = '厨师都不在线，请联系商家！';
//            Gateway::sendToUid($uid, json_encode([
//                'type' => 'chiefoffline',
//                'data' => [
//                    'message' => $message
//                ]
//            ]));
//            self::$error = $message;
//            return false;
//        }
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
        $member = Member::get($order->member_id);
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
                    'id'=>$member->member_id,
                    'mobile'=>$member->member_mobile
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
                    'sender_id' => $order['type']==Order::TYPE_WAITER?'admin:'.$order->member_id:$order->member_id,
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
        $order = Order::get($order->id);
        $goods = $order->partitions->toArray();
        $member = Member::get($order->member_id);
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
        //给服务员(随机)发消息 订单注意结账
        if($order->status==Order::STATUS_EAT && $order->payed_at==0){
            $message = [
                'type'=> 'check',
                'data'=> [
                    'type'=>$order['type'],
                    'tid'=>$order->tid,
                    'member'=>[
                        'id'=>$member->member_id,
                        'mobile'=>$member->member_mobile
                    ],
                    'desk'=>[
                        'id'=>$table->id,
                        'name'=>$table->name
                    ],
                    'orderGoods' => $goods
                ]
            ];
            try{
                $group = 3;
                Gateway::sendToGroup('admin', json_encode($message));
                if(Gateway::getClientIdCountByGroup($group) > 0){
                    $data = [
                        'sender_id' => 'admin:'.$GLOBALS['userInfo']['id'],
                        'message' => $message,
                        'communicate' => Message::COMMUNICATE_CHIEF_TO_WAITER
                    ];
                    $list=Gateway::getClientSessionsByGroup($group);
                    $client_id = array_rand($list);
                    $session = $list[$client_id];
                    $data['receiver_id'] = $session['uid'];
                    $messageModel = Message::create($data);
                    $message['message_id']=$messageModel->id;
                    $messageModel->message = json_encode($message);
                    $messageModel->save();
                    Gateway::sendToClient($client_id, json_encode($message));
                }
            }catch(Exception $e){
                return;
            }
        }
        if($order->status == Order::STATUS_CANCEL || $order->press_status==Order::STATUS_PRESS){
            $data = [
                'type'=>$order['type'],
                'tid'=>$order->tid,
                'member'=>[
                    'id'=>$member->member_id,
                    'mobile'=>$member->member_mobile
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
            if($order->status==Order::STATUS_CANCEL){
                $type='cancel';
                $group = 2;
                $communicate = $order['type']==Order::TYPE_WAITER?Message::COMMUNICATE_WAITER_TO_CHIEF:Message::COMMUNICATE_CUSTOMER_TO_CHIEF;
            }
            //给厨师发消息 用户催单了
            if($order->press_status==Order::STATUS_PRESS){
                $type='press';
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
                        'sender_id' => $order['type']==Order::TYPE_WAITER?'admin:'.$order->member_id:$order->member_id,
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
        if(in_array($order->status,[Order::STATUS_MAKE, Order::STATUS_GET])){
            $data = [
                'type'=>$order['type'],
                'tid'=>$order->tid,
                'orderGoods' => $goods,
                'desk'=>[
                    'id'=>$table->id,
                    'name'=>$table->name
                ],
            ];
            if($order['type']==Order::TYPE_WAITER){
                $user = User::get($order->member_id);
                $data['waiter'] = [
                    'id'=>$user->id,
                    'username'=>$user->username
                ];
                $uid = 'admin:'.$user->id;
                $communicate = Message::COMMUNICATE_CHIEF_TO_WAITER;
            }else{
                $data['member'] = [
                    'id'=>$member->member_id,
                    'mobile'=>$member->member_mobile
                ];
                $uid = $member->member_id;
                $communicate = Message::COMMUNICATE_CHIEF_TO_CUSTOMER;
            }
            //给用户/服务员发消息 订单开始烹制
            if($order->status==Order::STATUS_MAKE){
                $type='make';
            }
            //给用户/服务员发消息 通知取餐
            if($order->status==Order::STATUS_GET){
                $type='notice';
            }
            $message = [
                'type'=> $type,
                'data'=> $data
            ];
            try{
                Gateway::sendToGroup('admin', json_encode($message));
                $data = [
                    'sender_id' => 'admin:'.$GLOBALS['userInfo']['id'],
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
    }
}