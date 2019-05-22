<template>
<div>
  <h1>教籍添加</h1>
</div>
</template>

<script>
    export default {
        name: "Jjtj",
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
