<template>
	<div>
		<div>
			<div>
				<el-switch
					v-model="mod"
					active-text=""
					inactive-text="营业模式">
				</el-switch>
				<el-input
					clearable
					placeholder="订单号"
					v-model="orderSn">
				</el-input>
				<el-select v-model="currentStatus" placeholder="订单状态">
					<el-option
						v-for="item in status"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
				<el-select v-model="currentPayStatus" placeholder="支付状态">
					<el-option
						v-for="item in payStatus"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
				<el-date-picker
					v-model="dateArray"
					type="daterange"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
					:default-time="['00:00:00', '23:59:59']">
				</el-date-picker>
				<el-button type="primary" icon="el-icon-search" @click='search'>搜索</el-button>
			</div>
		</div>
		<div>
			应收餐费:{{accountsReceivable}}元  实际到账{{accountsReceipted}}元
		</div>
		<el-table
		:data="tableData"
		style="width: 100%"
		>
			<el-table-column type="expand">
				<template slot-scope="props">
						<el-card :body-style="{ padding: '0px' }" v-for="(item,index) in props.row.partitions" :key="index">
							<img :src="baseUrl + item.image " class="image">
							<div style="padding: 14px;">
								<span>菜单名称：{{item.name}} </span>
								<div  v-if="item.sku !== null"  class="bottom clearfix">
									<span>规格：{{JSON.parse(item.sku.specValue)}} </span>
								</div>
								<div  class="bottom clearfix" v-if="item.message">
									<span>留言：{{item.message}} </span>
								</div>
								<div class="bottom clearfix">
									<span>分订单号：{{ item.order_partition_sn }}</span>
								</div>
								<div class="bottom clearfix">
									<span>分订单金额：{{ item.order_partition_amount/100 }}元</span>
								</div>
								<el-button v-if="item.status==5" type="text" class="button">已取餐</el-button>
								<el-button v-if="item.status==3" type="text" class="button" @click="orderGet(item)">确认取餐</el-button>
							</div>
						</el-card>
				</template>
    	</el-table-column>
			<el-table-column
			label="订单号"
			prop="order_sn">
			</el-table-column>
      <el-table-column
			label="桌号"
      prop="desk.name">
			</el-table-column>
      <el-table-column
      label="用户账号"
      prop="member.member_mobile">
      </el-table-column>
      <el-table-column
      label="订单来源"
      prop="type">
      </el-table-column>
			<el-table-column
			label="订单总额(元)"
      prop="orderAmount">
			</el-table-column>
      <el-table-column
			label="订单状态"
      prop="statusText">
			</el-table-column>
			<el-table-column
			label="支付状态"
      prop="payStatusText">
			</el-table-column>
      <el-table-column
			label="下单时间"
      prop="createTime">
			</el-table-column>
			<el-table-column label="操作"  width="220">
				<template slot-scope="scope">
					<el-button
						size="mini"
						type="danger"
						@click="check(scope.row)" v-if="scope.row.payed_at==0">收款确认</el-button>
					<el-button
						size="mini"
						@click="finish(scope.row)" v-if="scope.row.payed_at > 0 && scope.row.status==5">订单完成</el-button>
				</template>
			</el-table-column>
    </el-table>
		<div class="pos-rel p-t-20">
      <div class="block pages">
				<el-pagination
				@current-change="handleCurrentChange"
				layout="prev, pager, next"
				:page-size="limit"
				:current-page="currentPage"
				:total="dataCount">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import http from '../../../assets/js/http'
import socket from '../../../assets/js/socket'
export default {
    data() {
      return {
				baseUrl:window.HOST,
        tableData: [],
        dataCount: null,
        currentPage: null,
				limit: 50,
				orderSn: null,
				status: [
					{
						value:0,
						label:'订单状态'
					},
					{
						value:1,
						label:'用户已下单'
					},
					{
						value:2,
						label:'厨师烹饪中'
					},
					{
						value:3,
						label:'通知取餐'
					},
					{
						value:4,
						label:'无人取餐'
					},
					{
						value:5,
						label:'用户已取餐'
					},
					{
						value:6,
						label:'订单已完成'
					},
					{
						value:8,
						label:'订单被取消'
					},
					{
						value:9,
						label:'订单被删除'
					},
				],
				payStatus: [
					{
						value:0,
						label: '支付状态'
					},
					{
						value:1,
						label: '未支付'
					},
					{
						value:2,
						label: '已支付'
					}
				],
				currentStatus: 0,
				currentPayStatus:0,
				mod:true,
				dateArray:[],
				startTime:null,
				endTime:null,
				accountsReceivable:0,
				accountsReceipted:0
      }
    },
		methods: {
			orderGet(item){
				let taht=this
				this.apiPut('order/orders/', item.order_id, {
					partition_id:item.id,
					status:5
				}).then((res) => {
          this.handelResponse(res, (data) => {
						if(data=='success'){
							taht.search();
						}
          })
        })
			},
			check(order){
				let taht=this
				this.apiPut('order/orders/', order.id, {
					confirmPay:1
				}).then((res) => {
          this.handelResponse(res, (data) => {
						if(data=='success'){
							taht.search();
						}
          })
        })
			},
			finish(order){

			},
			search(){
				if(this.dateArray.length>0){
					this.startTime=this.dateArray[0].getTime()/1000
					this.endTime=this.dateArray[1].getTime()/1000
				}
				let data={
					params: {
						page: this.currentPage,
						limit: this.limit,
						orderSn:this.orderSn,
						status:this.currentStatus,
						payStatus:this.currentPayStatus,
						mod:this.mod?1:0,
						startTime:this.startTime,
						endTime:this.endTime
					}
				}
				this.getOrders(data)
			},
			getCurrentPage() {
        let data = this.$route.query
        if (data) {
          if (data.page) {
            this.currentPage = parseInt(data.page)
          } else {
            this.currentPage = 1
          }
        }
			},
			handleCurrentChange(page) {
				//router.push({ path: this.$route.path, query: })
				let data={
					params:{ 
						page: page,
						limit: this.limit,
						orderSn:this.orderSn,
						status:this.currentStatus,
						payStatus:this.currentPayStatus,
						mod:this.mod?1:0,
						startTime:this.startTime,
						endTime:this.endTime
					}
				}
				this.getOrders(data)
      },
			getOrders(data) {
        this.apiGet('order/orders',data).then((res) => {
          this.handelResponse(res, (data) => {
						data.list.map((item) => {
							item.type = item.type==0?'用户':'服务员'
							switch(item.status){
								case '1':
									item.statusText='已下单'
									break;
								case '2':
									item.statusText='制作中'
									break;
								case '3':
									item.statusText='取餐中'
									break;
								case '4':
									item.statusText='无人取餐'
									break;
								case '5':
									item.statusText='进食中'
									break;
								case '6':
									item.statusText='已支付'
									break;
								case '7':
									item.statusText='已完成'
									break;
								case '8':
									item.statusText='已取消'
									break;
								case '9':
									item.statusText='已删除'
									break;
							}
							item.payStatusText='未支付'
							if(item.payed_at > 0){
								item.payStatusText='已支付'
							}
							item.createTime = new Date(parseInt(item.created_at) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')
							item.orderAmount = item.order_amount/100
						})
						this.tableData = data.list
						this.accountsReceivable = data.accountsReceivable/100
						this.accountsReceipted = data.accountsReceipted/100
						this.dataCount = data.dataCount
          })
        })
			},
			bindUid(data){
        let _self=this
        if(data.type=='init'){
          this.apiPost('admin/users/bind', {
            client_id: data.client_id
          }).then((res) => {
            this.handelResponse(res, (data) => {
              if(data!='success'){
                _self.$message({
                  type: 'warnning',
                  message: 'socket网络故障！'
                });
              }
            })
          })
        }
			},
			websocketonmessage(e) {
				let data = JSON.parse(e.data)
				console.log(data)
        let _self=this
        if (this.callback != null && this.callback != "" && this.callback != undefined) {
          this.callback(data)
          this.callback = null
          return
				}
        if(['press','order','notice','cancel','make','check','get','eat'].indexOf(data.type) > -1){
					const data = {
						params: {
							page: this.currentPage,
							limit: this.limit,
							orderSn:this.orderSn,
							status:this.currentStatus,
							payStatus:this.currentPayStatus,
							mod:this.mod?1:0,
							startTime:this.startTime,
							endTime:this.endTime
						}
					}
					this.getOrders(data)
        }
      },
		},
		created() {
			this.getCurrentPage()
			const data = {
				params: {
					page: this.currentPage,
					limit: this.limit,
					orderSn:this.orderSn,
					status:this.currentStatus,
					payStatus:this.currentPayStatus,
					mod:this.mod?1:0,
					startTime:this.startTime,
					endTime:this.endTime
				}
			}
			this.getOrders(data)
			this.sendSock(
        {
          type: 'pong',
          data: "heartbeat"
        },
        this.bindUid
      )
    },
    computed: {
			
    },
    components: {
      
		},
    mixins: [http,socket]
}
</script>
<style>
.el-card .image{
	width: 6%;
  display: block;
}
.el-card .bottom {
	margin-top: 13px;
	line-height: 12px;
}
.clearfix:before,.clearfix:after {
		display: table;
		content: "";
}
.clearfix:after {
		clear: both
}
.el-input {
  width: 200px;
}
</style>

