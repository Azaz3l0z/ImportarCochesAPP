import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WhoAreWe from '../views/WhoAreWe.vue'
import Services from '../views/ServicesView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: WhoAreWe
  },
  {
    path: '/servicios',
    name: 'services',
    component: Services
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
