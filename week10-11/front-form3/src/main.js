import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import filters from '@/utils/filter'
import directives from '@/utils/directives'

import './local/veevalidate'
import Alert from './components/modules/alert/index'
import Pop from './components/modules/pop/index'

Vue.config.productionTip = false

Vue.use(Alert)
Vue.use(Pop)

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key])
})

axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000' : 'http://your.domain.com'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
