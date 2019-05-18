<template>
    <div>
      <!--<nav-header></nav-header>-->
        <div class="main">
            <p class="viewsTitle">| 学生成绩查询 |</p>
            <div class="search-con">
              <div class="left">
                <span class="small-font">学年</span>
                <template>
                  <el-select size="small" v-model="value1" placeholder="请选择">
                    <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
                <span class="small-font ml">学期</span>
                <template>
                  <el-select size="small" v-model="value2" placeholder="请选择">
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
                <el-button size="small" icon="el-icon-search" class="ml" @click="searchGrade(sid,value1,value2)">搜索</el-button>
                <el-button size="small" icon="el-icon-upload2" @click="addd">导出</el-button>
                <el-tag type="success" style="float:right">总GPA为：{{sumGpa}}</el-tag>
              </div>
            </div>
            <div class="table-con">
              <el-table
                :data="myList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                stripe
                size="mini"
                border
                style="width: 100%">
                <el-table-column
                  fixed
                  prop="cname"
                  label="课程名字"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="cnum"
                  label="课程号"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="ctype"
                  label="课程性质"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="tname"
                  label="老师名"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="credit"
                  label="学分"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="score"
                  label="成绩"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="scorelevel"
                  label="成绩等级"
                  width="120">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="100">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看成绩</el-button>
                  </template>
                </el-table-column>
              </el-table>
               <div class="block" style="margin-top:15px;">
                  <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[1,5,10,20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="myList.length">
                  </el-pagination>
              </div>
              <!-- <div class="paginationClass">
                <el-pagination
                @size-change="handleSizeChange1"
                @current-change="handleCurrentChange1" :current-page="currentPage1"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                :total="total1">
                </el-pagination>
              
              </div> -->
            </div>

        </div>
        <div v-bind:class='{"zhezhao":zhezhaoFlag}'></div>
          <el-card class="checkGrade" v-show="checkGradeFlag">
            <div slot="header" class="clearfix">
              <span>成绩信息</span>
              <el-button @click="closeCheck" size="mini" icon="el-icon-circle-close" class="closeBtn">关闭</el-button>
            </div>
            <div class="grade-item">
              <div>平时成绩：{{score1}}{{percent1}}</div>
              <div>期中/实验成绩：{{score2}}{{percent2}}</div>
              <div>期末成绩：{{score3}}{{percent3}}</div>
              <div>总成绩{{score}}</div>
            </div>
          </el-card>
    </div>
</template>

<script>
  import axios from 'axios'
  import navHeader from '@/components/NavHeader'

export default {
    data() {
      return {
        checkGradeFlag:false,
        zhezhaoFlag:false,
        myList:[],
        sumGpa:0,
        currentPage: 1, // 当前页码
            total: 20, // 总条数
            pageSize: 5, // 每页的数据条数
        checkAll:'',

        options1: [{
          value: '2016',
          label: '2016-2017'
        }, {
          value: '2017',
          label: '2017-2018'
        }, {
          value: '2018',
          label: '2018-2019'
        }, {
          value: '2019',
          label: '2019-2020'
        },
        {
          value: 'all',
          label: '全部'
        }],
        value1: '',
        options2: [{
          value: 1,
          label: '学期一'
        }, {
          value: 2,
          label: '学期二'
        }, {
          value: 3,
          label: '学期三'
        },
        {
          value: 0,
          label: '全部'
        }],
        value2: 0,
        sid:'',
        score1:'',
        score2:'',
        score3:'',
        percent1:'',
        percent2:'',
        percent3:'',
        score:''
      }
    },
  mounted() {
    this.loginFlagCsh()
  },
    methods: {
      handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.currentPage = 1;
            this.pageSize = val;
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
        },
      loginFlagCsh(){
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='1';
      },
      handleClick(row) {
        this.checkAll=row;
        console.log("成绩为："+row.grade);
        this.checkGradeFlag=true;
        this.zhezhaoFlag=true;
      },
      addd(){
        var neww={
          class_name: 'java',
          class_id: '000003',
          class_state: '必修',
          xuefen: '4',
          grade: 78,
          grade_ps: 200333,
          jidian:2.22,
          xueyuan:'信息学院',
          teacher:'王老师'
        };
        this.myList.push(neww);
      },
      closeCheck(){
        this.checkGradeFlag=false;
        this.zhezhaoFlag=false;
      },
      searchGrade(sid,value1,value2){
        // var id=this.state.id;
        var storage=window.localStorage;
        var sid=storage.getItem("user_name");
        value1=this.value1;
        value2=parseInt(this.value2);
        var mySid='2016014495';
        var sum=0;
        axios.get('/api/student/chengji/selectGrades',{
          params:{
            sid:mySid,
            year:value1,
            semester:parseInt(value2)
          }
        }).then(res=>{
          console.log(res.data);
          // console.log(res.data.data[0]);
          this.myList=res.data.data;
          this.score1=res.data.data.score1;
          // this.
          // this.myList=res.data.LIST;
          // console.log(this.myList);
          // this.myList.forEach((val,index)=>{
          //   sum+=val.jidian;
          //   console.log(val.jidian)
          // })
          // this.sumGpa=(sum/(this.myList.length)).toFixed(2);
        })
       
        
        this.sumGpa=sum;
        // alert(this.sumGpa);
        
      },
      clickTest(){
        axios.get('/test').then(res=>{
          console.log(res.data);
        })
      }

    },
  components:{navHeader}
}
</script>

<style lang='scss' scoped>
    .main{
        margin:0 auto;
        // background:yellow;
        width:80%;
        height: 100%;
        z-index:0;

    }
    .table-con{
        width: 100%;
        margin:0 auto;
        margin-top:40px;
    }
    .left{
      margin-left:0;
      // background:pink;
    }
    .search-con {
      margin-top: 30px;
      width: 100%;
    }
    .ml{
      margin-left:20px;
    }
    .checkGrade{
      width: 450px;
      height: 250px;
      background:white;
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      margin:auto;
      z-index: 5;
    }

  .zhezhao{
    background-color:black;
    position:fixed;
    width:100%;
    height:100%;
    left:0;
    top:0;
    opacity:0.5;
    z-index:4;
  }

    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }

    .box-card {
      width: 480px;
    }

    .grade-item{
      div{ 
        margin:16px 0;
      }
     
    }

</style>
