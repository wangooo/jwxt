<template>
    <div>
      <h1>成绩管理模块</h1>
    </div>
</template>

<script>
    export default {
        name: "Cjgl",
        mounted() {
          this.loginFlagCsh()
        },
        methods:{
          loginFlagCsh(){
            this.$store.state.loginFlag=true;
            this.$store.state.userJob='2';
          },
        }
    }
</script>

<style scoped>

</style>
