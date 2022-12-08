import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import BreachCheck from './views/breach-check'
import Portfolio from './views/portfolio'
import Stores from './views/stores'
import AboutMe from './views/about-me'
import HireMe from './views/hire-me'
import Security from './views/security'
import PDFmerger from './views/p-d-fmerger'
import Home from './views/home'
import Projects from './views/projects'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'BreachCheck',
      path: '/breach-check',
      component: BreachCheck,
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
      component: Portfolio,
    },
    {
      name: 'Stores',
      path: '/stores',
      component: Stores,
    },
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
      name: 'Security',
      path: '/security',
      component: Security,
    },
    {
      name: 'PDFmerger',
      path: '/p-d-fmerger',
      component: PDFmerger,
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
