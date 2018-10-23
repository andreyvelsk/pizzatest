import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import store from'./store'
import VueTheMask from 'vue-the-mask'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(VueResource)
Vue.use(VueTheMask)

Vue.http.options.root = "http://localhost:3000/"

Vue.http.interceptors.push(request => {
	request.headers.set('Auth', 'rand token'+Math.random())
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
