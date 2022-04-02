import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    alias: '/',
    component: () => import('@/views/Dashboard'),
    meta: { login: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login'),
    meta: { login: false }
  },
  {
    path: '/not_authorized',
    name: '403',
    component: () => import('@/views/NoAccess.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
