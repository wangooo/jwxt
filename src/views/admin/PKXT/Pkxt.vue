<template>
    <h1>全面制作人大家好</h1>
</template>

<script>
    export default {
        name: "Pkxt",
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
