<template>
<div>
    <div class="main">
        <p class="viewsTitle">| 教师信息修改 |</p>
        <br>
        <div class = "xgxx">
        <el-button @click="btnClick()">修改个人信息</el-button>
        </div>
        <div class = "xx">
          <p>工号:{{teacher.tid}}</p>
          <el-input size="small" v-model="teacher.tid" v-show="flag" placeholder="teacher.tid"></el-input>
        </div>
        <br>
        <div class = "xx">
          <p>姓名：{{teacher.tname}}</p>
          <el-input size="small" v-model="teacher.tname" v-show="flag" placeholder="teacher.tname"></el-input>
        </div>
        <br>
        <div class = "xx">
          <p>学院:{{teacher.tcollege}}</p>
          <el-input size="small" v-model="teacher.tcollege" v-show="flag" placeholder="teacher.tcollege"></el-input>
        </div>
        <br>
        <div class = "xx">
          <p>职位:{{teacher.post}}</p>
          <el-input size="small" v-model="teacher.post" v-show="flag" placeholder="teacher.post"></el-input>
        </div>
        <br>
        <div class = "xx">
          <p>邮箱：{{teacher.tmail}}</p>
          <el-input size="small" v-model="teacher.tmail" v-show="flag" placeholder="teacher.tmail"></el-input>
        </div>
        <br>
        <div class="xx">
          <p>政治面貌:{{teacher.tpol}}</p>
          <el-input size="small" v-model="teacher.tpol" v-show="flag" placeholder="teacher.tpol"></el-input>
        </div>
        <br>
        <div class = "xx">
          <p>手机号：{{teacher.ttel}}</p>
          <el-input size="small" v-model="teacher.ttel" v-show="flag" placeholder="teacher.ttel"></el-input>
        </div>
        <p>
          <br>
    <el-button class="qr" @click="btnClick1()" v-show="flag">确定</el-button>
    <el-button class="qx" @click="btnClick2()" v-show="flag">取消</el-button>
    <br></p>
    </div>

</div>
</template>


<script>
  import axios from 'axios'
  import NavHeaderAdmin from '@/components/NavHeaderAdmin'

  export default {
    data() {
    return {
      flag:false,
      teacher:{
          tid:"01",
          tname:"那谁",
          tcollege:"信息学院",
          post:"教授",
          tmail:"111",
          tpol:"党员",
          ttel:"手机号",
      }
    }
    },
    mounted() {
      this.loginFlagCsh()
    },
    methods:{
      btnClick(){
          this.flag=true
      },
      btnClick1(){
          this.flag=false
          alert("信息修改成功");
      },
      btnClick2(){
          this.flag=false
      },
      loginFlagCsh(){
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='管理员';
      },
    }
    // components:{NavHeader}
  }


</script>

<style scoped lang="scss">

  .xgxx{
  margin-left:75%;
}
.anniu{
     margin-left:45%;
}
  .xx{
  width: 25%;
  margin-left:10%;
}
  .qr{
  margin-left:45%;
  float:left;margin-right:15px;
}
  .qx{
  float:left;
}
  .every-class{
    margin-top:2px;
    background:rgba(173,216,230,0.6);

    width:140px;
    height:100px;
  }
</style>
