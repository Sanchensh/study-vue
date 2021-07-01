import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import  VueResource  from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios

new Vue({
  render: h => h(App),
}).$mount('#app')


