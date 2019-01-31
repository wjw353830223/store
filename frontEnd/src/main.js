import Vue from 'vue'
import App from './App.vue'
import router  from './router';
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible.js'
import Lockr from 'lockr'
import { Api } from './api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.interceptors.request.use(
  config => {
      config.timeout = 30 * 1000;
      config.withCredentials = true;
      let auth=null
      let arr =  Object.keys(Api)
      for(let i=0; i< arr.length; i++){
        if(Api[arr[i]].path==config.url){
          auth = Api[arr[i]].auth
          break;
        }
      }
      if(auth===false){
          return config;
      }
      //拦截需要登录的后台接口
      if(auth === true){
        let token = store.state.token;
        if(!token){
          router.replace({ 
              path: 'index/open/login',
              query: { redirect: router.currentRoute.fullPath }
          });
        }
        return config;
      }
      if(auth === null){
        router.replace({ 
          path: 'index/open/login',
          query: { redirect: router.currentRoute.fullPath }
        });
      }
  },
  error => {
      return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
      return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);
window.router = router
window.store = store
window.axios = axios
window.Lockr = Lockr
window.wsUrl = process.env.VUE_APP_WS_URL
window.baseUrl = process.env.VUE_APP_BASE_URL
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
