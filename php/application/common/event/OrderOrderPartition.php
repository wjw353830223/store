<?php
namespace app\common\event;
use GatewayClient\Gateway;
use app\common\model\Member;
use app\common\model\OrderOrder as OrderModel;
use app\common\model\User;
use app\common\model\Desk;
use app\common\model\OrderMenuAttribution;
use app\common\model\Message;
use think\Exception;
use app\common\model\OrderOrderPartition as OrderPartition;
class OrderOrderPartition
{
    public function afterUpdate($partition){
        $status = isset($partition->status)?$partition->status:null;
        if($status==OrderModel::STATUS_GET){
            $partition = OrderPartition::get($partition->id);
            $member = Member::get($partition->order->member_id);
            $table = Desk::get($partition->order->tid);
            $data = [
                'type'=>$partition->order->type,
                'tid'=>$partition->order->tid,
                'good' => $partition->menu,
                'desk'=>[
                    'id'=>$table->id,
                    'name'=>$table->name
                ],
            ];
            if($partition->order->type==OrderModel::TYPE_WAITER){
                $user = User::get($partition->order->member_id);
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
            //给用户/服务员发消息 通知取餐
            if($status==OrderModel::STATUS_GET){
                $type='notice';
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
    }
}