<template>
  <div>
    <!--<nav-header></nav-header>-->
    <h1>考试信息查询</h1>

  </div>
</template>

<script>
  import NavHeader from '@/components/NavHeader'
  export default {
    mounted() {
      this.loginFlagCsh()
    },
    methods:{
      loginFlagCsh(){
        var sudo=localStorage.getItem('login_if');
        if(!sudo){
          alert('请登陆！');
          this.$router.push({path:'/'});
        }
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='学生';
      },
    }
    // components:{NavHeader}
  }
</script>

<style>

</style>
