import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faBars,
  faQuestionCircle,
  faStoreAlt,
  faAngleDown,
  faChevronDown,
  faChartLine,
  faNewspaper,
  faTrophy,
  faList,
  faBell,
  faFileInvoiceDollar,
  faDrawPolygon,
  faUserCircle,
  faGlobeAmericas,
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import AOS from 'aos'
import 'aos/dist/aos.css'

import FlagIcon from 'vue-flag-icon'

Vue.use(FlagIcon);

Vue.use(BootstrapVue);

library.add(
  faBars,
  faQuestionCircle,
  faStoreAlt,
  faAngleDown,
  faChevronDown,
  faChartLine,
  faNewspaper,
  faTrophy,
  faList,
  faBell,
  faFileInvoiceDollar,
  faDrawPolygon,
  faUserCircle,
  faGlobeAmericas,
  faCheck
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.productionTip = false


import './assets/scss/app.scss'

new Vue({
  router,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
