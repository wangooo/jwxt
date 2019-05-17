<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav-header v-if="$store.state.userJob=='1'&& $store.state.loginFlag"></nav-header>
    <nav-header-teacher v-if="$store.state.userJob=='2'&& $store.state.loginFlag"></nav-header-teacher>
    <nav-header-admin v-if="$store.state.userJob=='3'&& $store.state.loginFlag"></nav-header-admin>

    <!-- <nav-header v-show="(user_job=='1')&&$store.state.loginFlag"></nav-header>
    <nav-header-teacher v-show="(user_job=='2')&&$store.state.loginFlag"></nav-header-teacher>
    <nav-header-admin v-show="(user_job=='3')&&$store.state.loginFlag"></nav-header-admin> -->


    <router-view/>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import NavHeader from './components/NavHeader'
import Footer from './components/Footer'
import NavHeaderTeacher from './components/NavHeaderTeacher'
import NavHeaderAdmin from './components/NavHeaderAdmin'

export default {
  name: 'App',
  data(){
        return{
            user_job:''
        }
  },
  // mounted:function(){
  //   this.checkLogin()
  // },
  beforeMount:function(){
    this.user_job_check()
  },
  components:{NavHeader,NavHeaderTeacher,NavHeaderAdmin,Footer},
  methods:{
    // checkLogin(){
    //   let rt=this.$route.path;
    //   // alert(rt);
    //   if(rt=='/login'){
    //     this.loginFlag=!this.loginFlag;
    //   }
    // }
    user_job_check(){
       var storage=window.localStorage;
       var c=storage.getItem("user_job");
       this.user_job=c;
       console.log('此时vuex中user_jpb为 : '+this.$store.state.userJob);
       console.log('拿到user_job: '+this.user_job);
    }
  }
}
</script>

<style>
  *{
    padding:0;
    margin:0;
    list-style: none;
    /*text-align:center;*/
  }
</style>
