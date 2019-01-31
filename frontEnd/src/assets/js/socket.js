let store = window.store
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
          _self.$toast.fail("WebSocket连接发生错误");
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
        this.$toast.fail("connection closed (" + e.code + ")");
      },
      websocketOpen() {
        this.$toast.success("websocket连接成功");
      },
      websocketonmessage(e) {
        let data = JSON.parse(e.data)
        // let _self=this
        if (this.callback != null && this.callback != "" && this.callback != undefined) {
          this.callback(data)
          this.callback = null
          return
        }
        //if(data.type=='backup' || data.type=='restore') { }
      },
      heartbeat() {
        this.sendSock(
          {
            type: 'pong',
            data: "heartbeat"
          },
          null
        )
      },
      bindUid(data){
        let _self=this
        if(data.type=='init'){
            //let role = store.state.member;
            this.apiPost('index/member/bind', {
                client_id: data.client_id,
            }).then((res) => {
                this.handelResponse(res, (data) => {
                if(data!='success'){
                    _self.$notify({
                        message: 'socket网络故障！'
                    });
                }
                })
            })
        }
      },
    },
    created() {
      let token = store.state.token;
      if(token) {
        clearInterval(window.timer)
        this.initWebSocket()
        window.timer = setInterval(this.heartbeat, 130000)
        this.sendSock({
          type: 'pong',
          data: "heartbeat"
        },
        this.bindUid)
      }
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
  