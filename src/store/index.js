import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userJob: '1',
    loginFlag:false
  }
});

export default store;
