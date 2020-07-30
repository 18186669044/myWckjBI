import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: 'BImain',
  },
  {
    path: '/BImain',
    name: 'BImain',
    component: () => import( /* webpackChunkName: "about" */ '../components/BImain.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "about" */ '../components/loginPages/login.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
  },
    component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/operate',
    name: 'operate',
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
  },
    component: () => import( /* webpackChunkName: "about" */ '../views/operate.vue')
  },
  {
    path: '/curing',
    name: 'curing',
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
  },
    component: () => import( /* webpackChunkName: "about" */ '../views/curing.vue')
  },
  {
    path: '/helpEmer',
    name: 'helpEmer',
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
  },
    component: () => import( /* webpackChunkName: "about" */ '../views/helpEmer.vue')
  },
]








const router = new VueRouter({
  // mode: 'history',
  // mode: 'history',
  // base: '/v2/',
  routes
})

export default router