<template>
  <div>
    <div class="container">
      <div class="cbl" v-bind:class="{'cblActive':cblActive}">
        <div class="cbl-left">
          <a href="#" @click="cblClick"><img class="cbl-btn" src="../../assets/img/icon/click.png"></a>
        </div>
        <div class="cbl-right"></div>
      </div>

      <div class="dtj-box">
        <ul class="xueyuan">
          <el-button v-for="(item,index) in xueyuan" :key="index" @click="majorFlag=true;majorIndex=index">{{item}}</el-button>
        </ul>
        <ul class="zhuanye" v-show="majorFlag">
          <el-button v-for="(item,index) in major[majorIndex]" :key="index">{{item}}</el-button>
        </ul>
        <ul class="yuliang"></ul>
        <ul class="xingzhi"></ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Xk",
    data(){
      return{
        xueyuan:['信息科学与技术','经济管理','化学'],
        major:[['计算机科学与技术','信息','自动化'],['经济','商务','金融'],['高分子','高材']],
        // cblshow:false,
        cblActive: false,
        input: '',
        majorFlag:false,
        majorIndex:0
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
      },
      suiyi(){
        alert(111);
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
  .word1{
    font-size:10px;
    background:black;
    margin-top:22px;
  }
  .word2{
    font-size:10px;
    color:blue;
  }

  .dtj-box{
    ul{
      width:100%;
      height:60px;
      background:pink;
      margin:5px;
      .el-button{
        width:150px;
        height:40px;
        margin:0 5px;
        // float:left;
      }
    }

  }

</style>
