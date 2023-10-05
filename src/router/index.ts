import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/**
 * Note: This router is for single page history, GitHub Pages does not support
 * routing via the user's main URL. So we will not keep paths, but keep names instead.
 *
 * In our case:
 * > `eddie-thomas.github.io/**ANYTHING_HERE_IS_NOT_ALLOWED**`
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
