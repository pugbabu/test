import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Classify from '../views/Class.vue'
import About from '../views/About.vue'
import Meta from '../views/Meta.vue'
import Search from '../views/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/index',
          component: Index
        },
        {
          path: '/class',
          component: Classify
        },
        {
          path: '/about',
          component: About
        },
        {
          path: '/meta',
          component: Meta
        },
        { 
          path: '*',
          redirect: '/index' 
        }

      ]
    }
  ]
})
