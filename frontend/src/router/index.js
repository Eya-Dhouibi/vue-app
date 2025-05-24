import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
  },
   {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesView.vue'),
  },
   {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
