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
  