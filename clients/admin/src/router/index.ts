
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/login.vue';
import Home from '../views/home.vue'
import leaseList from '../views/leaseList.vue';
import rentals from '../views/rentals.vue';

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
  {
    path: '/lease',
    name: 'Lease',
    component: leaseList 
  },
  {
    path: '/rental',
    name: 'Rental',
    component: rentals 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
