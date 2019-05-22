<template>
  <div>
    <div class="main">
      <p class="viewsTitle">| 学生信息修改 |</p>

      <div class = "xgxx">
        <el-button @click="btnClick()">修改个人信息</el-button>
      </div>

      <div class = "xxz">
        <p>学号:{{student.sid}}</p>
        <el-input size="small" v-model="student.sid" v-show="flag" placeholder="student.sid"></el-input>
      </div>

      <div class = "xxy">
        <p>姓名：{{student.sname}}</p>
        <el-input size="small" v-model="student.sname" v-show="flag" placeholder="student.sname"></el-input>
      </div>
      <br>

      <div class = "xxz">
        <p>状态：{{student.ssta}}</p>
        <el-input size="small" v-model="student.ssta" v-show="flag" placeholder="student.ssta"></el-input>
      </div>

      <div class = "xxy">
        <p>性别:{{student.ssex}}</p>
        <el-input size="small" v-model="student.ssex" v-show="flag" placeholder="student.ssex"></el-input>
      </div>

      <div class = "xxz">
        <p>班级:{{student.sclass}}</p>
        <el-input size="small" v-model="student.sclass" v-show="flag" placeholder="student.sclass"></el-input>
      </div>

      <div class = "xxy">
        <p>专业:{{student.major}}</p>
        <el-input size="small" v-model="student.major" v-show="flag" placeholder="student.major"></el-input>
      </div>

      <div class = "xxz">
        <p>学院:{{student.scollege}}</p>
        <el-input size="small" v-model="student.scollege" v-show="flag" placeholder="student.scollege"></el-input>
      </div>

      <div class="xxy">
        <p>政治面貌:{{student.spol}}</p>
        <el-input size="small" v-model="student.spol" v-show="flag" placeholder="student.spol"></el-input>
      </div>

      <div class = "xxz">
        <p>籍贯:{{student.snat}}</p>
        <el-input size="small" v-model="student.snat" v-show="flag" placeholder="student.snat"></el-input>
      </div>

      <div class = "xxy">
        <p>邮箱:{{student.smail}}</p>
        <el-input size="small" v-model="student.smail" v-show="flag" placeholder="student.smail"></el-input>
      </div>

      <div class = "xxz">
        <p>手机号：{{student.stel}}</p>
        <el-input size="small" v-model="student.stel" v-show="flag" placeholder="student.stel"></el-input>
      </div>

      <div class = "xxy">
        <p>入学时间:{{student.sin}}</p>
        <el-input size="small" v-model="student.sin" v-show="flag" placeholder="student.sin"></el-input>
      </div>

      <p>
        <br>
        <br>
        <el-button class="qr" @click="btnClick1()" v-show="flag">确定</el-button>
        <el-button class="qx" @click="btnClick2()" v-show="flag">取消</el-button>
      </p>
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
        student:{
          sid:"01",
          sname:"那谁",
          ssta:"未注册",
          ssex:"男",
          sclass:"计科1603",
          major:"计科",
          scollege:"星系学院",
          snat:"汉",
          sres:"湖北",
          smail:"111",
          spol:"团员",
          stel:"111",
          sin:"2019",
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
        var sudo=localStorage.getItem('login_if');
        if(!sudo){
          alert('请登陆！');
          this.$router.push({path:'/'});
        }
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
  .qr{
    margin-left:41.5%;
    float:left;margin-right:15px;
  }
  .qx{
    float:left;
  }
  .xxz{
    margin-left:15%;
    width: 25%;
    float:left;margin-right:200px;
  }
  .xxy{
    width: 25%;
    float:left;
  }
  .every-class{
    margin-top:2px;
    background:rgba(173,216,230,0.6);

    width:140px;
    height:100px;
  }
</style>
