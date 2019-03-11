import { wsUrl, Api } from '../../api.js'
const webSocket = {
    data() {
      return {
        socketOpen:false,
        socketMsgQueue: [],
        socketMsgBuffer:{
            'order':[],
            'cancel':[]
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
                newValue.order.map((data,index)=>{
                    ui.showConfirm({
                        content: data.data.desk.name + '手机尾号' + data.data.member.mobile.substr(7,4) + '用户下单了，请尽快准备食材！',
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
                                        newValue.order.splice(index,1)
                                    }
                                }).catch((error) => {
                                    console.log(error)
                                })
                            }
                        }
                    })
                })
            },
            deep: true
        }
    }
  }
  export default webSocket
  