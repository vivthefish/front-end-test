import { createRouter, createWebHistory } from 'vue-router'

import CardRow from '../pages/CardRow.vue'
import CounterButton from '../pages/CounterButton.vue'

const routes = [
  {
    path: '/card-row',
    component: CardRow
  },
  {
    path: '/counter-button',
    component: CounterButton
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router