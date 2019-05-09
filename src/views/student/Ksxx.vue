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
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='1';
      },
    }
    // components:{NavHeader}
  }
</script>

<style>

</style>
