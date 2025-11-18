import { createRouter, createWebHistory } from 'vue-router'
import HeroPage from '@/pages/HeroPage.vue'
import AboutMe from '@/pages/AboutMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/heropage',
      name: 'heropage',
      component: HeroPage,
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMe,
    },
  ],
})

export default router
