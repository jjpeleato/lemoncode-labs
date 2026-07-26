import { createRouter, createWebHistory } from 'vue-router'
import WeeklyPlanView from '@/views/WeeklyPlanView.vue'
import FavoritesView from '@/views/FavoritesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/plan' },
    { path: '/plan', name: 'weekly-plan', component: WeeklyPlanView },
    { path: '/favorites', name: 'favorites', component: FavoritesView },
  ],
})

export default router
