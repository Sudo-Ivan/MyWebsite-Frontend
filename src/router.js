import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import AboutMe from './views/about-me'
import HireMe from './views/hire-me'
import Home from './views/home'
import Projects from './views/projects'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'About-Me',
      path: '/about-me',
      component: AboutMe,
    },
    {
      name: 'Hire-me',
      path: '/hire-me',
      component: HireMe,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Projects',
      path: '/projects',
      component: Projects,
    },
  ],
})
