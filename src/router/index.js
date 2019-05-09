import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Index from '@/views/student/Index'
import Cjcx from '@/views/student/Cjcx'
import Ksxx from '@/views/student/Ksxx'
import Kbcx from '@/views/student/Kbcx'
import Bs from '@/views/student/Bs'
import Xk from '@/views/student/Xk'
import IndexTeacher from '@/views/teacher/IndexTeacher'
import Cjgl from '@/views/teacher/Cjgl'
import Pk from '@/views/teacher/Pk'
import BsTeacher from '@/views/teacher/BsTeacher'
import Admin from '@/views/admin/admin'

Vue.use(Router)

export default new Router({
  routes: [

    //学生界面
    {
    path: '/login',
    name: 'Login',
    component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/teacher',
      name: 'IndexTeacher',
      component: IndexTeacher
    },

    {
      path: '/cjcx',
      name: 'Cjcx',
      component: Cjcx
    },
    {
      path: '/ksxx',
      name: 'Ksxx',
      component: Ksxx
    },
    {
      path: '/kbcx',
      name: 'Kbcx',
      component: Kbcx
    },
    {
      path: '/bs',
      name: 'Bs',
      component: Bs
    },
    {
      path: '/xk',
      name: 'Xk',
      component: Xk
    },

    //老师界面
    {
      path: '/teacher',
      name: 'IndexTeacher',
      component: IndexTeacher
    },
    {
      path: '/cjgl',
      name: 'Cjgl',
      component: Cjgl
    },
    {
      path: '/bsteacher',
      name: 'BsTeacher',
      component: BsTeacher
    },

    //管理员界面
    {
      path: '/pk',
      name: 'Pk',
      component: Pk
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },


  ]
})
