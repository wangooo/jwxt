<template>
    <div>
      <h1>排课模块</h1>
    </div>
</template>

<script>
    export default {
        name: "Pk",
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
