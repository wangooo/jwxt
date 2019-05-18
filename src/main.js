// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import $ from 'jquery';
import 'bootstrap3/dist/js/bootstrap.min.js'
import 'bootstrap3/dist/css/bootstrap.min.css'
// import axios from 'axios'
var axios = require('axios')
axios.defaults.baseURL = 'http://192.168.43.149:8080/'
// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.config.productionTip = false
//把 `axios` 加到 `Vue` 的原型中
Vue.prototype.axios = axios;

Vue.use(ElementUI);

require('./mock.js')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'

})
