import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import MyPage from '../views/MyPageView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    component: Login
  },
   {
    path: '/my_page/:id',
    name: 'my_page',
    component: MyPage
   }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
