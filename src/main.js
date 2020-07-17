import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Element from 'element-ui'

import '@/styles/main.scss'
Vue.config.productionTip = false
Vue.use(Element)
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
