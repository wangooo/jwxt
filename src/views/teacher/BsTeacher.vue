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
            var sudo=localStorage.getItem('login_if');
            if(!sudo){
              alert('请登陆！');
              this.$router.push({path:'/'});
            }
            this.$store.state.loginFlag=true;
            this.$store.state.userJob='老师';
          },
        }
    }
</script>

<style scoped>

</style>
