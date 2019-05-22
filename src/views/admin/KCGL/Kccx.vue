<template>
<h1>课程查询</h1>
</template>

<script>
    export default {
        name: "Kccx",
        mounted() {
          this.loginFlagCsh();
        },
        methods:{
          loginFlagCsh(){
            this.$store.state.loginFlag=true;
            this.$store.state.userJob='管理员';
          },
        }
    }
</script>

<style scoped>

</style>
