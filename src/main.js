import Vue from 'vue'
import 'babel-polyfill'
// import 'normalize.css/normalize.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import apiWckj from './apiWckj'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'
import '../public/iconfont_vue/iconfont.css'
import './../public/css/base.css'
import './../public/css/baseqj.less'
import VueParticles from 'vue-particles'
import Cookies from "js-cookie";



Vue.use(dataV)
Vue.use(ElementUI)
Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.$apiWckj = apiWckj


router.beforeEach((to, from, next) => {
  let token = Cookies.get('token')
  if(to.meta.content){
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    meta.name = "viewport";
    head[0].appendChild(meta)
  }
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (token) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
       // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')