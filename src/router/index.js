import { createRouter, createWebHistory } from 'vue-router'
// import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/berita',
    name: 'berita',
    component: () => import('../views/Berita.vue')
  },
  {
    path: '/list-event',
    name: 'list-event',
    component: () => import('../views/ListEvent.vue')
  },
  {
    path: '/loker',
    name: 'loker',
    component: () => import('../views/Loker.vue')
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: () => import('../views/ComingSoon.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
