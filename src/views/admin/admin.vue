<template>
    <div class="admin">
      <p>管理员主页</p>
      <h1>有个锤子主页</h1>
    </div>
</template>

<script>
    export default {
        name: "admin",
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
