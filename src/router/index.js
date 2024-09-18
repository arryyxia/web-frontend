import { createRouter, createWebHistory } from 'vue-router'
// import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  // ? BERITA
  {
    path: '/berita',
    name: 'berita',
    component: () => import('../views/Berita.vue')
  },
  {
    path: '/berita/:slug',
    name: 'berita',
    component: () => import('../views/BeritaDetail.vue')
  },
  // ? Event
  {
    path: '/list-event',
    name: 'list-event',
    component: () => import('../views/ListEvent.vue')
  },
  // ? Loker
  {
    path: '/loker',
    name: 'loker',
    component: () => import('../views/Loker.vue')
  },
  // Coming soon
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
