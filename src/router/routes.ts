import { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    img: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/poetry',
    name: 'Poetry',
    img: 'poetry',
    component: () => import('../views/poetry')
  },
  {
    path: '/about',
    name: 'About',
    img: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   component: () => import('../layout/index.vue')
  // }
]

export default routes