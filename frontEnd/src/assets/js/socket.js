const webSocket = {
  data() {
    return {
      websocket: null,
      callback: null
    }
  },
  methods: {
    initWebSocket() {
      let _self = this
      let wsuri = window.wsUrl
      let websock = new WebSocket(wsuri)
      this.websocket = websock
      this.websocket.onmessage = function(e) {
        _self.websocketonmessage(e)
      }
      this.websocket.onclose = function(e) {
        _self.websocketclose(e)
      }
      this.websocket.onopen = function () {
        _self.websocketOpen()
      }
      this.websocket.onerror = function () {
        console.log("WebSocket连接发生错误")
      }
    },
    sendSock(agentData, callback) {
      this.callback = callback
      let _self = this
      if (this.websocket.readyState === this.websocket.OPEN) {
        _self.websocketsend(agentData)
      } else if (this.websocket.readyState === this.websocket.CONNECTING) {
        setTimeout(function () {
          _self.sendSock(agentData, callback)
        }, 1000)
      } else {
        setTimeout(function () {
          _self.sendSock(agentData, callback)
        }, 1000)
      }
    },
    websocketsend(agentData) {
      this.websocket.send(JSON.stringify(agentData))
    },
    websocketclose(e) {
      console.log("connection closed (" + e.code + ")")
    },
    websocketOpen(e) {
      console.log("连接成功")
    },
    heartbeat() {
      this.sendSock(
        {
          type: 'pong',
          data: "heartbeat"
        },
        null
      )
    }
  },
  created() {
    clearInterval(window.timer)
    this.initWebSocket()
    window.timer = setInterval(this.heartbeat, 130000)
  },
  destroyed: function() {
    clearInterval(window.timer)
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    clearInterval(window.timer)
    next()
  }
}
export default webSocket
