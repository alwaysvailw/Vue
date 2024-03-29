import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import router from './router'

Vue.config.productionTip = false

window.Vue = new Vue({
  render: h => h(App),
  router
}).$mount('#app')