import { wsUrl, Api } from '../../api.js'
import { fetch } from "./http"
var socketOpen=false
var callback=null
function establish () {
    ui.connectSocket({
        url: wsUrl,
        success: function (res) {
            ui.showToast({
                title: 'WebSocket创建成功！'
            })
            socketOpen = true
            ui.onSocketOpen(function (res) {
                ui.showToast({
                    title: 'WebSocket连接已打开！'
                })
                sendSocketMessage({
                    type: 'pong',
                    data: "heartbeat"
                },
                bindUid)
                window.timer = setInterval(heartbeat, 130000)
            })
            ui.onSocketError(function (res) {
                ui.showToast({
                    title: 'WebSocket连接打开失败，请检查！'
                })
            })
            ui.onSocketMessage(function (res) {
                let data = JSON.parse(res.data)
                if (callback != null && callback != "" && callback != undefined) {
                    callback(data)
                    callback = null
                    return
                }
                if(data.type=='chiefoffline') {
                    ui.showToast({ title: data.data.message, icon: 'error' })
                }
                if(data.type=='orderexpire') {
                    ui.showToast({ title: data.data.message, icon: 'error' })
                }
                if(data.type=='make') {
                    ui.showConfirm({
                      content: '您点的菜'+data.data.orderGoods[0].name+' 等菜已经开始制作了，请耐心等待！',
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      success (result) {
                        if(result.confirm){
                            fetch(Api.message.path + '/' + data.message_id, {
                                method:'PUT',
                                data: { status:1 }
                            }).then((response) => {
                                if(response == 'success'){
                                    
                                }
                            }).catch((error) => {
                                console.log(error)
                            })
                        }
                      }
                    })
                }
                if(data.type=='notice') {
                    ui.showConfirm({
                      content: '您点的菜 '+data.data.good.name+' 已经做好了，请到餐台取餐！',
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      success (result) {
                        if(result.confirm){
                            fetch(Api.message.path + '/' + data.message_id, {
                                method:'PUT',
                                data: { status:1 }
                            }).then((response) => {
                                if(response == 'success'){
                                    
                                }
                            }).catch((error) => {
                                console.log(error)
                            })
                        }
                      }
                    })
                }
                if(data.type=='eat') {
                    ui.showConfirm({
                      content: '取餐结束',
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      success (result) {
                        if(result.confirm){
                            fetch(Api.message.path + '/' + data.message_id, {
                                method:'PUT',
                                data: { status:1 }
                            }).then((response) => {
                                if(response == 'success'){
                                    
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
            socketOpen = false
        }
    })
}
function sendSocketMessage (data, call) {
    callback = call
    if (socketOpen) {
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
}
function close () {
    ui.closeSocket({
        success: function (res) {
            socketOpen = false
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
}
function heartbeat() {
    sendSocketMessage(
        {
            type: 'pong',
            data: "heartbeat"
        },
        null
    )
}
function bindUid(data){
    if(data.type=='init'){
        fetch(Api.bind.path,  {
            method:'POST',
            data: {
                client_id: data.client_id 
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
}
export { establish, sendSocketMessage,  close }
  