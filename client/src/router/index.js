import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/auth/Login.vue'
import Register from '../pages/auth/Register.vue'
import ResetPassword from '../pages/auth/ResetPassword.vue'
import ForgotPassword from '../pages/auth/ForgotPassword.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'home',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        },
        {
          path: 'reset-password',
          name: 'resetPassword',
          component: ResetPassword
        },
        {
          path: 'forgot-password',
          name: 'forgotPassword',
          component: ForgotPassword
        }
      ]
    },

  ]
})

export default router
