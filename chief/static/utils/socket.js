import { wsUrl, Api } from '../../api.js'
const webSocket = {
    data() {
      return {
        socketOpen:false,
        callback: null
      }
    },
    methods: {
        establish () {
            var that = this
            ui.connectSocket({
                url: wsUrl,
                success: function (res) {
                    ui.showToast({
                        title: 'WebSocket创建成功！'
                    })
                    that.socketOpen = true
            
                    ui.onSocketOpen(function (res) {
                        ui.showToast({
                            title: 'WebSocket连接已打开！'
                        })
                        that.sendSocketMessage({
                            type: 'pong',
                            data: "heartbeat"
                        },
                        that.bindUid)
                        window.timer = setInterval(that.heartbeat, 130000)
                    })
                    ui.onSocketError(function (res) {
                        ui.showToast({
                            title: 'WebSocket连接打开失败，请检查！'
                        })
                    })
                    ui.onSocketMessage(function (res) {
                        let data = JSON.parse(res.data)
                        if (that.callback != null && that.callback != "" && that.callback != undefined) {
                            that.callback(data)
                            that.callback = null
                            return
                        }
                        if(data.type=='order') { 
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
                                                ui.showToast({
                                                    title: '消息状态已接收！'
                                                })
                                            }
                                        }).catch((error) => {
                                            console.log(error)
                                        })
                                    }
                                }
                            })
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
        sendSocketMessage (data, callback) {
            this.callback = callback
            var that = this
            if (that.socketOpen) {
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
                },
                null
            )
        },
        bindUid(data){
            let that=this
            if(data.type=='init'){
                this.fetch(Api.bind,  {
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
                            title: '通信调试成功！'
                        })
                    }
                }).catch(function(error){
                    console.log(error)
                })
            }
        },
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
    }
  }
  export default webSocket
  