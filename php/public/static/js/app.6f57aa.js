webpackJsonp([6],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return wsUrl; });
var Api = {
    login: {
        path: 'index/open/login',
        auth: false
    },
    table: {
        path: 'index/open/table',
        auth: false
    },
    position: {
        path: 'index/position/index',
        auth: false
    },
    menusIndex: {
        path: 'index/menus/index',
        auth: false
    },
    menusRead: {
        path: 'index/menus/',
        auth: false
    },
    categoryIndex: {
        path: 'index/category/index',
        auth: false
    },
    categorRead: {
        path: 'index/category/read',
        auth: false
    },
    bind: {
        path: 'index/member/bind', //'admin/users/bind'
        auth: true
    },
    memberRead: {
        path: 'index/member/read',
        auth: true
    },
    car: {
        path: 'index/car',
        auth: true
    },
    carUpdates: {
        path: 'index/car/updates',
        auth: true
    },
    order: {
        path: 'index/order',
        auth: true
    },
    message: {
        path: 'index/message',
        auth: true
    }
    //const baseUrl='http://www.vuethink.com/'
};var baseUrl = 'http://192.168.1.100/';
var wsUrl = 'ws://192.168.1.100:7272';


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(202)
  __webpack_require__(203)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(204),
  /* template */
  __webpack_require__(244),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */,
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../babel-loader/lib!../vue-loader/lib/selector.js?type=script&index=0!../touchui/dist/core/elements/pull/material-pull-hook.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CLASS_MAP = {
  'pull-down': 'pull-down-content',
  'pull-up': 'pull-up-content'

  /**
   * material-pull-hook组件只负责处理svg动画，该元素的transform则由Pull类处理
   */
};/* harmony default export */ var material_pull_hook = ({
  props: {
    state: {
      type: Number
    },
    translate: {
      type: Number
    },
    type: String
  },
  computed: {
    classes: function classes() {
      return CLASS_MAP[this.type];
    }
  },
  data: function data() {
    return {
      turn: null,
      svg: null,
      background: null,
      primary: null,
      secondary: null,
      selfTranslate: 0
    };
  },
  mounted: function mounted() {
    this.turn = this.$el.querySelector('.material-progress-circular');
    this.svg = this.$el.querySelector('.progress-circular');
    this.background = this.$el.querySelector('.progress-circular__background');
    this.primary = this.$el.querySelector('.progress-circular__primary');
    this.secondary = this.$el.querySelector('.progress-circular__secondary');
  },

  watch: {
    state: function state() {
      this.handleProgress();
    },
    translate: function translate(val) {
      this.handleProgress();
    }
  },
  methods: {
    handleProgress: function handleProgress() {
      if (this.state === 1 || this.state === 2) {
        this.$el.style.webkitTransition = 'none';
        var rate = Math.abs(this.translate) / 84;
        var dash = Math.floor(rate * 252);
        this.turn.style.transform = 'rotate(' + rate + 'turn)';

        if (dash >= 252) {
          dash = 252;
        }

        this.primary.style.strokeDasharray = dash + '%, 251.32%';
        this.primary.style.webkitTransition = 'none';
      } else if (this.state === 3 || this.state === 4) {
        this.turn.style.tranform = 'rotate(1turn)';
      } else {
        this.primary.style.strokeDasharray = '0%, 251.32%';
      }
    }
  }
});
// CONCATENATED MODULE: ../babel-loader/lib!../touchui-pre-loader/src/script-loader.js!../vue-loader/lib/selector.js?type=script&index=0!../touchui/dist/core/elements/pull/material-pull-hook.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var material_pull_hook_CLASS_MAP = {
  'pull-down': 'pull-down-content',
  'pull-up': 'pull-up-content'

  /**
   * material-pull-hook组件只负责处理svg动画，该元素的transform则由Pull类处理
   */
};/* harmony default export */ var pull_material_pull_hook = ({
  props: {
    state: {
      type: Number
    },
    translate: {
      type: Number
    },
    type: String
  },
  computed: {
    classes: function classes() {
      return material_pull_hook_CLASS_MAP[this.type];
    }
  },
  data: function data() {
    return {
      turn: null,
      svg: null,
      background: null,
      primary: null,
      secondary: null,
      selfTranslate: 0
    };
  },
  mounted: function mounted() {
    this.turn = this.$el.querySelector('.material-progress-circular');
    this.svg = this.$el.querySelector('.progress-circular');
    this.background = this.$el.querySelector('.progress-circular__background');
    this.primary = this.$el.querySelector('.progress-circular__primary');
    this.secondary = this.$el.querySelector('.progress-circular__secondary');
  },

  watch: {
    state: function state() {
      this.handleProgress();
    },
    translate: function translate(val) {
      this.handleProgress();
    }
  },
  methods: {
    handleProgress: function handleProgress() {
      if (this.state === 1 || this.state === 2) {
        this.$el.style.webkitTransition = 'none';
        var rate = Math.abs(this.translate) / 84;
        var dash = Math.floor(rate * 252);
        this.turn.style.transform = 'rotate(' + rate + 'turn)';

        if (dash >= 252) {
          dash = 252;
        }

        this.primary.style.strokeDasharray = dash + '%, 251.32%';
        this.primary.style.webkitTransition = 'none';
      } else if (this.state === 3 || this.state === 4) {
        this.turn.style.tranform = 'rotate(1turn)';
      } else {
        this.primary.style.strokeDasharray = '0%, 251.32%';
      }
    }
  }
});
// CONCATENATED MODULE: ../vue-loader/lib/template-compiler?{"id":"data-v-762e9f62","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../touchui-pre-loader/src/before-template-compiler-loader.js!../touchui-pre-loader/src/template-loader.js!../vue-loader/lib/selector.js?type=template&index=0!../touchui/dist/core/elements/pull/material-pull-hook.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"material-pull-hook",class:_vm.classes},[_c('div',{staticClass:"pull-hook-progress"},[_c('div',{staticClass:"material-progress-circular"},[_c('svg',{staticClass:"progress-circular",class:{ 'progress-circular--indeterminate': _vm.state >= 3}},[_c('circle',{staticClass:"progress-circular__background",class:{ 'progress-circular--indeterminate__background': _vm.state >= 3}}),_vm._v(" "),_c('circle',{staticClass:"progress-circular__secondary",class:{ 'progress-circular--indeterminate__secondary': _vm.state >= 3},staticStyle:{"display":"none"}}),_vm._v(" "),_c('circle',{staticClass:"progress-circular__primary",class:{ 'progress-circular--indeterminate__primary': _vm.state >= 3}})])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var elements_pull_material_pull_hook = (esExports);
// CONCATENATED MODULE: ../touchui/dist/core/elements/pull/material-pull-hook.vue
var normalizeComponent = __webpack_require__(111)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  pull_material_pull_hook,
  elements_pull_material_pull_hook,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var core_elements_pull_material_pull_hook = (Component.exports);

// CONCATENATED MODULE: ../babel-loader/lib!../vue-loader/lib/selector.js?type=script&index=0!../touchui/dist/core/elements/pull/pull-hook.vue
//
//
//
//
//
//
//
//
//
//
//
//


var PullText = {
  'pull-down': {
    1: 'ui.pulldownrefresh.pull',
    2: 'ui.pulldownrefresh.release',
    3: 'ui.pulldownrefresh.refreshing',
    4: 'ui.pulldownrefresh.success',
    5: 'ui.pulldownrefresh.cancel'
  },
  'pull-up': {
    0: 'ui.pullupload.pull_load_more',
    1: 'ui.pullupload.pull',
    2: 'ui.pullupload.release',
    3: 'ui.pullupload.refreshing',
    4: 'ui.pullupload.success',
    5: 'ui.pullupload.cancel'
  }
};

var PullIcon = {
  'pull-down': {
    1: 'arrow down',
    2: 'arrow up',
    3: 'loading',
    4: 'none'
  },
  'pull-up': {
    1: 'arrow up',
    2: 'arrow down',
    3: 'loading',
    4: 'none'
  }
};



/* harmony default export */ var pull_hook = ({
  props: {
    type: {
      type: String,
      default: 'pull-down'
    },
    state: {
      type: Number,
      default: 0
    },
    translate: {
      type: Number,
      default: 0
    },
    pullStyle: {
      type: String,
      default: 'ios'
    }
  },
  components: {
    MaterialPullHook: core_elements_pull_material_pull_hook
  },
  computed: {
    text: function text() {
      return this.$t(PullText[this.type][this.state]);
    },
    contentClasses: function contentClasses() {
      return [this.type + '-content'];
    },
    iconClasses: function iconClasses() {
      return [this.type + '-icon', PullIcon[this.type][this.state]];
    }
  }
});
// CONCATENATED MODULE: ../babel-loader/lib!../touchui-pre-loader/src/script-loader.js!../vue-loader/lib/selector.js?type=script&index=0!../touchui/dist/core/elements/pull/pull-hook.vue
//
//
//
//
//
//
//
//
//
//
//
//


var pull_hook_PullText = {
  'pull-down': {
    1: 'ui.pulldownrefresh.pull',
    2: 'ui.pulldownrefresh.release',
    3: 'ui.pulldownrefresh.refreshing',
    4: 'ui.pulldownrefresh.success',
    5: 'ui.pulldownrefresh.cancel'
  },
  'pull-up': {
    0: 'ui.pullupload.pull_load_more',
    1: 'ui.pullupload.pull',
    2: 'ui.pullupload.release',
    3: 'ui.pullupload.refreshing',
    4: 'ui.pullupload.success',
    5: 'ui.pullupload.cancel'
  }
};

var pull_hook_PullIcon = {
  'pull-down': {
    1: 'arrow down',
    2: 'arrow up',
    3: 'loading',
    4: 'none'
  },
  'pull-up': {
    1: 'arrow up',
    2: 'arrow down',
    3: 'loading',
    4: 'none'
  }
};



/* harmony default export */ var pull_pull_hook = ({
  props: {
    type: {
      type: String,
      default: 'pull-down'
    },
    state: {
      type: Number,
      default: 0
    },
    translate: {
      type: Number,
      default: 0
    },
    pullStyle: {
      type: String,
      default: 'ios'
    }
  },
  components: {
    MaterialPullHook: core_elements_pull_material_pull_hook
  },
  computed: {
    text: function text() {
      return this.$t(pull_hook_PullText[this.type][this.state]);
    },
    contentClasses: function contentClasses() {
      return [this.type + '-content'];
    },
    iconClasses: function iconClasses() {
      return [this.type + '-icon', pull_hook_PullIcon[this.type][this.state]];
    }
  }
});
// CONCATENATED MODULE: ../vue-loader/lib/template-compiler?{"id":"data-v-732b728c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../touchui-pre-loader/src/before-template-compiler-loader.js!../touchui-pre-loader/src/template-loader.js!../vue-loader/lib/selector.js?type=template&index=0!../touchui/dist/core/elements/pull/pull-hook.vue
var pull_hook_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.pullStyle === 'ios')?_c('div',{class:_vm.contentClasses},[_c('div',{class:_vm.iconClasses}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.text))])]):_c('material-pull-hook',{attrs:{"state":_vm.state,"translate":_vm.translate,"type":_vm.type}})}
var pull_hook_staticRenderFns = []
var pull_hook_esExports = { render: pull_hook_render, staticRenderFns: pull_hook_staticRenderFns }
/* harmony default export */ var elements_pull_pull_hook = (pull_hook_esExports);
// CONCATENATED MODULE: ../touchui/dist/core/elements/pull/pull-hook.vue
var pull_hook_normalizeComponent = __webpack_require__(111)
/* script */


/* template */

/* template functional */
var pull_hook___vue_template_functional__ = false
/* styles */
var pull_hook___vue_styles__ = null
/* scopeId */
var pull_hook___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var pull_hook___vue_module_identifier__ = null
var pull_hook_Component = pull_hook_normalizeComponent(
  pull_pull_hook,
  elements_pull_pull_hook,
  pull_hook___vue_template_functional__,
  pull_hook___vue_styles__,
  pull_hook___vue_scopeId__,
  pull_hook___vue_module_identifier__
)

/* harmony default export */ var core_elements_pull_pull_hook = __webpack_exports__["a"] = (pull_hook_Component.exports);


/***/ }),
/* 124 */,
/* 125 */,
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../touchui/dist/ui/index.js + 53 modules
var dist_ui = __webpack_require__(127);

// EXTERNAL MODULE: ./src/app.ui
var app = __webpack_require__(190);
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: ./src/static/utils/util.js
var util = __webpack_require__(199);
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./src/api.js
var api = __webpack_require__(17);

// CONCATENATED MODULE: ./src/static/utils/socket.js


var socketOpen=false
var callback=null
function establish () {
    ui.connectSocket({
        url: api["c" /* wsUrl */],
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
                            fetch(api["a" /* Api */].message.path + '/' + data.message_id, {
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
                            fetch(api["a" /* Api */].message.path + '/' + data.message_id, {
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
                            fetch(api["a" /* Api */].message.path + '/' + data.message_id, {
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
function socket_close () {
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
        fetch(api["a" /* Api */].bind.path,  {
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

  
// EXTERNAL MODULE: ./src/static/utils/jquery.js
var jquery = __webpack_require__(200);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./src/static/utils/jquery.sha1.js
var jquery_sha1 = __webpack_require__(201);
var jquery_sha1_default = /*#__PURE__*/__webpack_require__.n(jquery_sha1);

// CONCATENATED MODULE: ./src/static/utils/http.js





//接口请求封装
function fetch(path, options) {
    return new Promise((resolve, reject) => {
        let method=options.method.toUpperCase() || 'GET'
        let auth=null
        let arr =  Object.keys(api["a" /* Api */])
        for(let i=0; i< arr.length; i++){
            if(api["a" /* Api */][arr[i]].path==path){
                auth = api["a" /* Api */][arr[i]].auth
                break;
            }
            if(method == 'PUT' && path.indexOf(api["a" /* Api */][arr[i]].path)>-1){
                auth = api["a" /* Api */][arr[i]].auth
                break;
            }
        }
        let data = options.data || {}
        let newObj={}
        //需要认证的接口
        if(auth===true){
            let token = ui.getStorageSync('token');
            if(!token){
                ui.showConfirm({
                    content: '系统检测到您尚未登录，请先登录',
                    confirmButtonText: '去登录',
                    cancelButtonText: '取消',
                    success (result) {
                        if(result.confirm){
                            ui.showPrompt({
                                title: '登录',
                                placeholder: '请输入您的电话',
                                confirmButtonText: '登录',
                                cancelButtonText: '取消',
                                success: (result) => {
                                    login(result.value).then((response) => {
                                        if(response.code=='200'){
                                            ui.showToast({
                                                title: '登录成功！'
                                            })
                                            ui.setStorageSync('token',response.data);
                                        }else{
                                            ui.showToast({
                                                title: '登录失败！'
                                            })
                                        }
                                    }).catch((error)=>{
                                        console.log(error)
                                    })
                                }
                            })
                        }
                    }
                })
                return;
            }
            let newData = Object.assign(data, {
                    token: token,
                    _timestamp: Date.parse(new Date()) / 1000,
                    path: path
                });
            let parseData = Object.keys(newData).sort();
            for (let i = 0; i < parseData.length; i++) {
                newObj[parseData[i]] = newData[parseData[i]];
            }
            let queryData = Object(util["urlEncode"])(newObj).slice(1)
            let signature = $.sha1(queryData);
            newObj.signature = signature
        }else{
            newObj =  Object.assign(data, {
                path: path
            });
        }
        let header = {}
        if(method=='POST' || method=='PUT'){
            header = Object.assign({
                'content-type': 'application/x-www-form-urlencoded'
            }, options.header)
        }
        ui.request({
            url: api["b" /* baseUrl */] + path,
            method: method,
            data: newObj,
            header: header,
            success: function(res){
                if(res.data.code=='200') {
                    resolve(res.data.data)
                } else if(res.data.code=='500'){
                    ui.showToast({ title: res.data.error, icon: 'loading', duration: 3000 })
                }else{
                    if(path!=api["a" /* Api */].table.path){
                        ui.showConfirm({
                            content: '登录已过期，请重新登录',
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            success (result) {
                                if(result.confirm){
                                    ui.showPrompt({
                                        title: '登录',
                                        placeholder: '请输入您的电话',
                                        confirmButtonText: '登录',
                                        cancelButtonText: '取消',
                                        success: (result) => {
                                            login(result.value).then((response) => {
                                                if(response.code=='200'){
                                                    ui.showToast({
                                                        title: '登录成功！'
                                                    })
                                                }else{
                                                    ui.showToast({
                                                        title: '登录失败！'
                                                    })
                                                }
                                            }).catch((error)=>{
                                                console.log(error)
                                            })
                                        }
                                    })
                                }
                            }
                        }) 
                    }
                    resolve(res.data.error)
                }
            },
            fail: reject
        })
    })
}
//登录接口
function login(mobile){
    return new Promise((resolve,reject) => {
        ui.request({
            url: api["b" /* baseUrl */] + api["a" /* Api */].login.path,
            method: 'POST',
            data: {
                mobile: mobile
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function(res){
                if(res.data.code=='200'){
                    ui.setStorageSync('token',res.data.data);
                    establish()
                    resolve(res.data)
                }
                if(res.data.code=='400'){
                    reject(res.data)
                }
            },
            fail: reject
        })
    })
}

// CONCATENATED MODULE: ./src/main.js





var main_options = {
  app: app_default.a,
  beforeEach: function beforeEach(to, from, next) {
    var tid = to.query.tid || dist_ui["a" /* default */].getStorageSync('tid');
    var tableHash = to.query.tableHash || dist_ui["a" /* default */].getStorageSync('tableHash');
    if (!tid || !tableHash) {
      dist_ui["a" /* default */].showAlert({
        title: '访问提示',
        content: '访问来源非法！请扫描餐桌二维码访问',
        success: function success() {}
      });
      return;
    }
    dist_ui["a" /* default */].setStorageSync('tableHash', tableHash);
    dist_ui["a" /* default */].setStorageSync('tid', tid);
    var accessTime = dist_ui["a" /* default */].getStorageSync('accessTime') || null;
    var nowTime = Date.parse(new Date()) / 1000;
    if (!accessTime) {
      accessTime = nowTime;
      dist_ui["a" /* default */].setStorageSync('accessTime', nowTime);
    }
    //设置系统访问3小时过时 主要目的是让用户重新扫码访问 防止用户用历史记录访问系统 造成桌号对应不上
    if (nowTime - accessTime > 3 * 3600) {
      dist_ui["a" /* default */].showAlert({
        title: '访问提示',
        content: '访问已过时，请重新扫描餐桌二维码！',
        success: function success() {
          dist_ui["a" /* default */].removeStorageSync('accessTime');
        }
      });
      return;
    }
    fetch(api["a" /* Api */].table.path, {
      method: 'POST',
      data: {
        tid: tid,
        hash: tableHash
      }
    }).then(function (response) {
      if (response == 'success') {
        next();
      } else {
        dist_ui["a" /* default */].showAlert({
          title: '访问提示',
          content: response + '!请重新扫描餐桌二维码访问',
          success: function success() {}
        });
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
};
var main_token = dist_ui["a" /* default */].getStorageSync('token');
if (main_token) {
  clearInterval(window.timer);
  establish();
}
dist_ui["a" /* default */].extend({ fetch: fetch, sendSocketMessage: sendSocketMessage });

var config = {};
config.routes = [{
  path: '/pages/index',
  meta: { pageConfig: {
      navigationBarTitleText: '首页',
      backgroundColor: '#F4F4F4',
      navigationBarTextStyle: 'black'
    }, pageClass: 'page-cbbdac', isTabBar: true },
  component: __webpack_require__(47)
}, {
  path: '/pages/menu/category',
  meta: { pageConfig: {
      navigationBarTitleText: "菜单列表"
    }, pageClass: 'page-c1e598', isTabBar: true },
  component: __webpack_require__(47)
}, {
  path: '/pages/car/list',
  meta: { pageConfig: {
      navigationBarTitleText: "我的菜谱",
      navigationStyle: 'custom',
      scrollType: 'body'
    }, pageClass: 'page-fd9966', isTabBar: true },
  component: __webpack_require__(47)
}, {
  path: '/pages/member/user',
  meta: { pageConfig: {
      navigationStyle: 'custom',
      navigationBarTextStyle: 'white',
      backgroundColor: '#F4F4F4'
    }, pageClass: 'page-f68b6e', isTabBar: true },
  component: __webpack_require__(47)
}, {
  path: '*',
  component: function component(resolve) {
    __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(335)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    pageConfig: {
      "navigationBarTitleText": "404",
      "delay": false,
      "disableScroll": true
    }
  }
}, {
  path: '/touch-ui-start-page',
  component: __webpack_require__(245).default
}, {
  path: '/',
  redirect: '/pages/index'
}, {
  path: '/pages/menu/list',
  meta: { pageConfig: {
      navigationBarTitleText: "菜单列表"
    }, pageClass: 'page-78265f', isTabBar: false },
  component: function component() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 336));
  }
}, {
  path: '/pages/menu/detail',
  meta: { pageConfig: {
      navigationBarTitleText: "菜单详情"
    }, pageClass: 'page-5f3d2a', isTabBar: false },
  component: function component() {
    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 337));
  }
}, {
  path: '/pages/order/list',
  meta: { pageConfig: {
      navigationBarTitleText: "订单列表"
    }, pageClass: 'page-d44326', isTabBar: false },
  component: function component() {
    return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 338));
  }
}];
config.debug = undefined;
config.window = { "scrollType": "div", "navigationBarBackgroundColor": "#ffffff", "navigationBarTextStyle": "black", "navigationBarBorderColor": "rgba(231, 231, 231, 0.6)" };
config.theme = { "theme-color": "#3399ff" };
config.template = undefined;
config.tabBar = {
  groupId: 'adfe189',
  paths: ['/pages/index', '/pages/menu/category', '/pages/car/list', '/pages/member/user'],
  position: 'undefined',
  color: '#7a7e83',
  selectedColor: '#39f',
  borderColor: 'rgba(231, 231, 231, 0.6)',
  backgroundColor: '#fff',
  list: [{
    text: '首页',
    pagePath: '/pages/index',
    pageConfig: {
      navigationBarTitleText: '首页',
      backgroundColor: '#F4F4F4',
      navigationBarTextStyle: 'black'
    },
    iconName: 'home'

  }, {
    text: '码上点餐',
    pagePath: '/pages/menu/category',
    pageConfig: {
      navigationBarTitleText: "菜单列表"
    },
    iconName: 'airudiantubiaohuizhi-zhuanqu_meishicaipu'

  }, {
    text: '我的菜谱',
    pagePath: '/pages/car/list',
    pageConfig: {
      navigationBarTitleText: "我的菜谱",
      navigationStyle: 'custom',
      scrollType: 'body'
    },
    iconName: 'navicon-xtcp'

  }, {
    text: '个人中心',
    pagePath: '/pages/member/user',
    pageConfig: {
      navigationStyle: 'custom',
      navigationBarTextStyle: 'white',
      backgroundColor: '#F4F4F4'
    },
    iconName: 'gerenzhongxin'

  }]

};
config.pageTabBars = [];

dist_ui["a" /* default */].start(main_options, config);

/***/ }),
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */
/***/ (function(module, exports) {

module.exports = {"zh-cn":{"ui.alert.button_text":"确定","ui.confirm.confirm_text":"确定","ui.confirm.cancel_text":"取消","ui.prompt.confirm_text":"确定","ui.prompt.cancel_text":"取消","ui.picker.confirm_text":"确定","ui.picker.cancel_text":"取消","ui.actionsheet.cancel_text":"取消","ui.loading.text":"加载中...","ui.cascader.loading_text":"加载中","ui.cascader.please_select":"请选择","ui.keyboard.space_text":"空格","ui.keyboard.complete_text":"完成","ui.countdown.done_text":"已结束","ui.requeststatus.loading":"加载中...","ui.requeststatus.nomore":"没有更多了...","ui.requeststatus.offline":"网络异常，点击刷新","ui.requeststatus.timeout":"请求超时，点击刷新","ui.requeststatus.error":"请求失败，点击刷新","ui.requeststatus.empty":"没有数据，点击刷新","ui.pulldownrefresh.pull":"下拉刷新","ui.pulldownrefresh.release":"释放刷新","ui.pulldownrefresh.refreshing":"正在刷新...","ui.pulldownrefresh.success":"刷新成功","ui.pulldownrefresh.cancel":"取消下拉","ui.pullupload.pull_load_more":"上拉加载更多","ui.pullupload.pull":"上拉加载","ui.pullupload.release":"释放加载","ui.pullupload.refreshing":"正在加载...","ui.pullupload.success":"加载成功","ui.pullupload.cancel":"取消加载","ui.smscode.getcode":"获取短信验证码","ui.smscode.run":"{%s}秒后重新获取","ui.smscode.reset":"重新获取验证码","ui.smscode.placeholder":"请输入验证码","ui.table.request_failed":"请求失败","ui.table.refresh":"刷新","ui.table.timeout":"网络超时","ui.table.offline":"网络无法连接，请检查您的网络","ui.table.empty":"结果为空","ui.table.need_login":"请先登录","ui.table.loading":"正在加载...","ui.cascader.select":"请选择","ui.calendar.head":"日 一 二 三 四 五 六","ui.calendar.yearsplit":"年","ui.calendar.monthsplit":"月","ui.countdown.over":"已结束"},"en":{"ui.alert.button_text":"OK","ui.confirm.confirm_text":"Confirm","ui.confirm.cancel_text":"Cancel","ui.prompt.confirm_text":"Confirm","ui.prompt.cancel_text":"Cancel","ui.picker.confirm_text":"Confirm","ui.picker.cancel_text":"Cancel","ui.actionsheet.cancel_text":"Cancel","ui.loading.text":"Loading...","ui.cascader.loading_text":"Loading","ui.cascader.please_select":"Please select","ui.keyboard.space_text":"Space","ui.keyboard.complete_text":"Complete","ui.countdown.done_text":"Done","ui.requeststatus.loading":"Loading...","ui.requeststatus.nomore":"No more data...","ui.requeststatus.offline":"Network error, tap to refresh","ui.requeststatus.timeout":"Network error, tap to refresh","ui.requeststatus.error":"Request failed, tap to refresh","ui.requeststatus.empty":"No data, tap to refresh","ui.pulldownrefresh.pull":"Pull refresh","ui.pulldownrefresh.release":"Release to refresh","ui.pulldownrefresh.refreshing":"Refreshing...","ui.pulldownrefresh.success":"Refresh success","ui.pulldownrefresh.cancel":"Cancel pull","ui.pullupload.pull_load_more":"Pull to load more","ui.pullupload.pull":"Pull load","ui.pullupload.release":"Release to load","ui.pullupload.refreshing":"Loading...","ui.pullupload.success":"Load success","ui.pullupload.cancel":"Cancel load","ui.smscode.getcode":"Get code","ui.smscode.run":"{%s} seconds","ui.smscode.reset":"Reset","ui.smscode.placeholder":"Please input code","ui.table.request_failed":"Request failed","ui.table.refresh":"Refresh","ui.table.timeout":"Timeout","ui.table.offline":"Can't connect to network","ui.table.empty":"No results","ui.table.need_login":"Please login first","ui.table.loading":"Loading...","ui.cascader.select":"Please Select","ui.calendar.head":"Sun Mon Tue Wen Thu Fri Sat","ui.calendar.yearsplit":"/","ui.calendar.monthsplit":"","ui.countdown.over":"Time's up"}}

/***/ }),
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(191)
  __webpack_require__(193)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(194),
  /* template */
  __webpack_require__(198),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 191 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 192 */,
/* 193 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_touchui_dist_components_tab_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_touchui_dist_components_icon__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_touchui_dist_components_col__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_touchui_dist_components_row__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_touchui_dist_components_nav_bar__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_touchui_dist_components_text__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_touchui_dist_components_slide_menu__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_touchui_dist_components_view__ = __webpack_require__(37);











/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UiView: __WEBPACK_IMPORTED_MODULE_9_touchui_dist_components_view__["a" /* default */],
    UiSlideMenu: __WEBPACK_IMPORTED_MODULE_8_touchui_dist_components_slide_menu__["a" /* default */],
    UiText: __WEBPACK_IMPORTED_MODULE_7_touchui_dist_components_text__["a" /* default */],
    UiNavBar: __WEBPACK_IMPORTED_MODULE_6_touchui_dist_components_nav_bar__["a" /* default */],
    UiRow: __WEBPACK_IMPORTED_MODULE_5_touchui_dist_components_row__["a" /* default */],
    UiCol: __WEBPACK_IMPORTED_MODULE_4_touchui_dist_components_col__["a" /* default */],
    UiIcon: __WEBPACK_IMPORTED_MODULE_3_touchui_dist_components_icon__["a" /* default */],
    UiTabBar: __WEBPACK_IMPORTED_MODULE_2_touchui_dist_components_tab_bar__["a" /* default */]
  },

  config: {
    "pages": ["pages/index", "pages/menu/list", "pages/menu/detail", "pages/order/list"],
    "theme": {
      "theme-color": "#3399ff"
    },
    "window": {
      "scrollType": "div",
      "navigationBarBackgroundColor": "#ffffff",
      "navigationBarTextStyle": "black",
      "navigationBarBorderColor": "rgba(231, 231, 231, 0.6)"
    },
    "tabBar": {
      "color": "#7a7e83",
      "selectedColor": "#39f",
      "borderColor": "rgba(231, 231, 231, 0.6)",
      "backgroundColor": "#fff",
      "list": [{
        "pagePath": "pages/index",
        "iconName": "home",
        "text": "首页"
      }, {
        "pagePath": "pages/menu/category",
        "iconName": "airudiantubiaohuizhi-zhuanqu_meishicaipu",
        "text": "码上点餐"
      }, {
        "pagePath": "pages/car/list",
        "iconName": "navicon-xtcp",
        "text": "我的菜谱"
      }, {
        "pagePath": "pages/member/user",
        "iconName": "gerenzhongxin",
        "text": "个人中心"
      }]
    },
    "networkBaseUrl": ""
  },
  data: function data() {
    return {
      //全局变量
      globalData: {},
      WIN_WIDTH: ui.WIN_WIDTH,
      tabIndex: 0,
      tabBarList: [],
      navStyle: {},
      tabBar: {},
      tabBarHeight: 56,
      isApp: ui.IS_APP,
      headerHeight: ui.DEFAULT_HEADER_HEIGHT,
      paths: [],
      barHeight: ui.STATUS_BAR_HEIGHT,
      showSlideMenu: false
    };
  },

  computed: {
    // 控制通用导航栏是否显示
    navigationBarVisible: function navigationBarVisible() {
      return this.winConfig.navigationStyle !== 'custom';
    },

    // 控制通用导航栏是否显示返回按钮（首页不显示，其他页显示）
    showBack: function showBack() {
      var homePath = this.paths[0];
      if (this.tabBar && this.tabBar.paths) {
        return this.tabBar.paths.indexOf(homePath) < 0;
      } else {
        return homePath !== this.$route.path;
      }
    },

    // 通用导航栏应用app.json和page.json的设置
    winConfig: function winConfig() {
      var window = this.$router.options.window;
      var config = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, window, this.pageConfig);
      var color = config.navigationBarTextStyle || 'white';

      var scrollType = document.body.getAttribute('scroll-type');

      this.navStyle = {
        backgroundColor: config.navigationBarBackgroundColor,
        color: color,
        borderBottom: '1px solid ' + config.navigationBarBorderColor,
        backgroundImage: config.navigationBarBackgroundGradient,
        position: scrollType === 'body' ? 'fixed' : 'absolute'
      };

      if (this.navStyle.backgroundColor) {
        this.navStyle.backgroundImage = 'none';
      }

      if (config.navigationBarBorderColor) {
        this.navStyle.borderBottom = '1px solid ' + config.navigationBarBorderColor;
      } else {
        this.navStyle.borderBottom = '0';
      }
      return config;
    },

    // 控制底部标签栏是否显示
    isTabBar: function isTabBar() {
      return this.tabBarList && this.tabBarList.length > 0;
    },

    // 设置底部标签栏样式
    tabBarStyle: function tabBarStyle() {
      var style = {};
      if (this.navigationBarVisible && this.tabBar.position === 'top') {
        style.top = this.headerHeight + 'px';
      }
      var scrollType = document.body.getAttribute('scroll-type');
      style.position = scrollType === 'body' ? 'fixed' : 'absolute';
      return style;
    },
    bottom: function bottom() {
      return this.isTabBar ? this.tabBarHeight + 'px' : 0;
    },

    // 底部标签栏应用app.json和page.json的设置
    pageConfig: function pageConfig() {
      if (this.isTabBar) {
        return this.tabBarList[this.tabIndex].pageConfig;
      } else {
        return this.$route.meta.pageConfig || window.__$uiPageConfig;
      }
    }
  },
  watch: {
    '$route.path': function $routePath(path) {
      this.handleIosGesture();
      this.initTab();
      this.initBodyStyle();
    }
  },
  // 初始化
  created: function created() {
    var _this = this;

    this.initTab();
    this.initPaths();
    this.$nextTick(function () {
      _this.handleIosGesture();
    });
  },

  methods: {
    handleNavIconTap: function handleNavIconTap() {
      this.showSlideMenu = !this.showSlideMenu;
    },

    // 初始化底部标签栏
    initTab: function initTab() {
      this.tabBar = this.getTabBar();
      this.tabBarList = this.tabBar.list;
      if (this.tabBar.paths) {
        this.tabIndex = this.tabBar.paths.indexOf(this.$route.path);
      }
    },

    // 初始化路由
    initPaths: function initPaths() {
      var routes = this.$router.options.routes;
      this.paths = routes.map(function (item) {
        return item.path;
      });
    },
    initBodyStyle: function initBodyStyle() {
      if (this.winConfig && this.winConfig.backgroundColor) {
        document.body.style.backgroundColor = this.winConfig.backgroundColor;
      }
    },

    // iOS是否禁用侧滑退出
    handleIosGesture: function handleIosGesture() {
      if (ui.IS_IOS) {
        ui.setPagePopGesture && ui.setPagePopGesture({
          openPagePopGesture: !this.pageConfig.disableIosGesture
        });
      }
    },

    // tabBar示例用到，底部标签栏切换前事件处理
    handleTabBeforeChange: function handleTabBeforeChange(_ref) {
      var id = _ref.id,
          index = _ref.index,
          next = _ref.next;

      next();
    },


    // tabBar示例用到，底部标签栏切换后事件处理
    handleTabChange: function handleTabChange(_ref2) {
      var id = _ref2.id,
          index = _ref2.index;
    },

    // 回退处理
    handleBack: function handleBack() {
      ui.navigateBack();
    },
    getTabBar: function getTabBar() {
      var tabBars = [this.$router.options.tabBar].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.$router.options.pageTabBars));
      for (var i = 0; i < tabBars.length; i++) {
        if (tabBars[i].paths && tabBars[i].paths.indexOf(this.$route.path) > -1) {
          return tabBars[i];
        }
      }
      return {};
    }
  },
  mounted: function mounted() {}
});

/***/ }),
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-view",
    attrs: {
      "id": "ui-app"
    }
  }, [_c('ui-slide-menu', {
    attrs: {
      "width": "280",
      "threshold": "30",
      "touch": _vm.pageConfig.touchSlideMenu
    },
    model: {
      value: (_vm.showSlideMenu),
      callback: function($$v) {
        _vm.showSlideMenu = $$v
      },
      expression: "showSlideMenu"
    }
  }, [_c('div', {
    staticClass: "menu ui-view",
    slot: "menu"
  }, [_c('ui-text', {
    staticStyle: {
      "color": "#fff",
      "margin": "10px"
    },
    attrs: {
      "block": ""
    }
  }, [_vm._v("侧滑菜单")])], 1), _vm._v(" "), _c('div', {
    staticClass: "ui-view",
    slot: "panel"
  }, [(_vm.pageConfig) ? _c('ui-nav-bar', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.navigationBarVisible),
      expression: "navigationBarVisible"
    }],
    staticClass: "page-6a9c68",
    style: (_vm.navStyle)
  }, [_c('div', {
    staticClass: "ui-row",
    style: ({})
  }, [_c('div', {
    staticClass: "ui-col",
    style: ({
      'flex': '0 0 80px'
    })
  }, [_c('div', {
    staticClass: "ui-col-content"
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showBack),
      expression: "showBack"
    }],
    staticClass: "back",
    on: {
      "tap": _vm.handleBack
    }
  }, [_c('ui-icon', {
    attrs: {
      "type": "arrow-left",
      "font-size": "24"
    }
  }), _vm._v("返回\n          ")], 1), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showBack),
      expression: "!showBack"
    }],
    staticClass: "back",
    on: {
      "tap": _vm.handleNavIconTap
    }
  }, [_c('ui-icon', {
    attrs: {
      "type": "list",
      "color": "#2B333B",
      "size": "16"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "nav-bar-center ui-col ui-col-align-center align-center",
    style: ({
      'flex': ("0 0 " + (_vm.WIN_WIDTH-160) + "px")
    }),
    attrs: {
      "content-direction": "row"
    }
  }, [_c('div', {
    staticClass: "ui-col-content align-center flex-row"
  }, [_c('div', {
    staticClass: "nav-bar-center-loading ui-view",
    staticStyle: {
      "display": "none"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "nav-bar-center-text"
  }, [_vm._v(_vm._s(_vm.$t(_vm.winConfig.navigationBarTitleText)))])])]), _vm._v(" "), _c('div', {
    staticClass: "ui-col",
    style: ({
      'flex': '0 0 80px'
    })
  }, [_c('div', {
    staticClass: "ui-col-content"
  })])])]) : _vm._e(), _vm._v(" "), _c('keep-alive', [(!_vm.isApp && _vm.pageConfig.cache) ? _c('router-view', {
    staticClass: "router-view"
  }) : _vm._e()], 1), _vm._v(" "), (_vm.isApp || !_vm.pageConfig.cache) ? _c('router-view', {
    staticClass: "router-view"
  }) : _vm._e(), _vm._v(" "), (_vm.isTabBar) ? _c('ui-tab-bar', {
    style: (_vm.tabBarStyle),
    attrs: {
      "id": _vm.tabBar.id,
      "group-id": _vm.tabBar.groupId,
      "icon-size": _vm.tabBar.iconSize,
      "font-size": _vm.tabBar.fontSize,
      "position": _vm.tabBar.position,
      "list": _vm.tabBarList,
      "paths": _vm.tabBar.paths,
      "background-color": _vm.tabBar.backgroundColor,
      "border-color": _vm.tabBar.borderColor,
      "color": _vm.tabBar.color,
      "selected-color": _vm.tabBar.selectedColor
    },
    on: {
      "beforechange": _vm.handleTabBeforeChange,
      "change": _vm.handleTabChange
    },
    model: {
      value: (_vm.tabIndex),
      callback: function($$v) {
        _vm.tabIndex = $$v
      },
      expression: "tabIndex"
    }
  }) : _vm._e()], 1)])], 1)
},staticRenderFns: []}

/***/ }),
/* 199 */
/***/ (function(module, exports) {

function formatTime (time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

function formatLocation (longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

function urlEncode(param, key, encode) {
  if (param==null) return '';
  var paramStr = '';
  var t = typeof (param);
  if (t == 'string' || t == 'number' || t == 'boolean') {
      paramStr += '&' + key + '='  + ((encode==null||encode) ? encodeURIComponent(param) : param); 
  } else {
    for (var i in param) {
        var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
        paramStr += urlEncode(param[i], k, encode)
    }
  }
  return paramStr;
}
module.exports = {
  formatTime: formatTime,
  formatLocation: formatLocation,
  urlEncode: urlEncode
}


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v@1.8.0 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bX(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bV.length;while(e--){b=bV[e]+c;if(b in a)return b}return d}function bY(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function bZ(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bY(c)&&(e[f]=p._data(c,"olddisplay",cb(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b$(a,b,c){var d=bO.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function b_(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bU[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bU[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bU[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bU[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bU[e]+"Width"))||0));return f}function ca(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bP.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+b_(a,b,c||(f?"border":"content"),e)+"px"}function cb(a){if(bR[a])return bR[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bR[a]=c,c}function ch(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||cd.test(a)?d(a,e):ch(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ch(a+"["+e+"]",b[e],c,d);else d(a,b)}function cy(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cz(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cu;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cz(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cz(a,c,d,e,"*",g)),h}function cA(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cB(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cC(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cK(){try{return new a.XMLHttpRequest}catch(b){}}function cL(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cT(){return setTimeout(function(){cM=b},0),cM=p.now()}function cU(a,b){p.each(b,function(b,c){var d=(cS[b]||[]).concat(cS["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cV(a,b,c){var d,e=0,f=0,g=cR.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cM||cT(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cM||cT(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cW(k,j.opts.specialEasing);for(;e<g;e++){d=cR[e].call(j,a,k,j.opts);if(d)return d}return cU(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cW(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cX(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bY(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cb(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cO.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cY(a,b,c,d,e){return new cY.prototype.init(a,b,c,d,e)}function cZ(a,b){var c,d={height:a},e=0;for(;e<4;e+=2-b)c=bU[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function c_(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=r.test(" ")?/^[\s\xA0]+|[\s\xA0]+$/g:/^\s+|\s+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.0",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":a.toString().replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete"||e.readyState!=="loading"&&e.addEventListener)setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){p.isFunction(c)&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return typeof a=="object"?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length||!d)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/^(?:\{.*\}|\[.*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.shift(),e=p._queueHooks(a,b),f=function(){p.dequeue(a,b)};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),delete e.stop,d.call(a,f,e)),!c.length&&e&&e.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)(d=p._data(g[h],a+"queueHooks"))&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>-1)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=[].slice.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click")){g=p(this),g.context=this;for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){i={},k=[],g[0]=f;for(d=0;d<q;d++)l=o[d],m=l.selector,i[m]===b&&(i[m]=g.is(m)),i[m]&&k.push(l);k.length&&u.push({elem:f,matches:k})}}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){j=u[d],c.currentTarget=j.elem;for(e=0;e<j.matches.length&&!c.isImmediatePropagationStopped();e++){l=j.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,h=((p.event.special[l.origType]||{}).handle||l.handler).apply(j.elem,r),h!==b&&(c.result=h,h===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{ready:{setup:p.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bd(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)Z(a,b[e],c,d)}function be(a,b,c,d,e,f){var g,h=$.setFilters[b.toLowerCase()];return h||Z.error(b),(a||!(g=e))&&bd(a||"*",d,g=[],e),g.length>0?h(g,c,f):[]}function bf(a,c,d,e,f){var g,h,i,j,k,l,m,n,p=0,q=f.length,s=L.POS,t=new RegExp("^"+s.source+"(?!"+r+")","i"),u=function(){var a=1,c=arguments.length-2;for(;a<c;a++)arguments[a]===b&&(g[a]=b)};for(;p<q;p++){s.exec(""),a=f[p],j=[],i=0,k=e;while(g=s.exec(a)){n=s.lastIndex=g.index+g[0].length;if(n>i){m=a.slice(i,g.index),i=n,l=[c],B.test(m)&&(k&&(l=k),k=e);if(h=H.test(m))m=m.slice(0,-5).replace(B,"$&*");g.length>1&&g[0].replace(t,u),k=be(m,g[1],g[2],l,k,h)}}k?(j=j.concat(k),(m=a.slice(i))&&m!==")"?B.test(m)?bd(m,j,d,e):Z(m,c,d,e?e.concat(k):k):o.apply(d,j)):Z(a,c,d,e)}return q===1?d:Z.uniqueSort(d)}function bg(a,b,c){var d,e,f,g=[],i=0,j=D.exec(a),k=!j.pop()&&!j.pop(),l=k&&a.match(C)||[""],m=$.preFilter,n=$.filter,o=!c&&b!==h;for(;(e=l[i])!=null&&k;i++){g.push(d=[]),o&&(e=" "+e);while(e){k=!1;if(j=B.exec(e))e=e.slice(j[0].length),k=d.push({part:j.pop().replace(A," "),captures:j});for(f in n)(j=L[f].exec(e))&&(!m[f]||(j=m[f](j,b,c)))&&(e=e.slice(j.shift().length),k=d.push({part:f,captures:j}));if(!k)break}}return k||Z.error(a),g}function bh(a,b,e){var f=b.dir,g=m++;return a||(a=function(a){return a===e}),b.first?function(b,c){while(b=b[f])if(b.nodeType===1)return a(b,c)&&b}:function(b,e){var h,i=g+"."+d,j=i+"."+c;while(b=b[f])if(b.nodeType===1){if((h=b[q])===j)return b.sizset;if(typeof h=="string"&&h.indexOf(i)===0){if(b.sizset)return b}else{b[q]=j;if(a(b,e))return b.sizset=!0,b;b.sizset=!1}}}}function bi(a,b){return a?function(c,d){var e=b(c,d);return e&&a(e===!0?c:e,d)}:b}function bj(a,b,c){var d,e,f=0;for(;d=a[f];f++)$.relative[d.part]?e=bh(e,$.relative[d.part],b):(d.captures.push(b,c),e=bi(e,$.filter[d.part].apply(null,d.captures)));return e}function bk(a){return function(b,c){var d,e=0;for(;d=a[e];e++)if(d(b,c))return!0;return!1}}var c,d,e,f,g,h=a.document,i=h.documentElement,j="undefined",k=!1,l=!0,m=0,n=[].slice,o=[].push,q=("sizcache"+Math.random()).replace(".",""),r="[\\x20\\t\\r\\n\\f]",s="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",t=s.replace("w","w#"),u="([*^$|!~]?=)",v="\\["+r+"*("+s+")"+r+"*(?:"+u+r+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+t+")|)|)"+r+"*\\]",w=":("+s+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",x=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",y=r+"*([\\x20\\t\\r\\n\\f>+~])"+r+"*",z="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+v+"|"+w.replace(2,7)+"|[^\\\\(),])+",A=new RegExp("^"+r+"+|((?:^|[^\\\\])(?:\\\\.)*)"+r+"+$","g"),B=new RegExp("^"+y),C=new RegExp(z+"?(?="+r+"*,|$)","g"),D=new RegExp("^(?:(?!,)(?:(?:^|,)"+r+"*"+z+")*?|"+r+"*(.*?))(\\)|$)"),E=new RegExp(z.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+y,"g"),F=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,G=/[\x20\t\r\n\f]*[+~]/,H=/:not\($/,I=/h\d/i,J=/input|select|textarea|button/i,K=/\\(?!\\)/g,L={ID:new RegExp("^#("+s+")"),CLASS:new RegExp("^\\.("+s+")"),NAME:new RegExp("^\\[name=['\"]?("+s+")['\"]?\\]"),TAG:new RegExp("^("+s.replace("[-","[-\\*")+")"),ATTR:new RegExp("^"+v),PSEUDO:new RegExp("^"+w),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+r+"*(even|odd|(([+-]|)(\\d*)n|)"+r+"*(?:([+-]|)"+r+"*(\\d+)|))"+r+"*\\)|)","i"),POS:new RegExp(x,"ig"),needsContext:new RegExp("^"+r+"*[>+~]|"+x,"i")},M={},N=[],O={},P=[],Q=function(a){return a.sizzleFilter=!0,a},R=function(a){return function(b){return b.nodeName.toLowerCase()==="input"&&b.type===a}},S=function(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}},T=function(a){var b=!1,c=h.createElement("div");try{b=a(c)}catch(d){}return c=null,b},U=T(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),V=T(function(a){a.id=q+0,a.innerHTML="<a name='"+q+"'></a><div name='"+q+"'></div>",i.insertBefore(a,i.firstChild);var b=h.getElementsByName&&h.getElementsByName(q).length===2+h.getElementsByName(q+0).length;return g=!h.getElementById(q),i.removeChild(a),b}),W=T(function(a){return a.appendChild(h.createComment("")),a.getElementsByTagName("*").length===0}),X=T(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==j&&a.firstChild.getAttribute("href")==="#"}),Y=T(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||a.getElementsByClassName("e").length===0?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length!==1)}),Z=function(a,b,c,d){c=c||[],b=b||h;var e,f,g,i,j=b.nodeType;if(j!==1&&j!==9)return[];if(!a||typeof a!="string")return c;g=ba(b);if(!g&&!d)if(e=F.exec(a))if(i=e[1]){if(j===9){f=b.getElementById(i);if(!f||!f.parentNode)return c;if(f.id===i)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(i))&&bb(b,f)&&f.id===i)return c.push(f),c}else{if(e[2])return o.apply(c,n.call(b.getElementsByTagName(a),0)),c;if((i=e[3])&&Y&&b.getElementsByClassName)return o.apply(c,n.call(b.getElementsByClassName(i),0)),c}return bm(a,b,c,d,g)},$=Z.selectors={cacheLength:50,match:L,order:["ID","TAG"],attrHandle:{},createPseudo:Q,find:{ID:g?function(a,b,c){if(typeof b.getElementById!==j&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==j&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==j&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:W?function(a,b){if(typeof b.getElementsByTagName!==j)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(K,""),a[3]=(a[4]||a[5]||"").replace(K,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||Z.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&Z.error(a[0]),a},PSEUDO:function(a){var b,c=a[4];return L.CHILD.test(a[0])?null:(c&&(b=D.exec(c))&&b.pop()&&(a[0]=a[0].slice(0,b[0].length-c.length-1),c=b[0].slice(0,-1)),a.splice(2,3,c||a[3]),a)}},filter:{ID:g?function(a){return a=a.replace(K,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(K,""),function(b){var c=typeof b.getAttributeNode!==j&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(K,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=M[a];return b||(b=M[a]=new RegExp("(^|"+r+")"+a+"("+r+"|$)"),N.push(a),N.length>$.cacheLength&&delete M[N.shift()]),function(a){return b.test(a.className||typeof a.getAttribute!==j&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return b?function(d){var e=Z.attr(d,a),f=e+"";if(e==null)return b==="!=";switch(b){case"=":return f===c;case"!=":return f!==c;case"^=":return c&&f.indexOf(c)===0;case"*=":return c&&f.indexOf(c)>-1;case"$=":return c&&f.substr(f.length-c.length)===c;case"~=":return(" "+f+" ").indexOf(c)>-1;case"|=":return f===c||f.substr(0,c.length+1)===c+"-"}}:function(b){return Z.attr(b,a)!=null}},CHILD:function(a,b,c,d){if(a==="nth"){var e=m++;return function(a){var b,f,g=0,h=a;if(c===1&&d===0)return!0;b=a.parentNode;if(b&&(b[q]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[q]=e}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0}}return function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e=$.pseudos[a]||$.pseudos[a.toLowerCase()];return e||Z.error("unsupported pseudo: "+a),e.sizzleFilter?e(b,c,d):e}},pseudos:{not:Q(function(a,b,c){var d=bl(a.replace(A,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!$.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:Q(function(a){return function(b){return(b.textContent||b.innerText||bc(b)).indexOf(a)>-1}}),has:Q(function(a){return function(b){return Z(a,b).length>0}}),header:function(a){return I.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:R("radio"),checkbox:R("checkbox"),file:R("file"),password:R("password"),image:R("image"),submit:S("submit"),reset:S("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return J.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){var d=a.pop();return c?a:[d]},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){var d=a.splice(+b,1);return c?a:d}}};$.setFilters.nth=$.setFilters.eq,$.filters=$.pseudos,X||($.attrHandle={href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}}),V&&($.order.push("NAME"),$.find.NAME=function(a,b){if(typeof b.getElementsByName!==j)return b.getElementsByName(a)}),Y&&($.order.splice(1,0,"CLASS"),$.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!==j&&!c)return b.getElementsByClassName(a)});try{n.call(i.childNodes,0)[0].nodeType}catch(_){n=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}var ba=Z.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},bb=Z.contains=i.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc=Z.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=bc(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=bc(b);return c};Z.attr=function(a,b){var c,d=ba(a);return d||(b=b.toLowerCase()),$.attrHandle[b]?$.attrHandle[b](a):U||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},Z.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},[0,0].sort(function(){return l=0}),i.compareDocumentPosition?e=function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:(e=function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],g=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return f(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)g.unshift(j),j=j.parentNode;c=e.length,d=g.length;for(var l=0;l<c&&l<d;l++)if(e[l]!==g[l])return f(e[l],g[l]);return l===c?f(a,g[l],-1):f(e[l],b,1)},f=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),Z.uniqueSort=function(a){var b,c=1;if(e){k=l,a.sort(e);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1)}return a};var bl=Z.compile=function(a,b,c){var d,e,f,g=O[a];if(g&&g.context===b)return g;e=bg(a,b,c);for(f=0;d=e[f];f++)e[f]=bj(d,b,c);return g=O[a]=bk(e),g.context=b,g.runs=g.dirruns=0,P.push(a),P.length>$.cacheLength&&delete O[P.shift()],g};Z.matches=function(a,b){return Z(a,null,null,b)},Z.matchesSelector=function(a,b){return Z(b,null,null,[a]).length>0};var bm=function(a,b,e,f,g){a=a.replace(A,"$1");var h,i,j,k,l,m,p,q,r,s=a.match(C),t=a.match(E),u=b.nodeType;if(L.POS.test(a))return bf(a,b,e,f,s);if(f)h=n.call(f,0);else if(s&&s.length===1){if(t.length>1&&u===9&&!g&&(s=L.ID.exec(t[0]))){b=$.find.ID(s[1],b,g)[0];if(!b)return e;a=a.slice(t.shift().length)}q=(s=G.exec(t[0]))&&!s.index&&b.parentNode||b,r=t.pop(),m=r.split(":not")[0];for(j=0,k=$.order.length;j<k;j++){p=$.order[j];if(s=L[p].exec(m)){h=$.find[p]((s[1]||"").replace(K,""),q,g);if(h==null)continue;m===r&&(a=a.slice(0,a.length-r.length)+m.replace(L[p],""),a||o.apply(e,n.call(h,0)));break}}}if(a){i=bl(a,b,g),d=i.dirruns++,h==null&&(h=$.find.TAG("*",G.test(a)&&b.parentNode||b));for(j=0;l=h[j];j++)c=i.runs++,i(l,b)&&e.push(l)}return e};h.querySelectorAll&&function(){var a,b=bm,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=i.matchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;T(function(a){a.innerHTML="<select><option selected></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+r+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),T(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+r+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=e.length&&new RegExp(e.join("|")),bm=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a)))if(d.nodeType===9)try{return o.apply(f,n.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j=d.getAttribute("id"),k=j||q,l=G.test(a)&&d.parentNode||d;j?k=k.replace(c,"\\$&"):d.setAttribute("id",k);try{return o.apply(f,n.call(l.querySelectorAll(a.replace(C,"[id='"+k+"'] $&")),0)),f}catch(i){}finally{j||d.removeAttribute("id")}}return b(a,d,f,g,h)},g&&(T(function(b){a=g.call(b,"div");try{g.call(b,"[test!='']:sizzle"),f.push($.match.PSEUDO)}catch(c){}}),f=new RegExp(f.join("|")),Z.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!ba(b)&&!f.test(c)&&(!e||!e.test(c)))try{var h=g.call(b,c);if(h||a||b.document&&b.document.nodeType!==11)return h}catch(i){}return Z(c,null,null,[b]).length>0})}(),Z.attr=p.attr,p.find=Z,p.expr=Z.selectors,p.expr[":"]=p.expr.pseudos,p.unique=Z.uniqueSort,p.text=Z.getText,p.isXMLDoc=Z.isXML,p.contains=Z.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=(c[0]||c).ownerDocument||c[0]||c,typeof c.createDocumentFragment=="undefined"&&(c=e),a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=0,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(g=b===e&&bA;(h=a[s])!=null;s++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{g=g||bk(b),l=l||g.appendChild(b.createElement("div")),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(f=n.length-1;f>=0;--f)p.nodeName(n[f],"tbody")&&!n[f].childNodes.length&&n[f].parentNode.removeChild(n[f])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l=g.lastChild}h.nodeType?t.push(h):t=p.merge(t,h)}l&&(g.removeChild(l),h=l=g=null);if(!p.support.appendChecked)for(s=0;(h=t[s])!=null;s++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(s=0;(h=t[s])!=null;s++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[s+1,0].concat(r)),s+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^margin/,bO=new RegExp("^("+q+")(.*)$","i"),bP=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bQ=new RegExp("^([-+])=("+q+")","i"),bR={},bS={position:"absolute",visibility:"hidden",display:"block"},bT={letterSpacing:0,fontWeight:400,lineHeight:1},bU=["Top","Right","Bottom","Left"],bV=["Webkit","O","Moz","ms"],bW=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return bZ(this,!0)},hide:function(){return bZ(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bW.apply(this,arguments):this.each(function(){(c?a:bY(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bX(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bQ.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bX(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bT&&(f=bT[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(a,b){var c,d,e,f,g=getComputedStyle(a,null),h=a.style;return g&&(c=g[b],c===""&&!p.contains(a.ownerDocument.documentElement,a)&&(c=p.style(a,b)),bP.test(c)&&bN.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=c,c=g.width,h.width=d,h.minWidth=e,h.maxWidth=f)),c}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bP.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0||bH(a,"display")!=="none"?ca(a,b,d):p.swap(a,bS,function(){return ca(a,b,d)})},set:function(a,c,d){return b$(a,c,d?b_(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bP.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bU[d]+b]=e[d]||e[d-2]||e[0];return f}},bN.test(a)||(p.cssHooks[a+b].set=b$)});var cc=/%20/g,cd=/\[\]$/,ce=/\r?\n/g,cf=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,cg=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||cg.test(this.nodeName)||cf.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(ce,"\r\n")}}):{name:b.name,value:c.replace(ce,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ch(d,a[d],c,f);return e.join("&").replace(cc,"+")};var ci,cj,ck=/#.*$/,cl=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cm=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,cn=/^(?:GET|HEAD)$/,co=/^\/\//,cp=/\?/,cq=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cr=/([?&])_=[^&]*/,cs=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,ct=p.fn.load,cu={},cv={},cw=["*/"]+["*"];try{ci=f.href}catch(cx){ci=e.createElement("a"),ci.href="",ci=ci.href}cj=cs.exec(ci.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&ct)return ct.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cq,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cA(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cA(a,b),a},ajaxSettings:{url:ci,isLocal:cm.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cw},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cy(cu),ajaxTransport:cy(cv),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cB(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cC(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cl.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(ck,"").replace(co,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=cs.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==cj[1]&&i[2]==cj[2]&&(i[3]||(i[1]==="http:"?80:443))==(cj[3]||(cj[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cz(cu,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!cn.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cp.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cr,"$1_="+z);l.url=A+(A===l.url?(cp.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cw+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cz(cv,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cD=[],cE=/\?/,cF=/(=)\?(?=&|$)|\?\?/,cG=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cD.pop()||p.expando+"_"+cG++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cF.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cF.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cF,"$1"+f):m?c.data=i.replace(cF,"$1"+f):k&&(c.url+=(cE.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cD.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cH,cI=a.ActiveXObject?function(){for(var a in cH)cH[a](0,1)}:!1,cJ=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cK()||cL()}:cK,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cI&&delete cH[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cJ,cI&&(cH||(cH={},p(a).unload(cI)),cH[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cM,cN,cO=/^(?:toggle|show|hide)$/,cP=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cQ=/queueHooks$/,cR=[cX],cS={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cP.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&&j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};p.Animation=p.extend(cV,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cS[c]=cS[c]||[],cS[c].unshift(b)},prefilter:function(a,b){b?cR.unshift(a):cR.push(a)}}),p.Tween=cY,cY.prototype={constructor:cY,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cY.propHooks[this.prop];return a&&a.get?a.get(this):cY.propHooks._default.get(this)},run:function(a){var b,c=cY.propHooks[this.prop];return this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration),this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cY.propHooks._default.set(this),this}},cY.prototype.init.prototype=cY.prototype,cY.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cY.propHooks.scrollTop=cY.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(cZ(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bY).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cV(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cQ.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:cZ("show"),slideUp:cZ("hide"),slideToggle:cZ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cY.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cN&&(cN=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cN),cN=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c$=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&&m.ownerDocument;if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=c_(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c$.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c$.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=c_(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g)}})}),a.jQuery=a.$=p,"function"=="function"&&__webpack_require__(108)&&__webpack_require__(108).jQuery&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return p}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))})(window);

/***/ }),
/* 201 */
/***/ (function(module, exports) {


/**
 * jQuery SHA1 hash algorithm function
 * Download by http://www.codefans.net
 * 	<code>
 * 		Calculate the sha1 hash of a String 
 * 		String $.sha1 ( String str )
 * 	</code>
 * 
 * Calculates the sha1 hash of str using the US Secure Hash Algorithm 1.
 * SHA-1 the Secure Hash Algorithm (SHA) was developed by NIST and is specified in the Secure Hash Standard (SHS, FIPS 180).
 * This script is used to process variable length message into a fixed-length output using the SHA-1 algorithm. It is fully compatible with UTF-8 encoding.
 * If you plan using UTF-8 encoding in your project don't forget to set the page encoding to UTF-8 (Content-Type meta tag).
 * This function orginally get from the WebToolkit and rewrite for using as the jQuery plugin.
 * 
 * Example
 * 	Code
 * 		<code>
 * 			$.sha1("I'm Persian."); 
 * 		</code>
 * 	Result
 * 		<code>
 * 			"1d302f9dc925d62fc859055999d2052e274513ed"
 * 		</code>
 * 
 * @alias Muhammad Hussein Fattahizadeh < muhammad [AT] semnanweb [DOT] com >
 * @link http://www.semnanweb.com/jquery-plugin/sha1.html
 * @see http://www.webtoolkit.info/
 * @license http://www.gnu.org/licenses/gpl.html [GNU General Public License]
 * @param {jQuery} {sha1:function(string))
 * @return string
 */

(function($){
	
	var rotateLeft = function(lValue, iShiftBits) {
		return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
	}
	
	var lsbHex = function(value) {
		var string = "";
		var i;
		var vh;
		var vl;
		for(i = 0;i <= 6;i += 2) {
			vh = (value>>>(i * 4 + 4))&0x0f;
			vl = (value>>>(i*4))&0x0f;
			string += vh.toString(16) + vl.toString(16);
		}
		return string;
	};
	
	var cvtHex = function(value) {
		var string = "";
		var i;
		var v;
		for(i = 7;i >= 0;i--) {
			v = (value>>>(i * 4))&0x0f;
			string += v.toString(16);
		}
		return string;
	};
	
	var uTF8Encode = function(string) {
		string = string.replace(/\x0d\x0a/g, "\x0a");
		var output = "";
		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
				output += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				output += String.fromCharCode((c >> 6) | 192);
				output += String.fromCharCode((c & 63) | 128);
			} else {
				output += String.fromCharCode((c >> 12) | 224);
				output += String.fromCharCode(((c >> 6) & 63) | 128);
				output += String.fromCharCode((c & 63) | 128);
			}
		}
		return output;
	};
	
	$.extend({
		sha1: function(string) {
			var blockstart;
			var i, j;
			var W = new Array(80);
			var H0 = 0x67452301;
			var H1 = 0xEFCDAB89;
			var H2 = 0x98BADCFE;
			var H3 = 0x10325476;
			var H4 = 0xC3D2E1F0;
			var A, B, C, D, E;
			var tempValue;
			string = uTF8Encode(string);
			var stringLength = string.length;
			var wordArray = new Array();
			for(i = 0;i < stringLength - 3;i += 4) {
				j = string.charCodeAt(i)<<24 | string.charCodeAt(i + 1)<<16 | string.charCodeAt(i + 2)<<8 | string.charCodeAt(i + 3);
				wordArray.push(j);
			}
			switch(stringLength % 4) {
				case 0:
					i = 0x080000000;
				break;
				case 1:
					i = string.charCodeAt(stringLength - 1)<<24 | 0x0800000;
				break;
				case 2:
					i = string.charCodeAt(stringLength - 2)<<24 | string.charCodeAt(stringLength - 1)<<16 | 0x08000;
				break;
				case 3:
					i = string.charCodeAt(stringLength - 3)<<24 | string.charCodeAt(stringLength - 2)<<16 | string.charCodeAt(stringLength - 1)<<8 | 0x80;
				break;
			}
			wordArray.push(i);
			while((wordArray.length % 16) != 14 ) wordArray.push(0);
			wordArray.push(stringLength>>>29);
			wordArray.push((stringLength<<3)&0x0ffffffff);
			for(blockstart = 0;blockstart < wordArray.length;blockstart += 16) {
				for(i = 0;i < 16;i++) W[i] = wordArray[blockstart+i];
				for(i = 16;i <= 79;i++) W[i] = rotateLeft(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
				A = H0;
				B = H1;
				C = H2;
				D = H3;
				E = H4;
				for(i = 0;i <= 19;i++) {
					tempValue = (rotateLeft(A, 5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
					E = D;
					D = C;
					C = rotateLeft(B, 30);
					B = A;
					A = tempValue;
				}
				for(i = 20;i <= 39;i++) {
					tempValue = (rotateLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
					E = D;
					D = C;
					C = rotateLeft(B, 30);
					B = A;
					A = tempValue;
				}
				for(i = 40;i <= 59;i++) {
					tempValue = (rotateLeft(A, 5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
					E = D;
					D = C;
					C = rotateLeft(B, 30);
					B = A;
					A = tempValue;
				}
				for(i = 60;i <= 79;i++) {
					tempValue = (rotateLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
					E = D;
					D = C;
					C = rotateLeft(B, 30);
					B = A;
					A = tempValue;
				}
				H0 = (H0 + A) & 0x0ffffffff;
				H1 = (H1 + B) & 0x0ffffffff;
				H2 = (H2 + C) & 0x0ffffffff;
				H3 = (H3 + D) & 0x0ffffffff;
				H4 = (H4 + E) & 0x0ffffffff;
			}
			var tempValue = cvtHex(H0) + cvtHex(H1) + cvtHex(H2) + cvtHex(H3) + cvtHex(H4);
			return tempValue.toLowerCase();
		}
	});
})(jQuery);

/***/ }),
/* 202 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 203 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_index_ui__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_index_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_index_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_menu_category_ui__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_menu_category_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_menu_category_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_car_list_ui__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_car_list_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_car_list_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_member_user_ui__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_member_user_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pages_member_user_ui__);


//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Page0: __WEBPACK_IMPORTED_MODULE_2__pages_index_ui___default.a,
    Page1: __WEBPACK_IMPORTED_MODULE_3__pages_menu_category_ui___default.a,
    Page2: __WEBPACK_IMPORTED_MODULE_4__pages_car_list_ui___default.a,
    Page3: __WEBPACK_IMPORTED_MODULE_5__pages_member_user_ui___default.a
  },
  data: function data() {
    return {
      tabIndex: -1,
      cachedPages: []
    };
  },

  watch: {
    tabIndex: function tabIndex(index, oldIndex) {
      this.setPageVisibility();
      this.handlePageEvent(index, oldIndex);
    }
  },
  created: function created() {
    var _this = this;

    this.initTabIndex();
    this.$EventService.on('ui-tab-change-adfe189', function (index) {
      _this.tabIndex = index;
    });
  },

  methods: {
    setPageVisibility: function setPageVisibility() {
      var _this2 = this;

      this.$children.forEach(function (child, index) {
        var classList = child.$el.classList;
        if (classList) {
          var pageClass = _this2.findPageClass(classList);
          if (pageClass) {
            _this2.$nextTick(function () {
              var els = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(document.querySelectorAll(pageClass));
              els.forEach(function (el) {
                if (!(el.__vue__ && el.__vue__.isDialog)) {
                  el.style.visibility = index === _this2.tabIndex ? 'visible' : 'hidden';
                }
              });
            });
          }
        }
      });
    },
    handlePageEvent: function handlePageEvent(index, oldIndex) {
      var _this3 = this;

      var child = this.$children[index];
      if (child.$children) {
        var page = ui.findTabPageInstance(child);

        var handle = function handle() {
          if (page) {
            var pageLoad = page.pageLoad;
            page.showCustomNavBar = true;
            page.isTabBarActive = true;

            page.triggerTabLoad();

            _this3.$nextTick(function () {

              var oldTabPage = _this3.$children[oldIndex];
              if (oldTabPage) {
                var oldPage = ui.findTabPageInstance(oldTabPage);
                oldPage.showCustomNavBar = false;
                oldPage.isTabBarActive = false;
                // let pageClass = this.findPageClass(oldTabPage.$el.classList)
                // document.querySelector(pageClass).__vue__.showCustomNavBar = false
              }
            });
          }
        };

        if (page) {
          handle();
        } else {
          window.setTimeout(function () {
            page = child.$children[0];
            handle();
          }, 200);
        }
      } else {
        throw new Error('请将ui-page作为页面的根元素');
      }
    },
    findPageClass: function findPageClass(classList) {
      for (var i = 0; i < classList.length; i++) {
        if (classList[i].match(/page-\w{6}/)) {
          return '.' + classList[i];
        }
      }
    },
    initTabIndex: function initTabIndex() {
      var tabBars = [this.$router.options.tabBar].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.$router.options.pageTabBars));
      var tabBar = void 0;
      for (var i = 0; i < tabBars.length; i++) {
        if (tabBars[i].paths.indexOf(this.$route.path) > -1) {
          tabBar = tabBars[i];
        }
      }

      if (tabBar && tabBar.paths) {
        this.tabIndex = tabBar.paths.indexOf(this.$route.path);
      }
    }
  }
});

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(206)
  __webpack_require__(207)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(208),
  /* template */
  __webpack_require__(214),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 206 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 207 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_touchui_dist_components_input__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_touchui_dist_components_text__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_touchui_dist_components_image__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_touchui_dist_components_ex_swiper_item__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_touchui_dist_components_ex_swiper__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_touchui_dist_components_view__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_touchui_dist_components_page__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vant_lib_button_style__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vant_lib_button_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vant_lib_button_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vant__ = __webpack_require__(49);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













__WEBPACK_IMPORTED_MODULE_8_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_10_vant__["a" /* Button */]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UiPage: __WEBPACK_IMPORTED_MODULE_6_touchui_dist_components_page__["a" /* default */],
    UiView: __WEBPACK_IMPORTED_MODULE_5_touchui_dist_components_view__["a" /* default */],
    UiExSwiper: __WEBPACK_IMPORTED_MODULE_4_touchui_dist_components_ex_swiper__["a" /* default */],
    UiExSwiperItem: __WEBPACK_IMPORTED_MODULE_3_touchui_dist_components_ex_swiper_item__["a" /* default */],
    UiImage: __WEBPACK_IMPORTED_MODULE_2_touchui_dist_components_image__["a" /* default */],
    UiText: __WEBPACK_IMPORTED_MODULE_1_touchui_dist_components_text__["a" /* default */],
    UiInput: __WEBPACK_IMPORTED_MODULE_0_touchui_dist_components_input__["a" /* default */]
  },

  config: {
    navigationBarTitleText: '首页',
    backgroundColor: '#F4F4F4',
    navigationBarTextStyle: 'black'
  },
  data: function data() {
    return {
      buttonText: '界面跳转',
      isShow: false,
      autoplay: {
        delay: 3000
      },
      swiperFirst: [{
        image: ''
      }],
      swiperSecond: []
    };
  },

  methods: {
    handleChange: function handleChange(index) {
      ui.showToast({
        title: '\u5207\u6362\u5230\u7B2C' + (index + 1) + '\u9879'
      });
    },
    sliderShow: function sliderShow() {
      this.isShow = true;
    },
    navHandle: function navHandle() {
      ui.navigateTo({
        url: '/pages/detail'
      });
    }
  },
  mounted: function mounted() {
    //首屏页面需要在mounted中延时才能调用框架api，其他页面不需要延时
    setTimeout(function () {
      //关闭app启动图
      ui.closeSplashscreen();
    }, 1000);
  },
  created: function created() {
    var that = this;
    this.fetch(__WEBPACK_IMPORTED_MODULE_7__api_js__["a" /* Api */].position.path, {
      method: 'GET'
    }).then(function (response) {
      response[0].adverts.map(function (item) {
        item.image = __WEBPACK_IMPORTED_MODULE_7__api_js__["b" /* baseUrl */] + item.image;
      });
      response[1].adverts.map(function (item) {
        item.image = __WEBPACK_IMPORTED_MODULE_7__api_js__["b" /* baseUrl */] + item.image;
      });
      that.swiperFirst = response[0].adverts;
      that.swiperSecond = response[1].adverts;
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 213 */,
/* 214 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ui-page', {
    staticClass: "page-cbbdac"
  }, [_c('div', {
    staticClass: "index-swiper ui-view"
  }, [_c('ui-ex-swiper', {
    attrs: {
      "pagination": "",
      "loop": "",
      "autoplay": _vm.autoplay
    }
  }, _vm._l((_vm.swiperFirst), function(item, index) {
    return _c('ui-ex-swiper-item', {
      key: index,
      attrs: {
        "ui:for-item": "item"
      }
    }, [_c('ui-image', {
      attrs: {
        "src": item.image,
        "mode": "simple"
      }
    }), _vm._v(" "), _c('ui-text', {
      staticClass: "slide-title"
    }, [_vm._v(_vm._s(item.title))])], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "search ui-view"
  }, [_c('ui-text', {
    staticClass: "eat"
  }, [_vm._v("今天吃点什么？")]), _vm._v(" "), _c('ui-input', {
    attrs: {
      "type": "search",
      "name": "search",
      "placeholder": "搜索",
      "show-clear": ""
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(216)
  __webpack_require__(217)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(218),
  /* template */
  __webpack_require__(221),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 216 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 217 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_touchui_dist_components_page__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vant_lib_tree_select_style__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vant_lib_tree_select_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vant_lib_tree_select_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vant__ = __webpack_require__(49);
//
//
//
//
//
//







__WEBPACK_IMPORTED_MODULE_2_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_vant__["o" /* TreeSelect */]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UiPage: __WEBPACK_IMPORTED_MODULE_0_touchui_dist_components_page__["a" /* default */]
  },

  config: {
    navigationBarTitleText: "菜单列表"
  },
  data: function data() {
    return {
      items: [{
        text: ''
      }],
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1
    };
  },

  methods: {
    onNavClick: function onNavClick(index) {
      this.mainActiveIndex = index;
      if (!this.items[index].children) {
        ui.navigateTo({
          url: 'list?cid=' + this.items[index].id
        });
      }
    },
    onItemClick: function onItemClick(data) {
      this.activeId = data.id;
      ui.navigateTo({
        url: 'list?cid=' + data.id
      });
    }
  },
  created: function created() {
    var that = this;
    this.fetch(__WEBPACK_IMPORTED_MODULE_1__api_js__["a" /* Api */].categoryIndex.path, {
      method: 'GET'
    }).then(function (response) {
      that.items = response;
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),
/* 219 */,
/* 220 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ui-page', {
    staticClass: "page-c1e598"
  }, [_c('van-tree-select', {
    attrs: {
      "items": _vm.items,
      "main-active-index": _vm.mainActiveIndex,
      "active-id": _vm.activeId
    },
    on: {
      "navclick": _vm.onNavClick,
      "itemclick": _vm.onItemClick
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(223)
  __webpack_require__(224)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(225),
  /* template */
  __webpack_require__(236),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 223 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 224 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_touchui_dist_components_icon__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_touchui_dist_components_view__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_touchui_dist_components_col__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_touchui_dist_components_row__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_touchui_dist_components_nav_bar__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_touchui_dist_components_page__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vant__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vant_lib_checkbox_style__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vant_lib_checkbox_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_vant_lib_checkbox_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vant_lib_checkbox_group_style__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vant_lib_checkbox_group_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_vant_lib_checkbox_group_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_vant_lib_card_style__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_vant_lib_card_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_vant_lib_card_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vant_lib_submit_bar_style__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vant_lib_submit_bar_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_vant_lib_submit_bar_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_vant_lib_stepper_style__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_vant_lib_stepper_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_vant_lib_stepper_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_vant_lib_button_style__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_vant_lib_button_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_vant_lib_button_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_vant_lib_field_style__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_vant_lib_field_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_vant_lib_field_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_vant_lib_cell_group_style__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_vant_lib_cell_group_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_vant_lib_cell_group_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_vant_lib_toast_style__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_vant_lib_toast_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_vant_lib_toast_style__);



var _components;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



















__WEBPACK_IMPORTED_MODULE_10_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_8_vant__["e" /* Checkbox */]).use(__WEBPACK_IMPORTED_MODULE_8_vant__["f" /* CheckboxGroup */]).use(__WEBPACK_IMPORTED_MODULE_8_vant__["b" /* Card */]).use(__WEBPACK_IMPORTED_MODULE_8_vant__["m" /* SubmitBar */]).use(__WEBPACK_IMPORTED_MODULE_8_vant__["l" /* Stepper */]).use(__WEBPACK_IMPORTED_MODULE_8_vant__["a" /* Button */]).use(__WEBPACK_IMPORTED_MODULE_8_vant__["g" /* Field */]).use(__WEBPACK_IMPORTED_MODULE_8_vant__["d" /* CellGroup */]).use(__WEBPACK_IMPORTED_MODULE_8_vant__["n" /* Toast */]);
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: "我的菜谱",
    navigationStyle: 'custom',
    scrollType: 'body'
  },
  data: function data() {
    return {
      editClose: true,
      editText: '编辑',
      value: 1,
      checkedGoods: [],
      goods: []
    };
  },

  methods: {
    goodsChange: function goodsChange(items) {
      for (var i = 0; i < this.goods.length; i++) {
        this.goods[i].is_check = 0;
        for (var j = 0; j < items.length; j++) {
          if (this.goods[i].id == items[j]) {
            this.goods[i].is_check = 1;
            break;
          }
        }
      }
    },
    editCar: function editCar() {
      var _this = this;

      var that = this;
      if (this.editClose) {
        this.editClose = false;
        this.editText = '保存';
      } else {
        var goods = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(this.goods);
        this.fetch(__WEBPACK_IMPORTED_MODULE_9__api_js__["a" /* Api */].carUpdates.path, {
          method: 'POST',
          data: { goods: goods }
        }).then(function (response) {
          if (response == 'success') {
            __WEBPACK_IMPORTED_MODULE_8_vant__["n" /* Toast */].success('保存成功');
            _this.editText = '编辑';
            _this.editClose = true;
          }
        }).catch(function (error) {
          console.log(error);
        });
      }
    },
    navigateBack: function navigateBack() {
      ui.navigateBack();
    },
    formatPrice: function formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      var orderGoods = [];
      this.goods.map(function (item) {
        if (item.is_check) {
          orderGoods.push(item);
        }
      });
      orderGoods = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(orderGoods);
      var tid = ui.getStorageSync('tid');
      var type = 0;
      var from_car = 1;
      var order_amount = this.totalPrice;
      this.fetch(__WEBPACK_IMPORTED_MODULE_9__api_js__["a" /* Api */].order.path, {
        method: 'POST',
        data: { orderGoods: orderGoods, tid: tid, type: type, order_amount: order_amount, from_car: from_car }
      }).then(function (response) {
        if (response == 'success') {
          _this2.getList();
          ui.showConfirm({
            content: '点餐成功！',
            confirmButtonText: '查看订单',
            cancelButtonText: '取消',
            success: function success(result) {
              if (result.confirm) {
                ui.redirectTo({
                  url: '/pages/order/list'
                });
              }
            }
          });
        }
      }).catch(function (error) {
        console.log(error);
      });
    },
    getList: function getList() {
      var that = this;
      this.fetch(__WEBPACK_IMPORTED_MODULE_9__api_js__["a" /* Api */].car.path, {
        method: 'GET',
        data: {}
      }).then(function (response) {
        response.list.map(function (item) {
          item.thumb = __WEBPACK_IMPORTED_MODULE_9__api_js__["b" /* baseUrl */] + item.image;
          if (item.is_check) {
            that.checkedGoods.push(item.id);
          }
        });
        that.goods = response.list;
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    this.getList();
  },

  computed: {
    submitBarText: function submitBarText() {
      var count = this.checkedGoods.length;
      return '确认点餐' + (count ? '(' + count + ')' : '');
    },
    totalPrice: function totalPrice() {
      var _this3 = this;

      return this.goods.reduce(function (total, item) {
        return total + (_this3.checkedGoods.indexOf(item.id) !== -1 ? item.price * item.nums : 0);
      }, 0);
    }
  },
  mounted: function mounted() {},

  components: (_components = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_8_vant__["b" /* Card */].name, __WEBPACK_IMPORTED_MODULE_8_vant__["b" /* Card */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_8_vant__["e" /* Checkbox */].name, __WEBPACK_IMPORTED_MODULE_8_vant__["e" /* Checkbox */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_8_vant__["m" /* SubmitBar */].name, __WEBPACK_IMPORTED_MODULE_8_vant__["m" /* SubmitBar */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, __WEBPACK_IMPORTED_MODULE_8_vant__["f" /* CheckboxGroup */].name, __WEBPACK_IMPORTED_MODULE_8_vant__["f" /* CheckboxGroup */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, 'UiPage', __WEBPACK_IMPORTED_MODULE_7_touchui_dist_components_page__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, 'UiNavBar', __WEBPACK_IMPORTED_MODULE_6_touchui_dist_components_nav_bar__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, 'UiRow', __WEBPACK_IMPORTED_MODULE_5_touchui_dist_components_row__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, 'UiCol', __WEBPACK_IMPORTED_MODULE_4_touchui_dist_components_col__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, 'UiView', __WEBPACK_IMPORTED_MODULE_3_touchui_dist_components_view__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components, 'UiIcon', __WEBPACK_IMPORTED_MODULE_2_touchui_dist_components_icon__["a" /* default */]), _components)
});

/***/ }),
/* 226 */,
/* 227 */,
/* 228 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 229 */,
/* 230 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 231 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 232 */,
/* 233 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 234 */,
/* 235 */,
/* 236 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ui-page', {
    staticClass: "page-fd9966"
  }, [_c('ui-nav-bar', {
    staticClass: "page-fd9966",
    attrs: {
      "custom-style": {
        'border-bottom': '1px solid rgba(231, 231, 231, 0.6)',
        'background-color': '#fff'
      }
    },
    slot: "nav-bar"
  }, [_c('div', {
    staticClass: "ui-row",
    style: ({
      'height': '46px'
    }),
    attrs: {
      "height": "46"
    }
  }, [_c('div', {
    staticClass: "ui-col ui-col-align-center align-center valign-middle",
    style: ({
      'flex': '0 0 60px'
    }),
    on: {
      "tap": _vm.navigateBack
    }
  }, [_c('div', {
    staticClass: "ui-col-content align-center valign-middle",
    staticStyle: {
      "height": "46px"
    }
  }, [_c('div', {
    staticClass: "nav_left ui-view"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "ui-col ui-col-align-center align-center valign-middle",
    style: ({})
  }, [_c('div', {
    staticClass: "ui-col-content align-center valign-middle",
    staticStyle: {
      "height": "46px"
    }
  }, [_c('div', {
    staticClass: "nav_title ui-view"
  }, [_vm._v("我的菜谱")])])]), _vm._v(" "), (_vm.goods.length > 0) ? _c('div', {
    staticClass: "ui-col ui-col-align-center align-center valign-middle",
    style: ({
      'flex': '0 0 60px'
    }),
    on: {
      "tap": _vm.editCar
    }
  }, [_c('div', {
    staticClass: "ui-col-content align-center valign-middle",
    staticStyle: {
      "height": "46px"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.editText) + "\n      ")])]) : _c('div', {
    staticClass: "ui-col ui-col-align-center align-center valign-middle",
    style: ({
      'flex': '0 0 60px'
    })
  }, [_c('div', {
    staticClass: "ui-col-content align-center valign-middle",
    staticStyle: {
      "height": "46px"
    }
  })])])]), _vm._v(" "), _c('div', [_c('van-checkbox-group', {
    staticClass: "card-goods",
    on: {
      "change": _vm.goodsChange
    },
    model: {
      value: (_vm.checkedGoods),
      callback: function($$v) {
        _vm.checkedGoods = $$v
      },
      expression: "checkedGoods"
    }
  }, _vm._l((_vm.goods), function(item) {
    return _c('div', {
      key: item.id,
      staticClass: "card-goods__item"
    }, [_c('van-checkbox', {
      attrs: {
        "name": item.id
      }
    }), _vm._v(" "), _c('van-card', {
      attrs: {
        "title": item.name,
        "desc": item.desc,
        "price": _vm.formatPrice(item.price),
        "thumb": item.thumb
      }
    }, [_c('div', {
      slot: "num"
    }, [_c('van-stepper', {
      attrs: {
        "disabled": _vm.editClose,
        "integer": "",
        "min": 1,
        "step": 1
      },
      model: {
        value: (item.nums),
        callback: function($$v) {
          item.nums = $$v
        },
        expression: "item.nums"
      }
    })], 1), _vm._v(" "), _c('div', {
      slot: "footer"
    }, [_c('van-cell-group', [_c('van-field', {
      attrs: {
        "disabled": _vm.editClose,
        "label": "留言",
        "type": "textarea",
        "placeholder": "请输入留言",
        "rows": "1",
        "autosize": ""
      },
      model: {
        value: (item.message),
        callback: function($$v) {
          item.message = $$v
        },
        expression: "item.message"
      }
    })], 1), _vm._v(" "), _c('van-button', {
      attrs: {
        "size": "mini"
      }
    }, [_vm._v("删除")])], 1)])], 1)
  })), _vm._v(" "), (_vm.goods.length > 0) ? _c('van-submit-bar', {
    attrs: {
      "price": _vm.totalPrice,
      "disabled": !_vm.checkedGoods.length,
      "button-text": _vm.submitBarText
    },
    on: {
      "submit": _vm.onSubmit
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(238)
  __webpack_require__(239)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(240),
  /* template */
  __webpack_require__(243),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 238 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 239 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_touchui_dist_components_row_list__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_touchui_dist_components_image__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_touchui_dist_components_badge__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_touchui_dist_components_icon__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_touchui_dist_components_view__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_touchui_dist_components_col__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_touchui_dist_components_row__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_touchui_dist_components_nav_bar__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_touchui_dist_components_page__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UiPage: __WEBPACK_IMPORTED_MODULE_8_touchui_dist_components_page__["a" /* default */],
    UiNavBar: __WEBPACK_IMPORTED_MODULE_7_touchui_dist_components_nav_bar__["a" /* default */],
    UiRow: __WEBPACK_IMPORTED_MODULE_6_touchui_dist_components_row__["a" /* default */],
    UiCol: __WEBPACK_IMPORTED_MODULE_5_touchui_dist_components_col__["a" /* default */],
    UiView: __WEBPACK_IMPORTED_MODULE_4_touchui_dist_components_view__["a" /* default */],
    UiIcon: __WEBPACK_IMPORTED_MODULE_3_touchui_dist_components_icon__["a" /* default */],
    UiBadge: __WEBPACK_IMPORTED_MODULE_2_touchui_dist_components_badge__["a" /* default */],
    UiImage: __WEBPACK_IMPORTED_MODULE_1_touchui_dist_components_image__["a" /* default */],
    UiRowList: __WEBPACK_IMPORTED_MODULE_0_touchui_dist_components_row_list__["a" /* default */]
  },

  config: {
    navigationStyle: 'custom',
    navigationBarTextStyle: 'white',
    backgroundColor: '#F4F4F4'
  },
  data: function data() {
    return {
      portraitUrl: __webpack_require__(242),
      mobile: ui.getStorageSync('mobile') || '立即登录'
    };
  },

  methods: {
    goOrders: function goOrders() {
      ui.navigateTo({
        url: '/pages/order/list'
      });
    },
    goLogin: function goLogin() {
      var _self = this;
      ui.showPrompt({
        title: '登录',
        placeholder: '请输入您的电话',
        confirmButtonText: '登录',
        cancelButtonText: '取消',
        success: function success(result) {
          ui.request({
            url: __WEBPACK_IMPORTED_MODULE_9__api_js__["b" /* baseUrl */] + __WEBPACK_IMPORTED_MODULE_9__api_js__["a" /* Api */].login.path,
            method: 'POST',
            data: {
              mobile: result.value
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function success(res) {
              if (res.data.code == '200') {
                ui.setStorageSync('token', res.data.data);
                ui.setStorageSync('mobile', result.value);
                _self.mobile = result.value;
                ui.showToast({ title: '登录成功！', icon: 'success' });
              }
              if (res.data.code == '400') {
                console.log(res.data);
              }
            },
            fail: function fail(res) {
              console.log(res);
            }
          });
        }
      });
    }
  },
  computed: {}
});

/***/ }),
/* 241 */,
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/portrait_bg.d8ab821.png";

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ui-page', {
    staticClass: "page-f68b6e"
  }, [_c('ui-nav-bar', {
    staticClass: "nav_bar page-f68b6e",
    slot: "nav-bar"
  }, [_c('div', {
    staticClass: "ui-row",
    style: ({
      'height': '46px'
    }),
    attrs: {
      "height": "46"
    }
  }, [_c('div', {
    staticClass: "ui-col ui-col-align-center align-center valign-middle",
    style: ({
      'flex': '0 0 50px'
    })
  }, [_c('div', {
    staticClass: "ui-col-content align-center valign-middle",
    staticStyle: {
      "height": "46px"
    }
  }, [_c('div', {
    staticClass: "msg ui-view"
  }, [_c('ui-icon', {
    attrs: {
      "type": "xiaoxi",
      "size": "22",
      "color": "#fff"
    }
  }), _vm._v(" "), _c('ui-badge', {
    staticClass: "num-dat",
    attrs: {
      "text": "1"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "ui-col ui-col-align-center align-center valign-middle",
    style: ({})
  }, [_c('div', {
    staticClass: "ui-col-content align-center valign-middle",
    staticStyle: {
      "height": "46px"
    }
  }, [_c('div', {
    staticClass: "nav_title ui-view"
  }, [_vm._v("我的")])])]), _vm._v(" "), _c('div', {
    staticClass: "ui-col ui-col-align-center align-center valign-middle",
    style: ({
      'flex': '0 0 50px'
    })
  }, [_c('div', {
    staticClass: "ui-col-content align-center valign-middle",
    staticStyle: {
      "height": "46px"
    }
  }, [_c('ui-icon', {
    attrs: {
      "type": "shezhi",
      "size": "24",
      "color": "#fff"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "user_content ui-view"
  }, [_c('div', {
    staticClass: "header_top ui-row",
    style: ({
      'height': '150px'
    }),
    attrs: {
      "height": "150"
    }
  }, [_c('div', {
    staticClass: "ui-col ui-col-align-center align-center valign-middle",
    style: ({
      'flex': '0 0 90px'
    })
  }, [_c('div', {
    staticClass: "ui-col-content align-center valign-middle",
    staticStyle: {
      "height": "150px"
    }
  }, [_c('div', {
    staticClass: "head_portrait ui-view"
  }), _vm._v(" "), _c('ui-image', {
    staticClass: "head_portrait",
    attrs: {
      "src": _vm.portraitUrl,
      "mode": "aspectFill",
      "width": "60",
      "height": "60"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "ui-col ui-col-align-left align-left valign-middle",
    style: ({})
  }, [_c('div', {
    staticClass: "ui-col-content align-left valign-middle",
    staticStyle: {
      "height": "150px"
    }
  }, [_c('div', {
    staticClass: "login ui-view",
    on: {
      "tap": _vm.goLogin
    }
  }, [_vm._v(_vm._s(_vm.mobile))]), _vm._v(" "), _c('div', {
    staticClass: "login_after ui-view"
  }, [_vm._v("登录后可享受自助点餐服务")])])]), _vm._v(" "), _c('div', {
    staticClass: "ui-col ui-col-align-right align-right valign-middle",
    style: ({
      'padding-right': '15px',
      'flex': '0 0 50px'
    })
  }, [_c('div', {
    staticClass: "ui-col-content align-right valign-middle",
    staticStyle: {
      "height": "150px"
    }
  }, [_c('ui-icon', {
    attrs: {
      "name": "arrow-right",
      "size": "18",
      "color": "#fff"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "ui-view"
  }, [_c('div', {
    staticClass: "ui-row-list"
  }, [_c('div', {
    staticClass: "ui-row",
    style: ({
      'height': '50px'
    }),
    attrs: {
      "height": "50",
      "border-indent": ""
    },
    on: {
      "tap": _vm.goOrders
    }
  }, [_c('div', {
    staticClass: "text ui-col",
    style: ({})
  }, [_c('div', {
    staticClass: "ui-col-content",
    staticStyle: {
      "height": "50px"
    }
  }, [_vm._v("\n          我的订单\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "ui-col valign-middle",
    style: ({
      'flex': '0 0 40px'
    })
  }, [_c('div', {
    staticClass: "ui-col-content valign-middle",
    staticStyle: {
      "height": "50px"
    }
  }, [_c('ui-icon', {
    attrs: {
      "name": "previewright"
    }
  })], 1)])])])])], 1)
},staticRenderFns: []}

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-tab-page-container page-ae3ebc"
  }, [_c('Page0', {
    staticClass: "ui-tab-page",
    class: {
      visible: _vm.tabIndex === 0
    }
  }), _vm._v(" "), _c('Page1', {
    staticClass: "ui-tab-page",
    class: {
      visible: _vm.tabIndex === 1
    }
  }), _vm._v(" "), _c('Page2', {
    staticClass: "ui-tab-page",
    class: {
      visible: _vm.tabIndex === 2
    }
  }), _vm._v(" "), _c('Page3', {
    staticClass: "ui-tab-page",
    class: {
      visible: _vm.tabIndex === 3
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyNkOGQ4ZDgnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+DQo="

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyM2YzZjNmMnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+DQo="

/***/ })
],[126]);