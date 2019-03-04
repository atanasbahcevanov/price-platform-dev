import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './views/Home.vue'
import Catalogue from './views/Catalogue.vue'
import Competitors from './views/Competitors.vue'
import Suggestions from './views/Suggestions.vue'
import Alerts from './views/Alerts.vue'
import Report from './views/Report.vue'
import Connections from './views/Connections.vue'

import Settings from './views/Setting.vue'


import Index from './views/landing/Index.vue'

import Pricing from './views/landing/Pricing.vue'

// useful links
import TermsAndConditions from './views/landing/useful_links/Terms.vue'
import PrivacyPolicy from './views/landing/useful_links/PrivacyPolicy.vue'
import Cookies from './views/landing/useful_links/Cookies.vue'
import FAQ from './views/landing/useful_links/Faq.vue'
import Support from './views/landing/useful_links/Support.vue'
// industies
import IndustryBrowse from './views/landing/industry/Browse.vue'
import IndustryFashion from './views/landing/industry/Fashion_Beauty.vue'
import IndustrySports from './views/landing/industry/Sports.vue'
import IndustryMusic from './views/landing/industry/Music.vue'
import IndustryHealth from './views/landing/industry/Health_Wellness.vue'
import IndustryToys from './views/landing/industry/Toys_Games.vue'
import IndustryEntertainment from './views/landing/industry/Entertainment.vue'
// case studies
import CaseStudyArticleTemplate from './views/landing/case_study/Article.vue'
import CaseStudyBrowseArticle from './views/landing/case_study/Browse.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/industries',
      name: 'industry-browse',
      component: IndustryBrowse
    },
    {
      path: '/industries/fashion-and-beauty',
      name: 'fashion-and-beauty',
      component: IndustryFashion
    },
    {
      path: '/industries/sports',
      name: 'sports',
      component: IndustrySports
    },
    {
      path: '/industries/music',
      name: 'music',
      component: IndustryMusic
    },
    {
      path: '/industries/health-and-wellness',
      name: 'health-and-wellness',
      component: IndustryHealth
    },
    {
      path: '/industries/toys-and-games',
      name: 'toys-and-games',
      component: IndustryToys
    },
    {
      path: '/industries/entertainment',
      name: 'entertainment',
      component: IndustryEntertainment
    },
    {
      path: '/case-studies/article-name',
      name: 'article',
      component: CaseStudyArticleTemplate
    },
    {
      path: '/case-studies',
      name: 'browse',
      component: CaseStudyBrowseArticle
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
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
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: TermsAndConditions
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/cookies',
      name: 'cookies',
      component: Cookies
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    },
    {
      path: '/support',
      name: 'support',
      component: Support
    }
  ]
})
