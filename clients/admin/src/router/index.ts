
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/login.vue';
import Home from '../views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
