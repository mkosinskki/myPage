import { createRouter, createWebHistory } from 'vue-router'
import HeroPage from '@/pages/HeroPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/heropage',
      name: 'heropage',
      component: HeroPage,
    },
  ],
})

export default router
