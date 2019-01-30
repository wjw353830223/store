import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('./components/index'),
    meta: {
      requiresAuth: false,
    },
  }
];
let mode = 'history';
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ mode, routes });
//注册全局钩子用来拦截需要登录的路由
router.beforeEach((to, from, next) => {
  let token = store.state.token;
  if (to.meta.requiresAuth) {
    if (token) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});
router.afterEach(() => {
    store.commit('updateLoadingStatus', false);
});
export default router