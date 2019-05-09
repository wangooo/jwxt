<template>
    <div>
      <h1>老师的主页</h1>
    </div>
</template>

<script>
    export default {
        name: "IndexTeacher",
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
