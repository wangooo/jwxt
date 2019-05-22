<template>
  <div class="main">
    <!--<nav-header></nav-header>-->

    <el-container>
      <el-aside width="400px">
          <div class="panel panel-default mypanel">
            <div class="panel-heading">
              <h3 class="panel-title">学号</h3>
            </div>
            <div class="panel-body" style="line-height:1.1">
              2016014336
            </div>
          </div>
        <div class="panel panel-default mypanel">
          <div class="panel-heading">
            <h3 class="panel-title">姓名</h3>
          </div>
          <div class="panel-body" style="line-height:1.1">
            王诗媛
          </div>
        </div>
        <div class="panel panel-default mypanel">
          <div class="panel-heading">
            <h3 class="panel-title">班级</h3>
          </div>
          <div class="panel-body" style="line-height:1.1">
            计科1603
          </div>
        </div>
        <div class="panel panel-default mypanel">
          <div class="panel-heading">
            <h3 class="panel-title">手机</h3>
          </div>
          <div class="panel-body" style="line-height:1.1">
            8008208820
          </div>
        </div>
        <div class="panel panel-default mypanel">
          <div class="panel-heading">
            <h3 class="panel-title">导员</h3>
          </div>
          <div class="panel-body" style="line-height:1.1">
            是
          </div>
        </div>


      </el-aside>
      <el-container>
        <el-header>欢迎您进入教务管理系统</el-header>
        <el-main>
          <div class="kb-box">
            <table class="table table-bordered">
              <!-- <caption>基本的表格布局</caption> -->
              <thead>
              <tr>
                <th>周一</th>
                <th>周二</th>
                <th>周三</th>
                <th>周四</th>
                <th>周五</th>
                <th>周六</th>
                <th>周日</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(bigItem,index0) in kbMsgRer" :key="index0">
                <td v-for="(items,index2) in bigItem" :key="index2">
                  <li>{{items.tcname}}</li>
                  <li>{{items.ttname}}</li>
                  <!--<li>教室：{{items.place}}</li>-->
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </el-main>
        <el-footer>当前教学周：{{xingqinow}}</el-footer>
      </el-container>
    </el-container>

  </div>


</template>

<script>
  import axios from 'axios'
  import navHeader from '@/components/NavHeader'
  //import NavHeader from '../../components/NavHeader'
  // import Footer from './../components/Footer'

  export default {
    name:'Index',
    data(){
      return{
        xingqinow:'第一周',
        list:[],
        studentIdd:this.$route.params.studentId,
        kbMsgRer:[],
        kbMsg:[[{
          name:'数据结构00',
          teacher:'万静',
          place:'B201'
        },
          {
            name:'大雾01',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {}],
          [{
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {
              name:'数据结构',
              teacher:'万静',
              place:'B201'
            },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {
              name:'数据结构',
              teacher:'万静',
              place:'B201'
            },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {}],
          [{
            name:'数据结构03',
            teacher:'万静',
            place:'B201'
          },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {
              name:'数据结构',
              teacher:'万静',
              place:'B201'
            },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {
              name:'数据结构',
              teacher:'万静',
              place:'B201'
            },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {}],
          [{
            name:'数据结构04',
            teacher:'万静',
            place:'B201'
          },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {
              name:'数据结构',
              teacher:'万静',
              place:'B201'
            },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {
              name:'数据结构',
              teacher:'万静',
              place:'B201'
            },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {}],
          [{
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {
              name:'数据结构',
              teacher:'万静',
              place:'B201'
            },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {
              name:'数据结构',
              teacher:'万静',
              place:'B201'
            },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {}],
          [{
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {
              name:'数据结构',
              teacher:'万静',
              place:'B201'
            },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {
              name:'数据结构',
              teacher:'万静',
              place:'B201'
            },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {}],
          [{
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {
              name:'数据结构',
              teacher:'万静',
              place:'B201'
            },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {
              name:'数据结构',
              teacher:'万静',
              place:'B201'
            },
            {
              name:'大雾',
              teacher:'张',
              place:'B202'
            },
            {
              name:'人工智能',
              teacher:'刘',
              place:'B203'
            },
            {

            },
            {}]]

    }
    },
    mounted() {
      this.loginFlagCsh(),
        this.trya()
    },
    methods:{
      loginFlagCsh(){
        var reversedArr = [];

        for(var n = 0; n < this.kbMsg[0].length; n++) {

          reversedArr[n] = [];

          for(var j = 0; j < this.kbMsg.length; j++) {

            reversedArr[n][j] = this.kbMsg[j][n];

          }

        }
        this.kbMsgRer=reversedArr;

        this.$store.state.loginFlag=true;
        this.$store.state.userJob='学生';
      },
      trya(){
        var sid='2016014359';
        // alert(11);
        this.axios.get('api/student/xuanke/getStudentInformation',{
          params:{
            sid:sid
          }
        }).then(res=>{
          console.log(res);
          this.list=res.data.data;
          console.log(res.data.data)
        })
      }

    }


  }

</script>

<style lang='scss' scoped>
  .main{
    margin:0 auto;
    // background:#409EFF;
    width:100%;
    height: 100%;
  }

  .container{
    /*height:100%;*/
    /*background:pink;*/
    font-size:14px;
    font-weight: normal;
    /*width:50%;*/
    .mytable{
      /*background:pink;*/
      /*width:100%;*/
      /*height:100%;*/
      /*display:block;*/
    }
     }
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    text-align: center;
    line-height: 60px;
    text-align:center;
  }
  .el-header{
    color:#409EFF;
    font-size:25px;
    font-family:Hiragino Sans GB;
  }

  .el-aside {
    position:relative;
    background-color: rgba(208, 222, 230, 0.47);
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: rgba(233, 238, 243, 0.36);
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .panel{
    margin:20px;
  }
</style>
