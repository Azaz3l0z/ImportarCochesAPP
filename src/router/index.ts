import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WhoAreWe from '../views/WhoAreWe.vue'
import Services from '../views/ServicesView.vue'
import HowToImport from '../views/HowToImportView.vue'
import Calculator from '../views/CalculatorView.vue'
import Blog from '../views/BlogView.vue'
import Contact from '../views/ContactView.vue'
import HireService from '../views/HireServiceView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: WhoAreWe
  },
  {
    path: '/servicios',
    name: 'Services',
    component: Services
  },
  {
    path: '/como-importar',
    name: 'HowToImport',
    component: HowToImport
  },
  {
    path: '/calculadora-de-costes',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/contratar-servicio',
    name: 'services',
    component: HireService
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
