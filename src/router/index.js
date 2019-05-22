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
import Xsxx from '@/views/admin/Xsxx'
import Sdpk from '@/views/admin/PKXT/Sdpk'
import Zdpk from '@/views/admin/PKXT/Zdpk'
import Kbcxadm from '@/views/admin/PKXT/Kbcxadm'
import Kctj from '@/views/admin/KCGL/Kctj'
import Kccx from '@/views/admin/KCGL/Kccx'
import Zhtj from '@/views/admin/Zhanghao/Zhtj'
import Zhcx from '@/views/admin/Zhanghao/Zhcx'
import Zxt  from '@/views/admin/Zxt'

import Jsxx from '@/views/admin/XXXG/Jsxx'

import Jjcx from '@/views/admin/record/Jjcx'
import Jjtj from '@/views/admin/record/Jjtj'
import Xjcx from '@/views/admin/record/Xjcx'
import Xjtj from '@/views/admin/record/Xjtj'

Vue.use(Router)

export default new Router({
  routes: [

    //学生界面
    {
    path: '/',
    name: 'Login',
    component: Login,
    },
    {
      path: '/index',
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
      path: '/sdpk',
      name: 'Sdpk',
      component: Sdpk
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/xsxx',
      name: 'Xsxx',
      component: Xsxx
    },
    {
      path: '/zhcx',
      name: 'Zhcx',
      component: Zhcx
    },
    {
      path: '/zhtj',
      name: 'Zhtj',
      component: Zhtj
    },
    {
      path: '/zxt',
      name: 'Zxt',
      component: Zxt
    },
    {
      path: '/xsxx',
      name: 'Xsxx',
      component: Xsxx
    },
    {
      path: '/jsxx',
      name: 'Jsxx',
      component: Jsxx
    },
    {
      path: '/jjtj',
      name: 'Jjtj',
      component: Jjtj
    },
    {
      path: '/jjcx',
      name: 'Jjcx',
      component: Jjcx
    },
    {
      path: '/xjtj',
      name: 'Xjtj',
      component: Xjtj
    },
    {
      path: '/xjcx',
      name: 'Xjcx',
      component: Xjcx
    },
    {
      path: '/kctj',
      name: 'Kctj',
      component: Kctj
    },
    {
      path: '/zdpk',
      name: 'Zdpk',
      component: Zdpk
    },
    {
      path: '/kbcxadm',
      name: 'Kbcxadm',
      component: Kbcxadm
    }




  ]
})
