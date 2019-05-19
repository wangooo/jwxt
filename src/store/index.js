import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {}
const mutations = {
  handleUserName: (state, user_name) => {
    state.userName = user_name;
    // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
    localStorage.setItem('user_name', user_name);
    // alert(user_name);
  },
  handleUserJob: (state, user_job) => {
    state.userJob = user_job;
    // 把登录的用户的身份保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
    localStorage.setItem('user_job', user_job);
    // alert(user_job);
  },
  getStudentKb:(state,stuKb)=>{
    state.studentKb=stuKb;
    console.log(state.studentKb)
    localStorage.setItem('student_kb',JSON.stringify(stuKb));
  }
}
const state = {
  userName: '' || localStorage.getItem('user_name'),
  userJob: '1',
  loginFlag:false,
  xuenianNow:'2019-2020',
  xueqiNow:2,
  studentKb:[],
  teacherKb:[],
}
// getters 只会依赖 state 中的成员去更新

const store = new Vuex.Store({
  actions,
  mutations,
  state,
})

export default store;
