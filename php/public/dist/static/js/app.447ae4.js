webpackJsonp([3],{150:function(e,t){e.exports={"zh-cn":{"ui.alert.button_text":"确定","ui.confirm.confirm_text":"确定","ui.confirm.cancel_text":"取消","ui.prompt.confirm_text":"确定","ui.prompt.cancel_text":"取消","ui.picker.confirm_text":"确定","ui.picker.cancel_text":"取消","ui.actionsheet.cancel_text":"取消","ui.loading.text":"加载中...","ui.cascader.loading_text":"加载中","ui.cascader.please_select":"请选择","ui.keyboard.space_text":"空格","ui.keyboard.complete_text":"完成","ui.countdown.done_text":"已结束","ui.requeststatus.loading":"加载中...","ui.requeststatus.nomore":"没有更多了...","ui.requeststatus.offline":"网络异常，点击刷新","ui.requeststatus.timeout":"请求超时，点击刷新","ui.requeststatus.error":"请求失败，点击刷新","ui.requeststatus.empty":"没有数据，点击刷新","ui.pulldownrefresh.pull":"下拉刷新","ui.pulldownrefresh.release":"释放刷新","ui.pulldownrefresh.refreshing":"正在刷新...","ui.pulldownrefresh.success":"刷新成功","ui.pulldownrefresh.cancel":"取消下拉","ui.pullupload.pull_load_more":"上拉加载更多","ui.pullupload.pull":"上拉加载","ui.pullupload.release":"释放加载","ui.pullupload.refreshing":"正在加载...","ui.pullupload.success":"加载成功","ui.pullupload.cancel":"取消加载","ui.smscode.getcode":"获取短信验证码","ui.smscode.run":"{%s}秒后重新获取","ui.smscode.reset":"重新获取验证码","ui.smscode.placeholder":"请输入验证码","ui.table.request_failed":"请求失败","ui.table.refresh":"刷新","ui.table.timeout":"网络超时","ui.table.offline":"网络无法连接，请检查您的网络","ui.table.empty":"结果为空","ui.table.need_login":"请先登录","ui.table.loading":"正在加载...","ui.cascader.select":"请选择","ui.calendar.head":"日 一 二 三 四 五 六","ui.calendar.yearsplit":"年","ui.calendar.monthsplit":"月","ui.countdown.over":"已结束"},en:{"ui.alert.button_text":"OK","ui.confirm.confirm_text":"Confirm","ui.confirm.cancel_text":"Cancel","ui.prompt.confirm_text":"Confirm","ui.prompt.cancel_text":"Cancel","ui.picker.confirm_text":"Confirm","ui.picker.cancel_text":"Cancel","ui.actionsheet.cancel_text":"Cancel","ui.loading.text":"Loading...","ui.cascader.loading_text":"Loading","ui.cascader.please_select":"Please select","ui.keyboard.space_text":"Space","ui.keyboard.complete_text":"Complete","ui.countdown.done_text":"Done","ui.requeststatus.loading":"Loading...","ui.requeststatus.nomore":"No more data...","ui.requeststatus.offline":"Network error, tap to refresh","ui.requeststatus.timeout":"Network error, tap to refresh","ui.requeststatus.error":"Request failed, tap to refresh","ui.requeststatus.empty":"No data, tap to refresh","ui.pulldownrefresh.pull":"Pull refresh","ui.pulldownrefresh.release":"Release to refresh","ui.pulldownrefresh.refreshing":"Refreshing...","ui.pulldownrefresh.success":"Refresh success","ui.pulldownrefresh.cancel":"Cancel pull","ui.pullupload.pull_load_more":"Pull to load more","ui.pullupload.pull":"Pull load","ui.pullupload.release":"Release to load","ui.pullupload.refreshing":"Loading...","ui.pullupload.success":"Load success","ui.pullupload.cancel":"Cancel load","ui.smscode.getcode":"Get code","ui.smscode.run":"{%s} seconds","ui.smscode.reset":"Reset","ui.smscode.placeholder":"Please input code","ui.table.request_failed":"Request failed","ui.table.refresh":"Refresh","ui.table.timeout":"Timeout","ui.table.offline":"Can't connect to network","ui.table.empty":"No results","ui.table.need_login":"Please login first","ui.table.loading":"Loading...","ui.cascader.select":"Please Select","ui.calendar.head":"Sun Mon Tue Wen Thu Fri Sat","ui.calendar.yearsplit":"/","ui.calendar.monthsplit":"","ui.countdown.over":"Time's up"}}},157:function(e,t,a){function i(e){a(158),a(160)}var n=a(28)(a(161),a(168),i,null,null);e.exports=n.exports},158:function(e,t){},160:function(e,t){},161:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(20),n=a.n(i),s=a(14),r=a.n(s),l=a(162),o=a(39),c=a(88),u=a(89),d=a(60),p=a(165),h=a(166),g=a(40);t.default={components:{UiView:g.a,UiSlideMenu:h.a,UiText:p.a,UiNavBar:d.a,UiRow:u.a,UiCol:c.a,UiIcon:o.a,UiTabBar:l.a},config:{pages:["pages/index","pages/detail"],theme:{"theme-color":"#3399ff"},window:{scrollType:"div",navigationBarBackgroundColor:"#ffffff",navigationBarTextStyle:"black",navigationBarBorderColor:"rgba(231, 231, 231, 0.6)"},tabBar:{color:"#7a7e83",selectedColor:"#39f",borderColor:"rgba(231, 231, 231, 0.6)",backgroundColor:"#fff",list:[{pagePath:"pages/index",iconName:"home",text:"首页"},{pagePath:"pages/user",iconName:"user",text:"我的"}]},networkBaseUrl:""},data:function(){return{globalData:{},WIN_WIDTH:ui.WIN_WIDTH,tabIndex:0,tabBarList:[],navStyle:{},tabBar:{},tabBarHeight:56,isApp:ui.IS_APP,headerHeight:ui.DEFAULT_HEADER_HEIGHT,paths:[],barHeight:ui.STATUS_BAR_HEIGHT,showSlideMenu:!1}},computed:{navigationBarVisible:function(){return"custom"!==this.winConfig.navigationStyle},showBack:function(){var e=this.paths[0];return this.tabBar&&this.tabBar.paths?this.tabBar.paths.indexOf(e)<0:e!==this.$route.path},winConfig:function(){var e=this.$router.options.window,t=r()({},e,this.pageConfig),a=t.navigationBarTextStyle||"white",i=document.body.getAttribute("scroll-type");return this.navStyle={backgroundColor:t.navigationBarBackgroundColor,color:a,borderBottom:"1px solid "+t.navigationBarBorderColor,backgroundImage:t.navigationBarBackgroundGradient,position:"body"===i?"fixed":"absolute"},this.navStyle.backgroundColor&&(this.navStyle.backgroundImage="none"),t.navigationBarBorderColor?this.navStyle.borderBottom="1px solid "+t.navigationBarBorderColor:this.navStyle.borderBottom="0",t},isTabBar:function(){return this.tabBarList&&this.tabBarList.length>0},tabBarStyle:function(){var e={};this.navigationBarVisible&&"top"===this.tabBar.position&&(e.top=this.headerHeight+"px");var t=document.body.getAttribute("scroll-type");return e.position="body"===t?"fixed":"absolute",e},bottom:function(){return this.isTabBar?this.tabBarHeight+"px":0},pageConfig:function(){return this.isTabBar?this.tabBarList[this.tabIndex].pageConfig:this.$route.meta.pageConfig||window.__$uiPageConfig}},watch:{"$route.path":function(e){this.handleIosGesture(),this.initTab(),this.initBodyStyle()}},created:function(){var e=this;this.initTab(),this.initPaths(),this.$nextTick(function(){e.handleIosGesture()})},methods:{handleNavIconTap:function(){this.showSlideMenu=!this.showSlideMenu},initTab:function(){this.tabBar=this.getTabBar(),this.tabBarList=this.tabBar.list,this.tabBar.paths&&(this.tabIndex=this.tabBar.paths.indexOf(this.$route.path))},initPaths:function(){var e=this.$router.options.routes;this.paths=e.map(function(e){return e.path})},initBodyStyle:function(){this.winConfig&&this.winConfig.backgroundColor&&(document.body.style.backgroundColor=this.winConfig.backgroundColor)},handleIosGesture:function(){ui.IS_IOS&&ui.setPagePopGesture&&ui.setPagePopGesture({openPagePopGesture:!this.pageConfig.disableIosGesture})},handleTabBeforeChange:function(e){e.id,e.index;(0,e.next)()},handleTabChange:function(e){e.id,e.index},handleBack:function(){ui.navigateBack()},getTabBar:function(){for(var e=[this.$router.options.tabBar].concat(n()(this.$router.options.pageTabBars)),t=0;t<e.length;t++)if(e[t].paths&&e[t].paths.indexOf(this.$route.path)>-1)return e[t];return{}}},mounted:function(){}}},168:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ui-view",attrs:{id:"ui-app"}},[a("ui-slide-menu",{attrs:{width:"280",threshold:"30",touch:e.pageConfig.touchSlideMenu},model:{value:e.showSlideMenu,callback:function(t){e.showSlideMenu=t},expression:"showSlideMenu"}},[a("div",{staticClass:"menu ui-view",slot:"menu"},[a("ui-text",{staticStyle:{color:"#fff",margin:"10px"},attrs:{block:""}},[e._v("侧滑菜单")])],1),e._v(" "),a("div",{staticClass:"ui-view",slot:"panel"},[e.pageConfig?a("ui-nav-bar",{directives:[{name:"show",rawName:"v-show",value:e.navigationBarVisible,expression:"navigationBarVisible"}],staticClass:"page-6a9c68",style:e.navStyle},[a("div",{staticClass:"ui-row",style:{}},[a("div",{staticClass:"ui-col",style:{flex:"0 0 80px"}},[a("div",{staticClass:"ui-col-content"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.showBack,expression:"showBack"}],staticClass:"back",on:{tap:e.handleBack}},[a("ui-icon",{attrs:{type:"arrow-left","font-size":"24"}}),e._v("返回\n          ")],1),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.showBack,expression:"!showBack"}],staticClass:"back",on:{tap:e.handleNavIconTap}},[a("ui-icon",{attrs:{type:"list",color:"#2B333B",size:"16"}})],1)])]),e._v(" "),a("div",{staticClass:"nav-bar-center ui-col ui-col-align-center align-center",style:{flex:"0 0 "+(e.WIN_WIDTH-160)+"px"},attrs:{"content-direction":"row"}},[a("div",{staticClass:"ui-col-content align-center flex-row"},[a("div",{staticClass:"nav-bar-center-loading ui-view",staticStyle:{display:"none"}}),e._v(" "),a("span",{staticClass:"nav-bar-center-text"},[e._v(e._s(e.$t(e.winConfig.navigationBarTitleText)))])])]),e._v(" "),a("div",{staticClass:"ui-col",style:{flex:"0 0 80px"}},[a("div",{staticClass:"ui-col-content"})])])]):e._e(),e._v(" "),a("keep-alive",[!e.isApp&&e.pageConfig.cache?a("router-view",{staticClass:"router-view"}):e._e()],1),e._v(" "),e.isApp||!e.pageConfig.cache?a("router-view",{staticClass:"router-view"}):e._e(),e._v(" "),e.isTabBar?a("ui-tab-bar",{style:e.tabBarStyle,attrs:{id:e.tabBar.id,"group-id":e.tabBar.groupId,"icon-size":e.tabBar.iconSize,"font-size":e.tabBar.fontSize,position:e.tabBar.position,list:e.tabBarList,paths:e.tabBar.paths,"background-color":e.tabBar.backgroundColor,"border-color":e.tabBar.borderColor,color:e.tabBar.color,"selected-color":e.tabBar.selectedColor},on:{beforechange:e.handleTabBeforeChange,change:e.handleTabChange},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}}):e._e()],1)])],1)},staticRenderFns:[]}},169:function(e,t){},170:function(e,t){},171:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(20),n=a.n(i),s=a(6),r=a.n(s),l=a(172),o=a.n(l),c=a(179),u=a.n(c);t.default={components:{Page0:o.a,Page1:u.a},data:function(){return{tabIndex:-1,cachedPages:[]}},watch:{tabIndex:function(e,t){this.setPageVisibility(),this.handlePageEvent(e,t)}},created:function(){var e=this;this.initTabIndex(),this.$EventService.on("ui-tab-change-41993a5",function(t){e.tabIndex=t})},methods:{setPageVisibility:function(){var e=this;this.$children.forEach(function(t,a){var i=t.$el.classList;if(i){var n=e.findPageClass(i);n&&e.$nextTick(function(){r()(document.querySelectorAll(n)).forEach(function(t){t.__vue__&&t.__vue__.isDialog||(t.style.visibility=a===e.tabIndex?"visible":"hidden")})})}})},handlePageEvent:function(e,t){var a=this,i=this.$children[e];if(!i.$children)throw new Error("请将ui-page作为页面的根元素");var n=ui.findTabPageInstance(i),s=function(){if(n){n.pageLoad;n.showCustomNavBar=!0,n.isTabBarActive=!0,n.triggerTabLoad(),a.$nextTick(function(){var e=a.$children[t];if(e){var i=ui.findTabPageInstance(e);i.showCustomNavBar=!1,i.isTabBarActive=!1}})}};n?s():window.setTimeout(function(){n=i.$children[0],s()},200)},findPageClass:function(e){for(var t=0;t<e.length;t++)if(e[t].match(/page-\w{6}/))return"."+e[t]},initTabIndex:function(){for(var e=[this.$router.options.tabBar].concat(n()(this.$router.options.pageTabBars)),t=void 0,a=0;a<e.length;a++)e[a].paths.indexOf(this.$route.path)>-1&&(t=e[a]);t&&t.paths&&(this.tabIndex=t.paths.indexOf(this.$route.path))}}}},172:function(e,t,a){function i(e){a(173),a(174)}var n=a(28)(a(175),a(178),i,null,null);e.exports=n.exports},173:function(e,t){},174:function(e,t){},175:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(92),n=a(176),s=a(40),r=a(62);t.default={components:{UiPage:r.a,UiView:s.a,UiSlider:n.a,UiButton:i.a},config:{navigationBarTitleText:"首页",backgroundColor:"#F4F4F4",navigationBarTextStyle:"black"},data:function(){return{buttonText:"界面跳转",isShow:!1}},methods:{sliderShow:function(){this.isShow=!0},navHandle:function(){ui.navigateTo({url:"/pages/detail"})}},mounted:function(){setTimeout(function(){ui.closeSplashscreen()},1e3)}}},177:function(e,t,a){"use strict";var i={"pull-down":"pull-down-content","pull-up":"pull-up-content"},n=(Number,Number,String,{"pull-down":"pull-down-content","pull-up":"pull-up-content"}),s={props:{state:{type:Number},translate:{type:Number},type:String},computed:{classes:function(){return n[this.type]}},data:function(){return{turn:null,svg:null,background:null,primary:null,secondary:null,selfTranslate:0}},mounted:function(){this.turn=this.$el.querySelector(".material-progress-circular"),this.svg=this.$el.querySelector(".progress-circular"),this.background=this.$el.querySelector(".progress-circular__background"),this.primary=this.$el.querySelector(".progress-circular__primary"),this.secondary=this.$el.querySelector(".progress-circular__secondary")},watch:{state:function(){this.handleProgress()},translate:function(e){this.handleProgress()}},methods:{handleProgress:function(){if(1===this.state||2===this.state){this.$el.style.webkitTransition="none";var e=Math.abs(this.translate)/84,t=Math.floor(252*e);this.turn.style.transform="rotate("+e+"turn)",t>=252&&(t=252),this.primary.style.strokeDasharray=t+"%, 251.32%",this.primary.style.webkitTransition="none"}else 3===this.state||4===this.state?this.turn.style.tranform="rotate(1turn)":this.primary.style.strokeDasharray="0%, 251.32%"}}},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"material-pull-hook",class:e.classes},[a("div",{staticClass:"pull-hook-progress"},[a("div",{staticClass:"material-progress-circular"},[a("svg",{staticClass:"progress-circular",class:{"progress-circular--indeterminate":e.state>=3}},[a("circle",{staticClass:"progress-circular__background",class:{"progress-circular--indeterminate__background":e.state>=3}}),e._v(" "),a("circle",{staticClass:"progress-circular__secondary",class:{"progress-circular--indeterminate__secondary":e.state>=3},staticStyle:{display:"none"}}),e._v(" "),a("circle",{staticClass:"progress-circular__primary",class:{"progress-circular--indeterminate__primary":e.state>=3}})])])])])},l=[],o={render:r,staticRenderFns:l},c=o,u=a(91),d=u(s,c,!1,null,null,null),p=d.exports,h={"pull-down":{1:"ui.pulldownrefresh.pull",2:"ui.pulldownrefresh.release",3:"ui.pulldownrefresh.refreshing",4:"ui.pulldownrefresh.success",5:"ui.pulldownrefresh.cancel"},"pull-up":{0:"ui.pullupload.pull_load_more",1:"ui.pullupload.pull",2:"ui.pullupload.release",3:"ui.pullupload.refreshing",4:"ui.pullupload.success",5:"ui.pullupload.cancel"}},g={"pull-down":{1:"arrow down",2:"arrow up",3:"loading",4:"none"},"pull-up":{1:"arrow up",2:"arrow down",3:"loading",4:"none"}},f=(String,Number,Number,String,{"pull-down":{1:"ui.pulldownrefresh.pull",2:"ui.pulldownrefresh.release",3:"ui.pulldownrefresh.refreshing",4:"ui.pulldownrefresh.success",5:"ui.pulldownrefresh.cancel"},"pull-up":{0:"ui.pullupload.pull_load_more",1:"ui.pullupload.pull",2:"ui.pullupload.release",3:"ui.pullupload.refreshing",4:"ui.pullupload.success",5:"ui.pullupload.cancel"}}),v={"pull-down":{1:"arrow down",2:"arrow up",3:"loading",4:"none"},"pull-up":{1:"arrow up",2:"arrow down",3:"loading",4:"none"}},y={props:{type:{type:String,default:"pull-down"},state:{type:Number,default:0},translate:{type:Number,default:0},pullStyle:{type:String,default:"ios"}},components:{MaterialPullHook:p},computed:{text:function(){return this.$t(f[this.type][this.state])},contentClasses:function(){return[this.type+"-content"]},iconClasses:function(){return[this.type+"-icon",v[this.type][this.state]]}}},m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return"ios"===e.pullStyle?a("div",{class:e.contentClasses},[a("div",{class:e.iconClasses}),e._v(" "),a("span",[e._v(e._s(e.text))])]):a("material-pull-hook",{attrs:{state:e.state,translate:e.translate,type:e.type}})},b=[],C={render:m,staticRenderFns:b},w=C,x=a(91),B=x(y,w,!1,null,null,null);t.a=B.exports},178:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ui-page",{staticClass:"page-cbbdac"},[e.isShow?a("div",{staticClass:"sliderContent ui-view"},[a("ui-slider",{attrs:{width:"260"}})],1):e._e(),e._v(" "),a("div",{staticClass:"buttonContent ui-view"},[a("ui-button",{attrs:{type:"primary"},nativeOn:{tap:function(t){e.sliderShow(t)}}},[e._v("创建滑动条控件")]),e._v(" "),a("ui-button",{attrs:{type:"primary"},nativeOn:{tap:function(t){e.navHandle(t)}}},[e._v(e._s(e.buttonText))])],1)])},staticRenderFns:[]}},179:function(e,t,a){function i(e){a(180),a(181)}var n=a(28)(a(182),a(184),i,null,null);e.exports=n.exports},180:function(e,t){},181:function(e,t){},182:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(63),n=a(40),s=a(39),r=a(88),l=a(89),o=a(60),c=a(62);t.default={components:{UiPage:c.a,UiNavBar:o.a,UiRow:l.a,UiCol:r.a,UiIcon:s.a,UiView:n.a,UiImage:i.a},config:{navigationStyle:"custom",navigationBarTextStyle:"white",backgroundColor:"#F4F4F4"},data:function(){return{portraitUrl:a(183)}},methods:{}}},183:function(e,t,a){e.exports=a.p+"static/img/portrait_bg.d8ab821.png"},184:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ui-page",{staticClass:"page-24c7e9"},[a("ui-nav-bar",{staticClass:"nav_bar page-24c7e9",slot:"nav-bar"},[a("div",{staticClass:"ui-row",style:{height:"46px"},attrs:{height:"46"}},[a("div",{staticClass:"ui-col ui-col-align-center align-center valign-middle",style:{flex:"0 0 50px"}},[a("div",{staticClass:"ui-col-content align-center valign-middle",staticStyle:{height:"46px"}},[a("ui-icon",{attrs:{name:"ring",size:"24",color:"#fff"}})],1)]),e._v(" "),a("div",{staticClass:"ui-col ui-col-align-center align-center valign-middle",style:{}},[a("div",{staticClass:"ui-col-content align-center valign-middle",staticStyle:{height:"46px"}},[a("div",{staticClass:"nav_title ui-view"},[e._v("我的")])])]),e._v(" "),a("div",{staticClass:"ui-col ui-col-align-center align-center valign-middle",style:{flex:"0 0 50px"}},[a("div",{staticClass:"ui-col-content align-center valign-middle",staticStyle:{height:"46px"}},[a("ui-icon",{attrs:{name:"setting",size:"24",color:"#fff"}})],1)])])]),e._v(" "),a("div",{staticClass:"user_content ui-view"},[a("div",{staticClass:"header_top ui-row",style:{height:"150px"},attrs:{height:"150"}},[a("div",{staticClass:"ui-col ui-col-align-center align-center valign-middle",style:{flex:"0 0 90px"}},[a("div",{staticClass:"ui-col-content align-center valign-middle",staticStyle:{height:"150px"}},[a("div",{staticClass:"head_portrait ui-view"}),e._v(" "),a("ui-image",{staticClass:"head_portrait",attrs:{src:e.portraitUrl,mode:"aspectFill",width:"60",height:"60"}})],1)]),e._v(" "),a("div",{staticClass:"ui-col ui-col-align-left align-left valign-middle",style:{}},[a("div",{staticClass:"ui-col-content align-left valign-middle",staticStyle:{height:"150px"}},[a("div",{staticClass:"login ui-view"},[e._v("立即登录")]),e._v(" "),a("div",{staticClass:"login_after ui-view"},[e._v("登录后可享受更多特权")])])]),e._v(" "),a("div",{staticClass:"ui-col ui-col-align-right align-right valign-middle",style:{"padding-right":"15px",flex:"0 0 50px"}},[a("div",{staticClass:"ui-col-content align-right valign-middle",staticStyle:{height:"150px"}},[a("ui-icon",{attrs:{name:"arrow-right",size:"18",color:"#fff"}})],1)])])])],1)},staticRenderFns:[]}},185:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ui-tab-page-container page-a5891c"},[a("Page0",{staticClass:"ui-tab-page",class:{visible:0===e.tabIndex}}),e._v(" "),a("Page1",{staticClass:"ui-tab-page",class:{visible:1===e.tabIndex}})],1)},staticRenderFns:[]}},189:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyNkOGQ4ZDgnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+DQo="},190:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyM2YzZjNmMnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+DQo="},90:function(e,t,a){function i(e){a(169),a(170)}var n=a(28)(a(171),a(185),i,null,null);e.exports=n.exports},93:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(94),n=a(157),s=a.n(n),r={app:s.a},l={};l.routes=[{path:"/pages/index",meta:{pageConfig:{navigationBarTitleText:"首页",backgroundColor:"#F4F4F4",navigationBarTextStyle:"black"},pageClass:"page-cbbdac",isTabBar:!0},component:a(90)},{path:"/pages/user",meta:{pageConfig:{navigationStyle:"custom",navigationBarTextStyle:"white",backgroundColor:"#F4F4F4"},pageClass:"page-24c7e9",isTabBar:!0},component:a(90)},{path:"*",component:function(e){a.e(0).then(function(){var t=[a(191)];e.apply(null,t)}.bind(this)).catch(a.oe)},meta:{pageConfig:{navigationBarTitleText:"404",delay:!1,disableScroll:!0}}},{path:"/touch-ui-start-page",component:a(186).default},{path:"/",redirect:"/pages/index"},{path:"/pages/detail",meta:{pageConfig:{navigationBarTitleText:"详情"},pageClass:"page-ef5ce8",isTabBar:!1},component:function(){return a.e(1).then(a.bind(null,192))}}],l.window={scrollType:"div",navigationBarBackgroundColor:"#ffffff",navigationBarTextStyle:"black",navigationBarBorderColor:"rgba(231, 231, 231, 0.6)"},l.theme={"theme-color":"#3399ff"},l.template=void 0,l.tabBar={groupId:"41993a5",paths:["/pages/index","/pages/user"],position:"undefined",color:"#7a7e83",selectedColor:"#39f",borderColor:"rgba(231, 231, 231, 0.6)",backgroundColor:"#fff",list:[{text:"首页",pagePath:"/pages/index",pageConfig:{navigationBarTitleText:"首页",backgroundColor:"#F4F4F4",navigationBarTextStyle:"black"},iconName:"home"},{text:"我的",pagePath:"/pages/user",pageConfig:{navigationStyle:"custom",navigationBarTextStyle:"white",backgroundColor:"#F4F4F4"},iconName:"user"}]},l.pageTabBars=[],i.a.start(r,l)}},[93]);