import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Catalogue from './views/Catalogue.vue'
import Competitors from './views/Competitors.vue'
import Suggestions from './views/Suggestions.vue'
import Alerts from './views/Alerts.vue'
import Report from './views/Report.vue'
import Connections from './views/Connections.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Home
    },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: Catalogue
    },
    {
      path: '/competitors',
      name: 'competitors',
      component: Competitors
    },
    {
      path: '/suggestions',
      name: 'suggestions',
      component: Suggestions
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: Alerts
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    },
    {
      path: '/connections',
      name: 'connections',
      component: Connections
    }
  ]
})
