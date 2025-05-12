import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
const Login = () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')

Vue.use(VueRouter)

const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
