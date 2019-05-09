<template>
    <div>
        <div class="container">
          <h1>选课</h1>
        </div>
        <div class="cbl" v-bind:class="{'cblActive':cblActive}">
          <div class="cbl-left">
          <a href="#" @click="cblClick"><img class="cbl-btn" src="../../assets/img/icon/click.png"></a>
          </div>
          <div class="cbl-right"></div>
        </div>
        <!--<div v-show="cblshow" class="cbl-show">-->
          <!--<div>ss</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "Xk",
        data(){
          return{
            // cblshow:false,
            cblActive: false
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
          cblClick(){
            console.log(1);
            this.cblActive=!this.cblActive;
          }

        }
    }
</script>

<style scoped lang="scss">
  .container{
    position:fixed;
    width:100%;
    height:100%;
    /*background:pink;*/
  }
  .cbl{
    position:fixed;
    right:-240px;
    width:300px;
    height:100%;
    background:lightskyblue;
    transition: 1s right ease;
    .cbl-left{
      width:20%;
      height:100%;
      background:lightskyblue;
      float:left;
      display:flex;
      align-items: center;
      justify-content: center;
    }
    .cbl-right{
      width:80%;
      height:100%;
      background:lightblue;
      float:left;
    }
    .cbl-btn{
      width:30px;
      height:30px;
    }
  }

  .cblActive{
    right:0;
  }

</style>
