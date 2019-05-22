<template>
  <div>
    <h1>你看这面又长又宽</h1>
  </div>
</template>

<script>
    export default {
        name: "Xjcx",
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
