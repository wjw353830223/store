webpackJsonp([4],{

/***/ 110:
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

/***/ 113:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/frush.669adae.gif";

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../touchui/dist/ui/index.js + 53 modules
var dist_ui = __webpack_require__(124);

// EXTERNAL MODULE: ./src/app.ui
var app = __webpack_require__(188);
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: ./src/api.js
var api = __webpack_require__(27);

// CONCATENATED MODULE: ./src/static/utils/http.js

//接口请求封装
function fetch(path, options) {
    return new Promise((resolve, reject) => {
        let header = options.header;
        if(path !== api["a" /* Api */].login){
            let authKey = ui.getStorageSync('authKey');
            let sessionId = ui.getStorageSync('sessionId');
            if(!authKey || !sessionId){
                ui.showToast({ title: '请求错误！请重新登录！'})
                return;
            }
            header = Object.assign({ authKey, sessionId }, options.header)
        }
        ui.request({
            url: api["b" /* baseUrl */] + path,
            method: options.method,
            data: options.data,
            header: header,
            success: function(res){
                if(res.data.code=='200') {
                    resolve(res.data.data)
                }else{
                    resolve(res.data.error)
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
    next();
  }
};
dist_ui["a" /* default */].extend({
  fetch: fetch
});

var config = {};
config.routes = [{
  path: '/pages/index',
  meta: { pageConfig: {
      navigationBarTitleText: '首页',
      backgroundColor: '#F4F4F4',
      navigationBarTextStyle: 'black'
    }, pageClass: 'page-cbbdac', isTabBar: true },
  component: __webpack_require__(70)
}, {
  path: '/pages/menu/category',
  meta: { pageConfig: {
      navigationBarTitleText: "菜单列表"
    }, pageClass: 'page-c1e598', isTabBar: true },
  component: __webpack_require__(70)
}, {
  path: '/pages/member/user',
  meta: { pageConfig: {
      navigationStyle: 'custom',
      navigationBarTextStyle: 'white',
      backgroundColor: '#F4F4F4'
    }, pageClass: 'page-f68b6e', isTabBar: true },
  component: __webpack_require__(70)
}, {
  path: '*',
  component: function component(resolve) {
    __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(283)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
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
  component: __webpack_require__(222).default
}, {
  path: '/',
  redirect: '/pages/index'
}, {
  path: '/pages/order/list',
  meta: { pageConfig: {
      navigationBarTitleText: "订单列表"
    }, pageClass: 'page-d44326', isTabBar: false },
  component: function component() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 284));
  }
}];
config.debug = undefined;
config.window = { "scrollType": "div", "navigationBarBackgroundColor": "#ffffff", "navigationBarTextStyle": "black", "navigationBarBorderColor": "rgba(231, 231, 231, 0.6)" };
config.theme = { "theme-color": "#3399ff" };
config.template = undefined;
config.tabBar = {
  groupId: '5af387c',
  paths: ['/pages/index', '/pages/menu/category', '/pages/member/user'],
  position: 'undefined',
  color: '#7a7e83',
  selectedColor: '#39f',
  borderColor: 'rgba(231, 231, 231, 0.6)',
  backgroundColor: '#fff',
  list: [{
    text: '订单',
    pagePath: '/pages/index',
    pageConfig: {
      navigationBarTitleText: '首页',
      backgroundColor: '#F4F4F4',
      navigationBarTextStyle: 'black'
    },
    iconName: 'home'

  }, {
    text: '统计',
    pagePath: '/pages/menu/category',
    pageConfig: {
      navigationBarTitleText: "菜单列表"
    },
    iconName: 'airudiantubiaohuizhi-zhuanqu_meishicaipu'

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

/***/ 181:
/***/ (function(module, exports) {

module.exports = {"zh-cn":{"ui.alert.button_text":"确定","ui.confirm.confirm_text":"确定","ui.confirm.cancel_text":"取消","ui.prompt.confirm_text":"确定","ui.prompt.cancel_text":"取消","ui.picker.confirm_text":"确定","ui.picker.cancel_text":"取消","ui.actionsheet.cancel_text":"取消","ui.loading.text":"加载中...","ui.cascader.loading_text":"加载中","ui.cascader.please_select":"请选择","ui.keyboard.space_text":"空格","ui.keyboard.complete_text":"完成","ui.countdown.done_text":"已结束","ui.requeststatus.loading":"加载中...","ui.requeststatus.nomore":"没有更多了...","ui.requeststatus.offline":"网络异常，点击刷新","ui.requeststatus.timeout":"请求超时，点击刷新","ui.requeststatus.error":"请求失败，点击刷新","ui.requeststatus.empty":"没有数据，点击刷新","ui.pulldownrefresh.pull":"下拉刷新","ui.pulldownrefresh.release":"释放刷新","ui.pulldownrefresh.refreshing":"正在刷新...","ui.pulldownrefresh.success":"刷新成功","ui.pulldownrefresh.cancel":"取消下拉","ui.pullupload.pull_load_more":"上拉加载更多","ui.pullupload.pull":"上拉加载","ui.pullupload.release":"释放加载","ui.pullupload.refreshing":"正在加载...","ui.pullupload.success":"加载成功","ui.pullupload.cancel":"取消加载","ui.smscode.getcode":"获取短信验证码","ui.smscode.run":"{%s}秒后重新获取","ui.smscode.reset":"重新获取验证码","ui.smscode.placeholder":"请输入验证码","ui.table.request_failed":"请求失败","ui.table.refresh":"刷新","ui.table.timeout":"网络超时","ui.table.offline":"网络无法连接，请检查您的网络","ui.table.empty":"结果为空","ui.table.need_login":"请先登录","ui.table.loading":"正在加载...","ui.cascader.select":"请选择","ui.calendar.head":"日 一 二 三 四 五 六","ui.calendar.yearsplit":"年","ui.calendar.monthsplit":"月","ui.countdown.over":"已结束"},"en":{"ui.alert.button_text":"OK","ui.confirm.confirm_text":"Confirm","ui.confirm.cancel_text":"Cancel","ui.prompt.confirm_text":"Confirm","ui.prompt.cancel_text":"Cancel","ui.picker.confirm_text":"Confirm","ui.picker.cancel_text":"Cancel","ui.actionsheet.cancel_text":"Cancel","ui.loading.text":"Loading...","ui.cascader.loading_text":"Loading","ui.cascader.please_select":"Please select","ui.keyboard.space_text":"Space","ui.keyboard.complete_text":"Complete","ui.countdown.done_text":"Done","ui.requeststatus.loading":"Loading...","ui.requeststatus.nomore":"No more data...","ui.requeststatus.offline":"Network error, tap to refresh","ui.requeststatus.timeout":"Network error, tap to refresh","ui.requeststatus.error":"Request failed, tap to refresh","ui.requeststatus.empty":"No data, tap to refresh","ui.pulldownrefresh.pull":"Pull refresh","ui.pulldownrefresh.release":"Release to refresh","ui.pulldownrefresh.refreshing":"Refreshing...","ui.pulldownrefresh.success":"Refresh success","ui.pulldownrefresh.cancel":"Cancel pull","ui.pullupload.pull_load_more":"Pull to load more","ui.pullupload.pull":"Pull load","ui.pullupload.release":"Release to load","ui.pullupload.refreshing":"Loading...","ui.pullupload.success":"Load success","ui.pullupload.cancel":"Cancel load","ui.smscode.getcode":"Get code","ui.smscode.run":"{%s} seconds","ui.smscode.reset":"Reset","ui.smscode.placeholder":"Please input code","ui.table.request_failed":"Request failed","ui.table.refresh":"Refresh","ui.table.timeout":"Timeout","ui.table.offline":"Can't connect to network","ui.table.empty":"No results","ui.table.need_login":"Please login first","ui.table.loading":"Loading...","ui.cascader.select":"Please Select","ui.calendar.head":"Sun Mon Tue Wen Thu Fri Sat","ui.calendar.yearsplit":"/","ui.calendar.monthsplit":"","ui.countdown.over":"Time's up"}}

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(189)
  __webpack_require__(191)
}
var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(192),
  /* template */
  __webpack_require__(196),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_touchui_dist_components_tab_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_touchui_dist_components_icon__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_touchui_dist_components_col__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_touchui_dist_components_row__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_touchui_dist_components_nav_bar__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_touchui_dist_components_text__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_touchui_dist_components_slide_menu__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_touchui_dist_components_view__ = __webpack_require__(44);











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
    "pages": ["pages/index", "pages/order/list"],
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
        "text": "订单"
      }, {
        "pagePath": "pages/menu/category",
        "iconName": "airudiantubiaohuizhi-zhuanqu_meishicaipu",
        "text": "统计"
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

/***/ 196:
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

/***/ 197:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_index_ui__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_index_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_index_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_menu_category_ui__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_menu_category_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_menu_category_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_member_user_ui__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_member_user_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_member_user_ui__);


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
    Page2: __WEBPACK_IMPORTED_MODULE_4__pages_member_user_ui___default.a
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
    this.$EventService.on('ui-tab-change-5af387c', function (index) {
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

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(201)
  __webpack_require__(202)
}
var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(203),
  /* template */
  __webpack_require__(207),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 201:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../touchui/dist/components/icon.js
var icon = __webpack_require__(26);

// EXTERNAL MODULE: ../touchui/dist/components/popup.js
var popup = __webpack_require__(75);

// EXTERNAL MODULE: ../touchui/dist/components/button.js + 1 modules
var components_button = __webpack_require__(114);

// EXTERNAL MODULE: ../touchui/dist/components/image.js
var components_image = __webpack_require__(46);

// EXTERNAL MODULE: ../touchui/dist/components/text.js
var components_text = __webpack_require__(76);

// EXTERNAL MODULE: ../touchui/dist/components/col.js
var col = __webpack_require__(47);

// EXTERNAL MODULE: ../touchui/dist/components/row.js
var row = __webpack_require__(48);

// EXTERNAL MODULE: ../touchui/dist/components/tab-view-body.js
var tab_view_body = __webpack_require__(117);

// EXTERNAL MODULE: ../touchui/dist/components/tab-view-header.js
var tab_view_header = __webpack_require__(118);

// EXTERNAL MODULE: ../touchui/dist/components/view.js
var view = __webpack_require__(44);

// EXTERNAL MODULE: ../touchui/dist/components/tab-view.js
var tab_view = __webpack_require__(119);

// EXTERNAL MODULE: ../touchui/dist/components/page.js + 1 modules
var components_page = __webpack_require__(45);

// EXTERNAL MODULE: ./src/api.js
var api = __webpack_require__(27);

// EXTERNAL MODULE: ../_vant@1.6.2@vant/es/index.js + 111 modules
var es = __webpack_require__(77);

// EXTERNAL MODULE: ../vue/dist/vue.esm.js
var vue_esm = __webpack_require__(1);

// EXTERNAL MODULE: ../_vant@1.6.2@vant/lib/card/style/index.js
var style = __webpack_require__(121);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./src/static/utils/socket.js

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
                url: api["c" /* wsUrl */],
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
                            that.fetch(api["a" /* Api */].bind,  {
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
                                that.fetch(api["a" /* Api */].message + '/' + data.message_id, {
                                    method:'PUT',
                                    data: { status:1 },
                                    header: {
                                        'content-type': 'application/x-www-form-urlencoded'
                                    }
                                }).then((response) => {
                                    if(response == 'success'){
                                        newValue.order.splice(index,1)
                                        if(that.$route.path=='/pages/index'){
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
            },
            deep: true
        }
    }
  }
  /* harmony default export */ var socket = (webSocket);
  
// CONCATENATED MODULE: ../babel-loader/lib!../touchui-pre-loader/src/script-loader.js!../touchui-loader/lib/selector.js?type=script&index=0!./src/pages/index.ui
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
//


















vue_esm["a" /* default */].use(es["a" /* Card */]);
/* harmony default export */ var pages = __webpack_exports__["default"] = ({
  components: {
    UiPage: components_page["a" /* default */],
    UiTabView: tab_view["a" /* default */],
    UiView: view["a" /* default */],
    UiTabViewHeader: tab_view_header["a" /* default */],
    UiTabViewBody: tab_view_body["a" /* default */],
    UiRow: row["a" /* default */],
    UiCol: col["a" /* default */],
    UiText: components_text["a" /* default */],
    UiImage: components_image["a" /* default */],
    UiButton: components_button["a" /* default */],
    UiPopup: popup["a" /* default */],
    UiIcon: icon["a" /* default */]
  },

  config: {
    navigationBarTitleText: '首页',
    backgroundColor: '#F4F4F4',
    navigationBarTextStyle: 'black'
  },
  name: 'indexComponent',
  data: function data() {
    return {
      moreImg: false,
      height: ui.DEFAULT_CONTENT_HEIGHT,
      apiUrl: api["b" /* baseUrl */],
      items1: [],
      items2: [],
      items3: [],
      top: 0,
      index: 0,
      bottom: 30,
      proportion: 0,
      // 下拉刷新（初始状态）
      state: 1,
      showLoading: false,
      imgSrc: __webpack_require__(122),
      currentPage: {
        items1: 1,
        items2: 1,
        items3: 1
      },
      currentStatus: 1, //订单状态 1：已下单
      currentPartitions: []
    };
  },

  methods: {
    showMore: function showMore(partitions) {
      this.moreImg = true;
      this.currentPartitions = partitions;
    },
    handleShow: function handleShow(key) {
      this[key] = false;
    },
    handleChange: function handleChange(index) {
      this.index = index;
    },
    handleBegin: function handleBegin(_ref) {
      var distance = _ref.distance,
          direction = _ref.direction;

      this.proportion = distance / 94;
      // 拉满94px
      if (this.proportion >= 1) {
        if (this.state === 1 && direction === 'down') {
          // 释放刷新
          this.state = 2;
        }
      } else {
        this.state = 1;
      }
    },
    getOrdersData: function getOrdersData(status) {
      var limit = 50;
      var that = this;
      var page = this.currentPage['items' + status];
      var mod = 0;
      this.fetch(api["a" /* Api */].order, {
        method: 'GET',
        data: { page: page, limit: limit, status: status }
      }).then(function (response) {
        that.state = 3;
        that['items' + status] = response.list;
        ++that.currentPage['items' + status];
      }).catch(function (error) {
        console.log(error);
      });
    },
    handleActive: function handleActive() {
      this.getOrdersData(this.currentStatus);
    },
    handleAfter: function handleAfter(flag) {
      this.proportion = 0;
      if (flag) {
        // 刷新成功...
        this.state = 4;
        this.top -= 10;
      }
    },
    handleLoadMore: function handleLoadMore() {
      var _this = this;

      window.setTimeout(function () {
        _this.bottom += 10;
        _this.getOrdersData(_this.currentStatus);
      }, 1500);
    },
    getSpecValue: function getSpecValue(specValue) {
      var spec = JSON.parse(specValue);
      var str = spec.join(' ');
      return str;
    }
  },
  created: function created() {
    this.getOrdersData(1);
    this.getOrdersData(2);
    this.getOrdersData(3);
  },
  mounted: function mounted() {
    //首屏页面需要在mounted中延时才能调用框架api，其他页面不需要延时
    setTimeout(function () {
      //关闭app启动图
      ui.closeSplashscreen();
    }, 1000);
  },

  computed: {},
  mixins: [socket]
});

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ui-page', {
    staticClass: "page-cbbdac"
  }, [_c('ui-tab-view', {
    attrs: {
      "ink-bar": "",
      "on-begin": _vm.handleBegin,
      "on-active": _vm.handleActive,
      "on-after": _vm.handleAfter,
      "pull-down-distance": "94"
    },
    on: {
      "change": _vm.handleChange
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.proportion),
      expression: "proportion"
    }],
    staticClass: "pull-down-content ui-view",
    slot: "pull-down"
  }, [(_vm.proportion < 1) ? _c('div', {
    staticClass: "img-layer ui-view"
  }, [_c('div', {
    staticClass: "img_content ui-view",
    style: ({
      height: _vm.proportion * 100 + 'px'
    })
  })]) : _c('div', {
    staticClass: "img-layer ui-view"
  }, [(_vm.state === 2) ? _c('div', {
    staticClass: "mt-ready ui-view"
  }) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 3 || _vm.state === 4),
      expression: "state === 3 || state === 4"
    }],
    staticClass: "mt-loading ui-view"
  })])]), _vm._v(" "), _c('template', {
    slot: "header"
  }, [_c('ui-tab-view-header', [_vm._v("已下单")]), _vm._v(" "), _c('ui-tab-view-header', [_vm._v("制作中")]), _vm._v(" "), _c('ui-tab-view-header', [_vm._v("取餐中")])], 1), _vm._v(" "), _c('template', {
    slot: "body"
  }, [_c('ui-tab-view-body', {
    attrs: {
      "height": _vm.height - 40,
      "enable-pull-down-refresh": "",
      "enable-reach-bottom-load": "",
      "on-load-more": _vm.handleLoadMore
    }
  }, [_c('div', {
    staticClass: "ui-view"
  }, [_c('div', {
    staticClass: "content_list ui-view"
  }, _vm._l((_vm.items1), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "ui-view",
      class: {
        'grey-bg': index % 2 == 0
      }
    }, [_c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col",
      style: ({})
    }, [_c('div', {
      staticClass: "ui-col-content"
    }, [_c('ui-text', {
      staticClass: "titlename"
    }, [_vm._v("订单编号： " + _vm._s(item.order_sn))])], 1)])]), _vm._v(" "), _c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col",
      style: ({})
    }, [_c('div', {
      staticClass: "ui-col-content"
    }, [_c('ui-text', {
      staticClass: "titlename"
    }, [_vm._v("桌号： " + _vm._s(item.desk.name))])], 1)])]), _vm._v(" "), _c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col",
      style: ({})
    }, [_c('div', {
      staticClass: "ui-col-content"
    }, [_c('ui-text', {
      staticClass: "titlename"
    }, [_vm._v("用户电话： " + _vm._s(item.member.member_mobile))])], 1)])]), _vm._v(" "), _c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_vm._l((item.partitions), function(item1, index1) {
      return (index1 <= 2) ? _c('div', {
        key: index1,
        staticClass: "imgbox ui-col",
        style: ({
          'padding-left': '10px',
          'padding-right': '10px'
        })
      }, [_c('div', {
        staticClass: "ui-col-content"
      }, [_c('ui-image', {
        attrs: {
          "width": "100%",
          "height": "100%",
          "src": _vm.apiUrl + item1.image,
          "mode": "scaleToFill"
        }
      })], 1)]) : _vm._e()
    }), _vm._v(" "), (item.partitions.length > 3) ? _c('div', {
      staticClass: "ui-col",
      style: ({
        'padding-left': '10px',
        'padding-right': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col-content"
    }, [_c('ui-text', {
      staticClass: "more",
      attrs: {
        "block": ""
      },
      nativeOn: {
        "tap": function($event) {
          _vm.showMore(item.partitions)
        }
      }
    }, [_vm._v("...")])], 1)]) : _vm._e()], 2), _vm._v(" "), _c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col ui-col-align-right align-right valign-bottom",
      style: ({
        'padding-right': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col-content align-right valign-bottom"
    }, [_c('div', {
      staticClass: "ui-view"
    }, [_c('ui-button', {
      attrs: {
        "type": "primary",
        "size": "mini",
        "plain": true
      }
    }, [_vm._v("开始烹制")])], 1)])])])])
  }))])]), _vm._v(" "), _c('ui-tab-view-body', {
    attrs: {
      "height": _vm.height - 40,
      "enable-pull-down-refresh": "",
      "enable-reach-bottom-load": "",
      "on-load-more": _vm.handleLoadMore
    }
  }, [_c('div', {
    staticClass: "ui-view"
  }, [_c('div', {
    staticClass: "content_list ui-view"
  }, _vm._l((_vm.items2), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "ui-view",
      class: {
        'grey-bg': index % 2 == 0
      }
    }, [_c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col",
      style: ({})
    }, [_c('div', {
      staticClass: "ui-col-content"
    }, [_c('ui-text', {
      staticClass: "titlename"
    }, [_vm._v("订单编号： " + _vm._s(item.order_sn))])], 1)])]), _vm._v(" "), _c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col",
      style: ({})
    }, [_c('div', {
      staticClass: "ui-col-content"
    }, [_c('ui-text', {
      staticClass: "titlename"
    }, [_vm._v("桌号： " + _vm._s(item.desk.name))])], 1)])]), _vm._v(" "), _c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col",
      style: ({})
    }, [_c('div', {
      staticClass: "ui-col-content"
    }, [_c('ui-text', {
      staticClass: "titlename"
    }, [_vm._v("用户电话： " + _vm._s(item.member.member_mobile))])], 1)])]), _vm._v(" "), _c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_vm._l((item.partitions), function(item1, index1) {
      return (index1 <= 2) ? _c('div', {
        key: index1,
        staticClass: "imgbox ui-col",
        style: ({
          'padding-left': '10px',
          'padding-right': '10px'
        })
      }, [_c('div', {
        staticClass: "ui-col-content"
      }, [_c('ui-image', {
        attrs: {
          "width": "100%",
          "height": "100%",
          "src": _vm.apiUrl + item1.image,
          "mode": "scaleToFill"
        }
      })], 1)]) : _vm._e()
    }), _vm._v(" "), (item.partitions.length > 3) ? _c('div', {
      staticClass: "ui-col",
      style: ({
        'padding-left': '10px',
        'padding-right': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col-content"
    }, [_c('ui-text', {
      staticClass: "more",
      attrs: {
        "block": ""
      },
      nativeOn: {
        "tap": function($event) {
          _vm.showMore(item.partitions)
        }
      }
    }, [_vm._v("...")])], 1)]) : _vm._e()], 2), _vm._v(" "), _c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col ui-col-align-right align-right valign-bottom",
      style: ({
        'padding-right': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col-content align-right valign-bottom"
    }, [_c('div', {
      staticClass: "ui-view"
    }, [_c('ui-button', {
      attrs: {
        "type": "primary",
        "size": "mini",
        "plain": true
      }
    }, [_vm._v("通知取餐")])], 1)])])])])
  }))])]), _vm._v(" "), _c('ui-tab-view-body', {
    attrs: {
      "height": _vm.height - 40,
      "enable-pull-down-refresh": "",
      "enable-reach-bottom-load": "",
      "on-load-more": _vm.handleLoadMore
    }
  }, [_c('div', {
    staticClass: "ui-view"
  }, [_c('div', {
    staticClass: "content_list ui-view"
  }, _vm._l((_vm.items3), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "ui-view",
      class: {
        'grey-bg': index % 2 == 0
      }
    }, [_c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col",
      style: ({})
    }, [_c('div', {
      staticClass: "ui-col-content"
    }, [_c('ui-text', {
      staticClass: "titlename"
    }, [_vm._v("订单编号： " + _vm._s(item.order_sn))])], 1)])]), _vm._v(" "), _c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col",
      style: ({})
    }, [_c('div', {
      staticClass: "ui-col-content"
    }, [_c('ui-text', {
      staticClass: "titlename"
    }, [_vm._v("桌号： " + _vm._s(item.desk.name))])], 1)])]), _vm._v(" "), _c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col",
      style: ({})
    }, [_c('div', {
      staticClass: "ui-col-content"
    }, [_c('ui-text', {
      staticClass: "titlename"
    }, [_vm._v("用户电话： " + _vm._s(item.member.member_mobile))])], 1)])]), _vm._v(" "), _c('div', {
      staticClass: "ui-row",
      style: ({
        'margin-top': '10px',
        'margin-bottom': '10px'
      })
    }, [_vm._l((item.partitions), function(item1, index1) {
      return (index1 <= 2) ? _c('div', {
        key: index1,
        staticClass: "imgbox ui-col",
        style: ({
          'padding-left': '10px',
          'padding-right': '10px'
        })
      }, [_c('div', {
        staticClass: "ui-col-content"
      }, [_c('ui-image', {
        attrs: {
          "width": "100%",
          "height": "100%",
          "src": _vm.apiUrl + item1.image,
          "mode": "scaleToFill"
        }
      })], 1)]) : _vm._e()
    }), _vm._v(" "), (item.partitions.length > 3) ? _c('div', {
      staticClass: "ui-col",
      style: ({
        'padding-left': '10px',
        'padding-right': '10px'
      })
    }, [_c('div', {
      staticClass: "ui-col-content"
    }, [_c('ui-text', {
      staticClass: "more",
      attrs: {
        "block": ""
      },
      nativeOn: {
        "tap": function($event) {
          _vm.showMore(item.partitions)
        }
      }
    }, [_vm._v("...")])], 1)]) : _vm._e()], 2)])
  }))])])], 1)], 2), _vm._v(" "), _c('ui-popup', {
    staticClass: "page-cbbdac",
    attrs: {
      "position": "bottom",
      "background": "transparent"
    },
    model: {
      value: (_vm.moreImg),
      callback: function($$v) {
        _vm.moreImg = $$v
      },
      expression: "moreImg"
    }
  }, [_c('div', {
    staticClass: "popup5 ui-view"
  }, [_c('div', {
    staticClass: "ui-row ui-row-border-bottom",
    style: ({
      'height': '40px'
    }),
    attrs: {
      "height": "40"
    }
  }, [_c('div', {
    staticClass: "ui-col valign-middle",
    style: ({
      'padding-left': '20px'
    })
  }, [_c('div', {
    staticClass: "ui-col-content valign-middle",
    staticStyle: {
      "height": "40px"
    }
  }, [_vm._v("菜单")])]), _vm._v(" "), _c('div', {
    staticClass: "ui-col ui-col-align-center align-center valign-middle",
    style: ({
      'flex': '0 0 40px'
    }),
    on: {
      "tap": function($event) {
        _vm.handleShow('moreImg')
      }
    }
  }, [_c('div', {
    staticClass: "ui-col-content align-center valign-middle",
    staticStyle: {
      "height": "40px"
    }
  }, [_c('ui-icon', {
    attrs: {
      "name": "close",
      "type": "close",
      "size": "18",
      "color": "#FC8950"
    }
  })], 1)])]), _vm._v(" "), _vm._l((_vm.currentPartitions), function(item, index) {
    return _c('van-card', {
      key: index,
      attrs: {
        "title": item.name,
        "thumb": _vm.apiUrl + item.image
      }
    }, [_c('div', {
      slot: "desc"
    }, [(item.sku) ? _c('ui-text', {
      attrs: {
        "block": ""
      }
    }, [_vm._v(_vm._s(_vm.getSpecValue(item.sku.specValue)))]) : _vm._e(), _vm._v(" "), _c('ui-text', {
      attrs: {
        "block": ""
      }
    }, [_vm._v(_vm._s(item.message))])], 1)])
  })], 2)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(209)
  __webpack_require__(210)
}
var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(211),
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

/***/ 209:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_touchui_dist_components_page__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vant_lib_tree_select_style__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vant_lib_tree_select_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vant_lib_tree_select_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vant__ = __webpack_require__(77);
//
//
//
//
//
//






__WEBPACK_IMPORTED_MODULE_2_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_vant__["b" /* TreeSelect */]);
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
  created: function created() {}
});

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 214:
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

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(216)
  __webpack_require__(217)
}
var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(218),
  /* template */
  __webpack_require__(220),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 216:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_touchui_dist_components_image__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_touchui_dist_components_badge__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_touchui_dist_components_icon__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_touchui_dist_components_view__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_touchui_dist_components_col__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_touchui_dist_components_row__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_touchui_dist_components_nav_bar__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_touchui_dist_components_page__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_js__ = __webpack_require__(27);
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
    UiPage: __WEBPACK_IMPORTED_MODULE_7_touchui_dist_components_page__["a" /* default */],
    UiNavBar: __WEBPACK_IMPORTED_MODULE_6_touchui_dist_components_nav_bar__["a" /* default */],
    UiRow: __WEBPACK_IMPORTED_MODULE_5_touchui_dist_components_row__["a" /* default */],
    UiCol: __WEBPACK_IMPORTED_MODULE_4_touchui_dist_components_col__["a" /* default */],
    UiView: __WEBPACK_IMPORTED_MODULE_3_touchui_dist_components_view__["a" /* default */],
    UiIcon: __WEBPACK_IMPORTED_MODULE_2_touchui_dist_components_icon__["a" /* default */],
    UiBadge: __WEBPACK_IMPORTED_MODULE_1_touchui_dist_components_badge__["a" /* default */],
    UiImage: __WEBPACK_IMPORTED_MODULE_0_touchui_dist_components_image__["a" /* default */]
  },

  config: {
    navigationStyle: 'custom',
    navigationBarTextStyle: 'white',
    backgroundColor: '#F4F4F4'
  },
  data: function data() {
    return {
      portraitUrl: __webpack_require__(219),
      mobile: ui.getStorageSync('mobile') || '立即登录'
    };
  },

  methods: {
    goLogin: function goLogin() {
      // let _self=this
      // ui.showPrompt({
      //   title: '登录',
      //   placeholder: '请输入您的电话',
      //   confirmButtonText: '登录',
      //   cancelButtonText: '取消',
      //   success: (result) => {
      //       ui.request({
      //         url: baseUrl + Api.login.path,
      //         method: 'POST',
      //         data: {
      //             mobile: result.value
      //         },
      //         header: {
      //             'content-type': 'application/x-www-form-urlencoded'
      //         },
      //         success: function(res){
      //             if(res.data.code=='200'){
      //                 ui.setStorageSync('token',res.data.data);
      //                 ui.setStorageSync('mobile',result.value);
      //                 _self.mobile=result.value
      //                 _self.establish()
      //                 ui.showToast({ title: '登录成功！', icon: 'success' })
      //             }
      //             if(res.data.code=='400'){
      //                 console.log(res.data)
      //             }
      //         },
      //         fail: function(res){
      //           console.log(res)
      //         }
      //     })
      //   }
      // })
      var that = this;
      __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 227)).then(function (content) {
        ui.showDialog({
          title: '登录',
          content: content,
          statusBarColor: 'black',
          data: {},
          // 接收ui.hideDialog回传的数据
          onHide: function onHide(data) {
            ui.setStorageSync('authKey', data.authKey);
            ui.setStorageSync('sessionId', data.sessionId);
          }
        });
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/portrait_bg.d8ab821.png";

/***/ }),

/***/ 220:
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
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-tab-page-container page-f9321b"
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
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyNkOGQ4ZDgnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+DQo="

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyM2YzZjNmMnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+DQo="

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return wsUrl; });
var Api = {
    login: 'admin/base/login',
    bind: 'admin/users/bind',
    order: 'order/orders',
    message: 'order/message'
};
var baseUrl = 'http://192.168.1.100/';
var wsUrl = 'ws://192.168.1.100:7272';


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(197)
  __webpack_require__(198)
}
var Component = __webpack_require__(25)(
  /* script */
  __webpack_require__(199),
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


/***/ })

},[123]);