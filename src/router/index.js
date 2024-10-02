import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Home
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
    name: 'berita-detail',
    component: () => import('../views/BeritaDetail.vue')
  },

  // ? Event
  {
    path: '/event',
    name: 'event',
    component: () => import('../views/Event.vue')
  },
  {
    path: '/event/:slug',
    name: 'event-detail',
    component: () => import('../views/EventDetail.vue')
  },

  // ? Loker
  {
    path: '/loker',
    name: 'loker',
    component: () => import('../views/Loker.vue')
  },
  {
    path: '/loker/:slug',
    name: 'loker-detail',
    component: () => import('../views/LokerDetail.vue')
  },

  // ? Search Route (put this towards the bottom to avoid conflicts)
  {
    path: '/pencarian/:slug',
    name: 'pencarian',
    component: () => import('../views/Search.vue')
  },

  // Coming Soon
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: () => import('../views/ComingSoon.vue')
  },

  // NotFound (catch-all)
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
