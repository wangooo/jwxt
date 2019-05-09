<template>
    <div>
      <p class="viewsTitle">毕设</p>
      <input type="text" v-model="demo" placeholder="请输入">

      <p>{{demo}}</p>
    </div>
</template>
<script>
  import '../../assets/css/common.scss';
  export default {
        name: "Bs",
    data(){
          return{
            demo:'nihao'
          }
    },
    mounted() {
      this.loginFlagCsh()
    },
    methods:{
      loginFlagCsh(){
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='1';
      },
    }
    }
</script>

<style scoped>

</style>
