import Vue from 'vue'
import VueRouter from 'vue-router'
import TheDeployView from '../views/TheDeployView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'deploy',
    component: TheDeployView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
