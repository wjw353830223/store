<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\common\model;



use GatewayClient\Gateway;

class OrderOrder extends Common
{

    protected $autoWriteTimestamp = true;
    protected $createTime = 'created_at';
    protected $updateTime = 'updated_at';
    /**
     * 为了数据库的整洁，同时又不影响Model和Controller的名称
     * 我们约定每个模块的数据表都加上相同的前缀，比如微信模块用weixin作为数据表前缀
     */
    protected $name = 'order_order';
    const STATUS_ORDER = 1;
    const STATUS_MAKE = 2;
    const STATUS_GET = 3;
    const STATUS_NO_GET = 4;
    const STATUS_EAT = 5;
    const STATUS_PAY = 6;
    const STATUS_FINISH = 7;
    const STATUS_CANCEL = 8;
    const STATUS_DELETE = 9;
    const STATUS_PRESS = 1;
    const TYPE_WAITER = 1;
    protected static function init()
    {
        self::observe(\app\common\event\OrderOrder::class);
    }
    public function partitions(){
        return $this->hasMany('OrderOrderPartition','order_id', 'id');
    }
    public function member(){
        return $this->hasOne('Member','member_id', 'member_id');
    }
    public function user(){
        return $this->hasOne('User','member_id', 'id');
    }
    public function desk(){
        return $this->hasOne('Desk','id', 'tid');
    }

    /**
     * @param $keywords
     * @param $page
     * @param $limit
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
	public function getDataList($param)
	{
        $map[] = ['member_id', 'eq', $param['member_id']];
        $map[] = ['type', 'eq', $param['type']];
        if($param['status'] != 0){

            if($param['status']==OrderOrder::STATUS_MAKE){
                $map[] = ['status', 'in', [OrderOrder::STATUS_MAKE, OrderOrder::STATUS_GET]];
            }else{
                $map[] = ['status', 'eq', $param['status']];
            }
        }

        $page = isset($param['page'])?$param['page']:0;
        $limit = isset($param['limit'])?$param['limit']:0;
        $dataCount = $this->where($map)->count('id');
        $list = $this->where($map)->order('created_at','desc');
        // 若有分页
        if ($page && $limit) {
            $list = $list->limit(0,$page*$limit);
        }
        $list = $list->with([
            'partitions'=>function($query){
                $query->with([
                    'sku'=>function($query){
                        $query->field('id,image,specName,specValue');
                    },
                    'menu'=>function($query){
                        $query->field('name,id,image');
                    }
                ]);
            }
        ])->select();
        if($param['status']==OrderOrder::STATUS_MAKE){
            foreach($list as $key=>$val){
                if($val->status==OrderOrder::STATUS_GET){
                    $makeStatus=false;
                    foreach($val->partitions as $vv){
                        if($vv->status==OrderOrder::STATUS_MAKE){
                            $makeStatus=true;
                            break;
                        }
                    }
                    if(!$makeStatus){
                        unset($list[$key]);
                        --$dataCount;
                    }
                }
            }
        }
        $data['list'] = $list;
        $data['dataCount'] = $dataCount;
        return $data;
	}

    /**
     * * @param null $orderSn 订单号
     * @param null $startTime 开始时间
     * @param null $endTime 结束时间
     * @param int $status 订单状态
     * @param int $page 页码
     * @param int $limit 每页记录数
     * @param int $pay_status 支付状态
     * @param int $mod 查询模式  0 营业模式，每次取最新 1 非营业模式
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
	public function ordersList($orderSn, $startTime, $endTime, $status, $page=1, $limit=50,$pay_status=0,$mod=0){
        $startTime = $startTime?$startTime:strtotime(date('Y-m-d'),time());
        $endTime = $endTime?$endTime:(time() + 5 * 60);
        $map[] = ['created_at', 'gt', $startTime];
        $map[] = ['created_at', 'lt', $endTime];
        if($orderSn){
            $map[] = ['order_sn', 'eq', $orderSn];
        }
        if($status){
            if($status==OrderOrder::STATUS_MAKE){
                $map[] = ['status', 'in', [OrderOrder::STATUS_MAKE, OrderOrder::STATUS_GET]];
            }else{
                $map[] = ['status', 'eq', $status];
                if($status==OrderOrder::STATUS_ORDER){
                    $map[] = ['created_at', '>= time', time() - \app\common\event\OrderOrder::EXPIRE_LIMIT];
                }
            }
        }
        if($pay_status==1){
            $map[] = ['payed_at', 'eq', 0];
        }
        if($pay_status==2){
            $map[] = ['payed_at', 'neq', 0];
        }
        $dataCount = $this->where($map)->count('id');
        $list = $this->where($map);
        $accountList = $list->with('partitions')->select()->toArray();
        if($status==OrderOrder::STATUS_MAKE){
            foreach($accountList as $key=>$val){
                if($val['status']==OrderOrder::STATUS_GET){
                    $makeStatus=false;
                    foreach($val['partitions'] as $vv){
                        if($vv['status']==OrderOrder::STATUS_MAKE){
                            $makeStatus=true;
                            break;
                        }
                    }
                    if(!$makeStatus){
                        unset($accountList[$key]);
                        --$dataCount;
                    }
                }
            }
        }
        $accountsReceivable = array_reduce($accountList, function($carry, $item){
            $carry += $item['order_amount'];
            return $carry;
        },0);
        $accountsReceipted = array_reduce($accountList, function($carry, $item){
            $amount=0;
            if($item['payed_at'] > 0){
                $amount = $item['order_amount'];
            }
            $carry += $amount;
            return $carry;
        },0);
        if($mod){
            $list = $list->page($page, $limit);
        }else{
            $list = $list->limit(0,$page*$limit);
        }
        $with=[
            'partitions'=>function($query){
                $query->with([
                    'sku'=>function($query){
                        $query->field('id,image,specName,specValue');
                    },
                    'menu'=>function($query){
                        $query->field('name,id,image');
                    }
                ]);
            },
            'member'=>function($query){
                $query->field('member_mobile,member_id');
            },
            'desk'=>function($query){
                $query->field('name,id');
            },
        ];
        $list = $list->with($with)->select();
        if($status==OrderOrder::STATUS_MAKE){
            foreach($list as $key=>$val){
                if($val['status']==OrderOrder::STATUS_GET){
                    $makeStatus=false;
                    foreach($val['partitions'] as $vv){
                        if($vv['status']==OrderOrder::STATUS_MAKE){
                            $makeStatus=true;
                            break;
                        }
                    }
                    if(!$makeStatus){
                        unset($list[$key]);
                    }
                }
            }
        }
        if(!empty($list)){
            foreach($list as $key=>&$val){
                if($val['type'] && empty($val['member'])){
                    $user = model('User')->get($val['member_id']);
                    $val['member'] = (object)[
                        'member_id'=>$user->id,
                        'member_mobile'=>$user->mobile
                    ];
                }
            }
            unset($val);
        }
        $data['list'] = $list;
        $data['dataCount'] = $dataCount;
        $data['accountsReceivable'] = $accountsReceivable;
        $data['accountsReceipted'] = $accountsReceipted;
        return $data;
    }
    /**
     * 生成支付单编号(两位随机 + 从2000-01-01 00:00:00 到现在的秒数+微秒+会员ID%1000)，该值会传给第三方支付接口
     * 长度 =2位 + 10位 + 3位 + 3位  = 18位
     * 1000个会员同一微秒提订单，重复机率为1/100
     * @return string
     */
    public function make_paysn($member_id) {
        return mt_rand(10,99)
            . sprintf('%010d',time() - 946656000)
            . sprintf('%03d', (float) microtime() * 1000)
            . sprintf('%03d', (int) $member_id % 1000);
    }
    /**
     * 订单编号生成规则，n(n>=1)个订单表对应一个支付表，
     * 生成订单编号(年取1位 + $pay_id取13位 + 第N个子订单取2位)
     * 1000个会员同一微秒提订单，重复机率为1/100
     * @param $pay_id 支付表自增ID
     * @return string
     */
    public function make_ordersn($pay_id) {
        //记录生成子订单的个数，如果生成多个子订单，该值会累加
        static $num;
        if (empty($num)) {
            $num = 1;
        } else {
            $num ++;
        }
        return (date('y',time()) % 9+1) . sprintf('%013d', $pay_id) . sprintf('%02d', $num);
    }
    /**
     * [createData 新建]
     * @linchuangbin
     * @DateTime  2017-02-10T21:19:06+0800
     * @param     array                    $param [description]
     * @return    [array]                         [description]
     */
    public function createData($param)
    {
        if(isset($param['from_car']) && $param['from_car']){
            $orderGoods=json_decode($param['orderGoods'],true);
        }else{
            $menu = model('OrderMenu')->get($param['menu_id']);
            $param['name'] = $menu->name;
            $param['image'] = $menu->image;
            if($param['sku_id']){
                $sku=model('OrderMenuAttribution')->get($param['sku_id']);
                $param['image'] = $sku->image;
            }
            $orderGoods = [
                [
                    'name'=>$param['name'],
                    'image'=>$param['image'],
                    'message'=>$param['message'],
                    'price'=>$param['price'],
                    'nums'=>$param['nums'],
                    'sku_id'=>$param['sku_id'],
                    'menu_id'=>$param['menu_id'],

                ]
            ];
        }
        $order_amount = array_reduce($orderGoods, function($carry, $item){
            $carry += $item['price'] * $item['nums'];
            return $carry;
        }, 0);
        if($order_amount != $param['order_amount']){
            $this->error = '总金额和商品数量不匹配';
            return false;
        }
        try{
            $pay_sn = $this->make_paysn($param['member_id']);
            $pay=new OrderPay();
            $pay->pay_sn = $pay_sn;
            $pay->member_id = $param['member_id'];
            $pay->save();
            $order_sn = $this->make_ordersn($pay->id);
            $param['order_sn']=$order_sn;
            if($param['from_car']==0){
                $param['orderGoods'] = json_encode($orderGoods);
            }
            if($this->data($param)->allowField(true)->save()===false){
                return false;
            }
            $pay->order_id = $this->id;
            $pay->save();
            foreach($orderGoods as &$good){
                $good['order_partition_sn'] = $this->make_ordersn($pay->id);
                $good['order_partition_amount'] = $good['price'] * $good['nums'];
            }
            unset($good);
            $this->partitions()->saveAll($orderGoods);
            if($param['from_car']){
                foreach($orderGoods as $good){
                    $car = OrderCar::get($good['id']);
                    $car->delete();
                }
            }
            return true;
        }catch (\Exception $e){
            echo $e->getMessage();
            $this->error = '添加失败';
            return false;
        }
    }
    /**
     * [updateDataById 编辑]
     * @linchuangbin
     * @DateTime  2017-02-10T21:24:49+0800
     * @param     [type]                   $param [description]
     * @param     [type]                   $id    [购物车id]
     * @return    [type]                          [description]
     */
    public function updateDataById($param, $id)
    {
        try {
            if(isset($param['pay'])){
                $order = self::get($id);
                $goods = $order->partitions->toArray();
                $member = Member::get($order->member_id);
                $table = Desk::get($order->tid);
                if(Gateway::getClientIdCountByGroup(3) <= 0){
                    $message = '服务员都不在线，请到餐台结账！';
                    Gateway::sendToUid($member->member_id, json_encode([
                        'type' => 'waiteroffline',
                        'data' => [
                            'message' => $message
                        ]
                    ]));
                    \app\common\event\OrderOrder::$error = $message;
                    return false;
                }
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
                $data = [
                    'sender_id' => $member->member_id,
                    'message' => $message,
                    'communicate' => Message::COMMUNICATE_CUSTOMER_TO_WAITER
                ];
                $list=Gateway::getClientSessionsByGroup(3);
                $client_id = array_rand($list);
                $session = $list[$client_id];
                $data['receiver_id'] = $session['uid'];
                $messageModel = Message::create($data);
                $message['message_id']=$messageModel->id;
                $messageModel->message = json_encode($message);
                $messageModel->save();
                Gateway::sendToClient($client_id, json_encode($message));
                return true;
            }
            if(isset($param['confirmPay'])){
                $param['payed_at'] = time();
            }
            if(isset($param['status']) && $param['status']==self::STATUS_GET){
                if(!isset($param['partition_id'])){
                    return false;
                }
                $partition = new OrderOrderPartition();
                $partition->save([
                    'status'  => self::STATUS_GET,
                    $partition->getPk() => $param['partition_id']
                ],[$partition->getPk() => $param['partition_id']]);
                if($this->allowField(true)->save($param, [$this->getPk() => $id])===false){
                    return false;
                }
                return true;
            }
            if(isset($param['status']) && $param['status']==self::STATUS_EAT){
                if(!isset($param['partition_id'])){
                    return false;
                }
                $partition = new OrderOrderPartition();
                $partition->save([
                    'status'  => self::STATUS_EAT,
                    $partition->getPk() => $param['partition_id']
                ],[$partition->getPk() => $param['partition_id']]);
                $count1=model('OrderOrderPartition')->where([
                    ['order_id','=',$id]
                ])->count();
                $count=model('OrderOrderPartition')->where([
                    ['order_id','=',$id],
                    ['status', '=', self::STATUS_EAT]
                ])->count();
                $param['status']=self::STATUS_GET;
                $count==$count1 && $param['status']=self::STATUS_EAT;
                if($this->allowField(true)->save($param, [$this->getPk() => $id])===false){
                    return false;
                }
                return true;
            }
            if($this->allowField(true)->save($param, [$this->getPk() => $id])===false){
                return false;
            }
            if(isset($param['confirmPay'])){
                $order = self::get($id);
                $pay=new OrderPay();
                $pay->pay_amount = $order->order_amount;
                $pay->pay_time = time();
                $pay->save();
            }
            if(isset($param['status'])){
                $partition = new OrderOrderPartition();
                $partition->save([
                    'status'  => $param['status'],
                ],['order_id' => $id]);
            }
            return true;
        } catch(\Exception $e) {
            echo $e->getMessage();
            $this->error = '编辑失败';
            return false;
        }
    }
    /**
     * [delDataById 根据id删除数据]
     * @linchuangbin
     * @DateTime  2017-02-11T20:57:55+0800
     * @param     string                   $id     [主键]
     * @return    [type]                           [description]
     */
    public function delDataById($id = '', $delSon = false)
    {
        $car=$this->get($id);
        try {
            $car->delete();
            return true;
        } catch(\Exception $e) {
            $this->error = '删除失败';
            return false;
        }
    }
	/**
	 * [getDataById 根据主键获取详情]
	 * @linchuangbin
	 * @DateTime  2017-02-10T21:16:34+0800
	 * @param     string                   $id [主键]
	 * @return    [array]                       
	 */
	public function getDataById($id = '')
	{
		$menu = $this->get($id);
		if(!empty($menu->specs)){
		    $specs = $menu->specs;
		    foreach($specs as $key=>&$value){
		        $value['specName']=json_decode($value['specName'],true);
                $value['specValue']=json_decode($value['specValue'],true);
            }
        }
		if (!$menu) {
			$this->error = '暂无此数据';
			return false;
		}
		return $menu;
	}
}