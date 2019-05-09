<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav-header v-if="$store.state.userJob=='1'&& $store.state.loginFlag"></nav-header>
    <nav-header-teacher v-if="$store.state.userJob=='2'&& $store.state.loginFlag"></nav-header-teacher>
    <nav-header-admin v-if="$store.state.userJob=='3'&& $store.state.loginFlag"></nav-header-admin>
    <router-view/>
    <!--<Footer></Footer>-->
  </div>
</template>

<script>
import NavHeader from './components/NavHeader'
import Footer from './components/Footer'
import NavHeaderTeacher from './components/NavHeaderTeacher'
import NavHeaderAdmin from './components/NavHeaderAdmin'

export default {
  name: 'App',
  date(){
        return{

        }
  },
  // mounted:function(){
  //   this.checkLogin()
  // },
  components:{NavHeader,NavHeaderTeacher,NavHeaderAdmin,Footer},
  // methods:{
  //   checkLogin(){
  //     let rt=this.$route.path;
  //     // alert(rt);
  //     if(rt=='/login'){
  //       this.loginFlag=!this.loginFlag;
  //     }
  //   }
  // }
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
