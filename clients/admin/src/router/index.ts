
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/login.vue';
import Home from '../views/home.vue'
import authService from '../services/authService'
import authStore from "../store/authStore";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authService.isAuthenticated()) {
      authStore.setUnauthorizedMessage('Unauthorized: Please log in to access Home page.');
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
