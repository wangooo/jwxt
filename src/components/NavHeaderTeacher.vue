<template>
  <div class="NavHeader">
    <div class="main">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect">
        <el-menu-item index="IndexTeacher" @click="goIndexTeacher">老师主页</el-menu-item>
        <el-menu-item index="Cjgl" @click="goCjglTeacher">成绩管理</el-menu-item>
        <el-menu-item index="Pk" @click="goPk">排课</el-menu-item>
        <el-menu-item index="BsTeacher" @click="goBs">毕业设计</el-menu-item>
        <el-menu-item index="6">个人中心</el-menu-item>
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
      goIndexTeacher(){
        this.$router.push({path:'/teacher'});
      },
      goCjglTeacher(){
        this.$router.push({path:'/cjgl'});
      },
      goPk(){
        this.$router.push({path:'/pk'});
      },
      goKbcx(){
        this.$router.push({path:'/kbcx'});
      },
      goBs(){
        this.$router.push({path:'/bsteacher'});
      },
      logout(){
        var storage=window.localStorage;
        storage.clear();
        this.$router.push({path:'/'});
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
