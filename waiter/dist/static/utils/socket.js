import { wsUrl, Api } from '../../api.js'
const webSocket = {
    data() {
      return {
        socketOpen:false,
        socketMsgQueue: [],
        socketMsgBuffer:{
            'order':[],
            'cancel':[],
            'press':[],
            'eat':[],
            'checked':[],
            'make':[],
            'notice':[]
        }
      }
    },
    methods: {
        establish () {
            var that = this
            ui.connectSocket({
                url: wsUrl,
                success: function (res) {
                    that.socketOpen = true
                    ui.onSocketOpen(function (res) {
                        that.sendSocketMessage({
                            type: 'pong',
                            data: 'heartbeat'
                        })
                        window.timer = setInterval(that.heartbeat, 130000)
                    })
                    ui.onSocketError(function (res) {
                        ui.showToast({
                            title: 'WebSocket连接打开失败，请检查！'
                        })
                    })
                    ui.onSocketMessage(function (res) {
                        let data = JSON.parse(res.data)
                        if(data.type=='init'){
                            that.fetch(Api.bind,  {
                                method:'POST',
                                data: {
                                    client_id: data.client_id 
                                },
                                header: {
                                      'content-type': 'application/x-www-form-urlencoded'
                                }
                            }).then(function(res){
                                if(res=='success'){
                                    ui.showToast({
                                        title: '用户通信调试成功！'
                                    })
                                }
                            }).catch(function(error){
                                console.log(error)
                            })
                        }else{
                            if(data.type=='ping'){
                                return
                            }
                            if(data.type=='order'){
                                that.socketMsgBuffer.order.push(data)
                            }
                            if(data.type=='make'){
                                that.socketMsgBuffer.make.push(data)
                            }
                            if(data.type=='press'){
                                that.socketMsgBuffer.press.push(data)
                            }
                            if(data.type=='cancel'){
                                that.socketMsgBuffer.cancel.push(data)
                            }
                            if(data.type=='eat'){
                                that.socketMsgBuffer.eat.push(data)
                            }
                            if(data.type=='notice'){
                                that.socketMsgBuffer.notice.push(data)
                            }
                            if(data.type=='checked'){
                                that.socketMsgBuffer.checked.push(data)
                            }
                        }
                    })
                },
                fail: function (res) {
                    ui.showToast({
                        title: 'WebSocket创建失败！'
                    })
                    that.socketOpen = false
                }
            })
        },
        sendSocketMessage (data) {
            if (this.socketOpen) {
                ui.sendSocketMessage({
                    data: JSON.stringify(data),
                    success: function (res) {
                      console.log(res)
                    },
                    fail: function (res) {
                      ui.showToast({
                        title: '发送失败！'
                      })
                    }
                })
            } else {
                this.socketMsgQueue.push(msg)
            }
        },
        close () {
            var that = this
            ui.closeSocket({
                success: function (res) {
                    that.socketOpen = false
                    ui.onSocketClose(function (res) {
                        ui.showToast({
                            title: 'WebSocket 已关闭！'
                        })
                    })
                },
                fail: function () {
                    ui.showToast({
                        title: 'WebSocket 关闭失败'
                    })
                }
            })
        },
        heartbeat() {
            this.sendSocketMessage(
                {
                    type: 'pong',
                    data: "heartbeat"
                }
            )
        }
    },
    created() {
        let sessionId = ui.getStorageSync('sessionId')
        if(sessionId){
            clearInterval(window.timer)
            this.establish()
        }
    },
    destroyed: function() {
        clearInterval(window.timer)
        this.close()
    },
    watch: {
        socketMsgBuffer: {
            handler(newValue, oldValue){
                let that=this; 
                newValue.make.map((data,index)=>{
                    ui.showConfirm({
                        content: '您帮助'+data.data.desk.name+' 点的'+data.data.orderGoods[0].name+' 等菜已经开始烹制了，请耐心等待！',
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        success (result) {
                            if(result.confirm){
                                that.fetch(Api.message + '/' + data.message_id, {
                                    method:'PUT',
                                    data: { status:1 },
                                    header: {
                                        'content-type': 'application/x-www-form-urlencoded'
                                    }
                                }).then((response) => {
                                    if(response == 'success'){
                                        newValue.make.splice(index,1)
                                        if(that.$route.path=='/pages/index' || that.$route.path=='/pages/order/list'){
                                            that.getOrdersData(that.currentStatus)
                                        }
                                    }
                                }).catch((error) => {
                                    console.log(error)
                                })
                            }
                        }
                    })
                })
                newValue.notice.map((data,index)=>{
                    ui.showConfirm({
                        content: '您给'+data.data.desk.name+' 点的菜 '+data.data.good.name+' 已经做好了，请到餐台取餐！',
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        success (result) {
                            if(result.confirm){
                                that.fetch(Api.message + '/' + data.message_id, {
                                    method:'PUT',
                                    data: { status:1 },
                                    header: {
                                        'content-type': 'application/x-www-form-urlencoded'
                                    }
                                }).then((response) => {
                                    if(response == 'success'){
                                        newValue.notice.splice(index,1)
                                        if(that.$route.path=='/pages/index' || that.$route.path=='/pages/order/list'){
                                            that.getOrdersData(that.currentStatus)
                                        }
                                    }
                                }).catch((error) => {
                                    console.log(error)
                                })
                            }
                        }
                    })
                })
                newValue.eat.map((data,index)=>{
                    ui.showConfirm({
                        content: data.data.desk.name +'取餐结束！请注意结账！',
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        success (result) {
                            if(result.confirm){
                                that.fetch(Api.message + '/' + data.message_id, {
                                    method:'PUT',
                                    data: { status:1 },
                                    header: {
                                        'content-type': 'application/x-www-form-urlencoded'
                                    }
                                }).then((response) => {
                                    if(response == 'success'){
                                        newValue.eat.splice(index,1)
                                        if(that.$route.path=='/pages/index' || that.$route.path=='/pages/order/list'){
                                            that.getOrdersData(that.currentStatus)
                                        }
                                    }
                                }).catch((error) => {
                                    console.log(error)
                                })
                            }
                        }
                    })
                })
                newValue.checked.map((data,index)=>{
                    newValue.checked.splice(index,1)
                    if(that.$route.path=='/pages/index' || that.$route.path=='/pages/order/list'){
                        that.getOrdersData(that.currentStatus)
                    }
                })
                newValue.order.map((data,index)=>{
                    newValue.order.splice(index,1)
                    if(that.$route.path=='/pages/index' || that.$route.path=='/pages/order/list'){
                        that.getOrdersData(that.currentStatus)
                    }
                })
                newValue.cancel.map((data,index)=>{
                    newValue.cancel.splice(index,1)
                    if(that.$route.path=='/pages/index' || that.$route.path=='/pages/order/list'){
                        that.getOrdersData(that.currentStatus)
                    }
                })
            },
            deep: true
        }
    }
  }
  export default webSocket
  