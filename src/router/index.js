import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    alias: '/',
    component: () => import('@/views/dashboard/Dashboard'),
    meta: { login: true }
  },
  {
    path: '/dashboard/settings',
    alias: '/',
    component: () => import('@/views/dashboard/Settings'),
    meta: { login: true }
  },
  {
    path: '/home',
    alias: '/',
    component: () => import('@/views/Home'),
    meta: { login: false }
  },
  {
    path: '/about',
    alias: '/',
    component: () => import('@/views/About'),
    meta: { login: false }
  },
  {
    path: '/contact',
    alias: '/',
    component: () => import('@/views/Contact'),
    meta: { login: false }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login'),
    meta: { login: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/Register'),
    meta: { login: false }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/auth/ForgotPassword'),
    meta: { login: false }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('@/views/auth/ResetPassword'),
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

router.beforeEach((to, from, next) => {
  if (to.meta?.login === true && !store.getters.accessToken) {
    return next('/login')
  }

  if ((to.path === '/login' || to.path === '/register' || to.path === '/forgot-password') && store.getters.accessToken) {
    return next('/dashboard')
  }

  next()
})

export default router
