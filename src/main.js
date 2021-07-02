import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import  VueResource  from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios

new Vue({
  render: h => h(App),
}).$mount('#app')


