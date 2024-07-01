// src/router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/login.vue';

const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import('@/components/Home.vue'), // Lazy-loaded
//   },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
