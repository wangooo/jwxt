<template>
  <div class="NavHeader">
    <div class="main">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect">
        <el-menu-item index="1" @click="goIndex">admin</el-menu-item>

        <el-submenu>
          <template slot="title" index="XX">档案管理</template>
          <el-submenu index="3-4">
            <template slot="title">学籍管理</template>
            <el-menu-item index="3-4-1" @click="goXjtj">学籍添加</el-menu-item>
            <el-menu-item index="3-4-2" @click="goXjcx">学籍查询</el-menu-item>
          </el-submenu>
          <el-submenu index="3-5">
            <template slot="title">教工档案管理</template>
            <el-menu-item index="3-5-1" @click="goJjtj">教籍添加</el-menu-item>
            <el-menu-item index="3-5-2" @click="goJjcx">教籍查询</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">排课</template>
          <el-menu-item index="7-1" @click="goZdpk">自动排课</el-menu-item>
          <el-menu-item index="7-2"@click="goSdpk">手动排课</el-menu-item>
        </el-submenu>
        <!--<el-submenu index="5">-->
        <!--权限在这-->
        <el-submenu index="2">
          <template slot="title">账号管理</template>
          <el-menu-item index="2-1" @click="goZhtj">账号添加</el-menu-item>
          <el-menu-item index="2-2" @click="goZhcx">账号查询</el-menu-item>
        </el-submenu>

        <el-menu-item index="6" @click="goZxt">子系统管理</el-menu-item>

        <el-submenu index="4">
          <template slot="title">课程信息管理</template>
          <el-menu-item index="4-1" @click="goKctj">课程添加</el-menu-item>
          <el-menu-item index="4-2"@click="goKccx">课程查询</el-menu-item>
        </el-submenu>

        <!--              不在后台管理的界面，方便写先放这-->
        <el-submenu index="5">
          <template slot="title">信息修改</template>
          <el-menu-item index="5-1" @click="goXsxx">修改学生个人信息</el-menu-item>
          <el-menu-item index="5-2"@click="goJsxx">修改教师个人信息</el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">其它</template>
          <el-menu-item index="3-1">访问量</el-menu-item>
          <el-menu-item index="3-2">日志查看</el-menu-item>
        </el-submenu>

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

      //去排课系统
      goPkxt(){
        this.$router.push({path:'/zdpk'});
      },
      //账号管理
      goZhcx(){
        this.$router.push({path:'/zhcx'});
      },
      goZhtj(){
        this.$router.push({path:'/zhtj'});
      },
      //子系统
      goZxt(){
        this.$router.push({path:'/zxt'});
      },
      //课程管理
      goKccx(){
        this.$router.push({path:'/kccx'});
      },
      goKctj(){
        this.$router.push({path:'/kctj'});
      },
      goXsxx(){
        this.$router.push({path:'/xsxx'});
      },
      goJsxx(){
        this.$router.push({path:'/jsxx'});
      },
      //档案管理
      goXjtj(){
        this.$router.push({path:'/xjtj'});
      },
      goXjcx(){
        this.$router.push({path:'/xjcx'});
      },
      goJjtj(){
        this.$router.push({path:'/jjtj'});
      },
      goJjcx(){
        this.$router.push({path:'/jjcx'});
      },
      goZdpk(){
        this.$router.push({path:'/zdpk'});
      },
      goSdpk(){
        this.$router.push({path:'/sdpk'});
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
