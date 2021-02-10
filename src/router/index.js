import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BudgetPage from "../views/BudgetPage";
import Admin from "../views/Admin";

const routes = [
  {
    path: '/',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/budgetter/',
    name: 'BudgetPage',
    component: BudgetPage
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router