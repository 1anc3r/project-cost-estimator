import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/chengdu',
      name: 'Chengdu',
      component: () => import('@/views/ChengduCostEstimator.vue'),
    },
    {
      path: '/sichuan',
      name: 'Sichuan',
      component: () => import('@/views/SichuanCostEstimator.vue'),
    },
  ],
})

export default router