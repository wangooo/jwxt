<template>
    <div class="NavHeader">
        <div class="main">
            <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect">
              <el-menu-item index="Index" @click="goIndex">首页</el-menu-item>
              <el-menu-item index="Xk" @click="goXk()">选课</el-menu-item>
              <el-submenu>
                <template slot="title" index="XX">信息查询</template>
                <el-menu-item index="Cjcx" @click="goCjcx">学生成绩查询</el-menu-item>
                <el-menu-item index="Ksxx" @click="goKsxx">考试信息查询</el-menu-item>
                <el-menu-item index="Kbcx" @click="goKbcx">个人课表查询</el-menu-item>
              </el-submenu>
              <!--<el-submenu index="5">-->
                <el-menu-item index="Bs" @click="goBs">毕业设计</el-menu-item>
              <!--</el-submenu>-->
              <el-menu-item index="Grzx">个人中心</el-menu-item>
              <!--<el-menu-item index="7"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
              <el-button class="logout" size="small" @click="logout()">登出</el-button>
            </el-menu>
        </div>
    </div>
</template>

<script>

import './../assets/css/common.scss';

export default {
     data() {
      return {
        activeIndex: this.$route.name,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      goIndex(){
          this.$router.push({path:'/'});
      },
      goCjcx(){
        this.$router.push({path:'/cjcx'});
      },
      goKsxx(){
        this.$router.push({path:'/ksxx'});
      },
      goKbcx(){
          this.$router.push({path:'/kbcx'});
      },
      goBs(){
        this.$router.push({path:'/bs'});
      },
      goXk(){
        this.$router.push({path:'/xk'});
      },
      logout(){
        this.$router.push({path:'/login'});
      }
    }
}
</script>

<style>
  .logout{
    float:right;
    margin:15px 60px 0 0;
  }
</style>
