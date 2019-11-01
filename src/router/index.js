import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Demo1 from '../pages/Demo/Demo1'
import Demo2 from '../pages/Demo/Demo2'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '*', name: 'notfound', component: NotFound},
    { path: '/', name: 'home', component: Home},
    { path: '/demo-1', name: 'demo1', component: Demo1},
    { path: '/demo-2', name: 'demo2', component: Demo2},
  ]
})