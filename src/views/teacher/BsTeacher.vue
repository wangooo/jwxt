<template>
    <div>
      <h1>毕设for teacher模块</h1>
    </div>
</template>

<script>
    export default {
        name: "BsTeacher",
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
