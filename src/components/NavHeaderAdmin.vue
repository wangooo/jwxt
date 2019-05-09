<template>
  <div class="NavHeader">
    <div class="main">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect">
        <el-menu-item index="1" @click="goIndex">admin</el-menu-item>

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
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      goIndex(){
        this.$router.push({path:'/admin'});
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
