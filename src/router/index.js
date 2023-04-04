import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import { store } from '../store/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('../views/Details.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/carts',
      name: 'carts',
      component: () => import('../views/Cart.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/buyer',
      name: 'buyer',
      component: () => import('../views/Buyer.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/seller',
      name: 'seller',
      component: () => import('../views/Seller.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: () => import('../views/Not-Found.vue')
    },
    {
      path: '/servererror',
      name: 'servererror',
      component: () => import('../views/Server-Error.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (document.cookie) {
      next()
    }
    else {
      next('/')
    }
  }
  else if (to.fullPath == '/' && document.cookie) {
    next('/products')
  }
  else {
    next()
  }

})

export default router
