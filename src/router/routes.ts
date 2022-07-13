import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    img: 'home',
    classes: [],
    component: () => import('../views/Home.vue')
  },
  {
    path: '/poetry',
    name: 'Poetry',
    img: 'poetry',
    classes: [],
    component: () => import('../views/poetry/poetry.vue')
  },
  {
    path: '/about',
    name: 'About',
    img: 'about',
    classes: [],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    img: 'test',
    classes: [],
    component: () => import('../views/test.tsx')
  }
]

export default routes
