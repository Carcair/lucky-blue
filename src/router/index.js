import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Game from '../views/Game.vue'
import HowTo from '../views/HowTo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  },
  {
    path: '/how-to',
    name: 'how-to',
    component: HowTo
  }
]

const router = new VueRouter({
  routes
})

export default router
