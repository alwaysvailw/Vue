import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import DemoVueRouter from '../pages/Demo/VueRouter/DemoVueRouter'
import DemoRouterHome from '../pages/Demo/VueRouter/DemoRouterHome.vue'
import DemoRouter1 from '../pages/Demo/VueRouter/DemoRouter1.vue'
import DemoRouter2 from '../pages/Demo/VueRouter/DemoRouter2.vue'
import Demo2 from '../pages/Demo/Demo2'
import User from '../pages/Demo/User'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home},
    { path: '/demo-vue-router', name: 'demo-vue-router', component: DemoVueRouter, 
      children: [
        { path: '', component: DemoRouterHome },
        { path: 'demo-vue-router-1', component: DemoRouter1 },
        { path: 'demo-vue-router-2', component: DemoRouter2 }
      ]
    },
    { path: '/demo-2', name: 'demo2', component: Demo2},
    { path: '/bar', component: Demo2 },
    { path: '/user/:id', component: User },
    { path: '*', name: 'notfound', component: NotFound},
  ]
})