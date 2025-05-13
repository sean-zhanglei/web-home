import Vue from 'vue'
import router from './router'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'small' }) // set element-ui default size



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
