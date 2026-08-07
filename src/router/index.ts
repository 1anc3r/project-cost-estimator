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
      path: '/chengdu-T5',
      name: 'Chengdu-T5',
      component: () => import('@/views/ChengduCostEstimator-T5.vue'),
    },,
    {
      path: '/chengdu-T6',
      name: 'Chengdu-T6',
      component: () => import('@/views/ChengduCostEstimator-T6.vue'),
    },
    {
      path: '/sichuan',
      name: 'Sichuan',
      component: () => import('@/views/SichuanCostEstimator.vue'),
    },
  ],
})

export default router