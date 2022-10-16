import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'allTodos',
      component: () => import('../views/TodosAll.vue')
    },
    {
      path: '/active',
      name: 'activeTodos',
      component: () => import('../views/TodosActive.vue')
    },
    {
      path: '/completed',
      name: 'completedTodos',
      component: () => import('../views/TodosCompleted.vue')
    }
  ]
})

export default router
