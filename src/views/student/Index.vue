<template>
    <div class="Index">
         <!--<nav-header></nav-header>-->
        <h1>it is 主页</h1>
        <p>欢迎 {{studentIdd}}</p>

        <!--用户头像：<user-img class="yo"></user-img>-->
        <!-- <Footer class="footer"></Footer> -->
    </div>
</template>

<script>
import UserImg from '../../components/UserImg'
import NavHeader from '../../components/NavHeader'
// import Footer from './../components/Footer'

export default {
    name:'Index',
    data(){
        return{
          studentIdd:this.$route.params.studentId
        }
    },
    components:{UserImg},
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

<style lang="scss" scoped>
  .yo{
    display:inline-block;
  }
</style>
