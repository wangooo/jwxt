<template>
    <div>
      <!--<nav-header></nav-header>-->
        <div class="main">
            <p class="viewsTitle">| 学生成绩查询 |</p>
            <div class="search-con center">
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
                <el-button size="small" icon="el-icon-search" class="ml">搜索</el-button>
                <el-button size="small" icon="el-icon-upload2" @click="addd">导出</el-button>
              </div>
            </div>
            <div class="table-con">
              <el-table
                :data="list"
                border
                style="width: 100%">
                <el-table-column
                  fixed
                  prop="class_name"
                  label="课程名字"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="class_id"
                  label="课程代码"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="class_state"
                  label="性质"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="xuefen"
                  label="学分"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="grade"
                  label="成绩"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="grade_ps"
                  label="成绩备注"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="jidian"
                  label="绩点"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="xueyuan"
                  label="开课学院"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="teacher"
                  label="任课教师"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="xx"
                  label="xxxx"
                  width="100">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="100">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>

        </div>
        <div v-bind:class='{"zhezhao":zhezhaoFlag}'></div>
        <!--<div class="checkGrade" v-show="checkGradeFlag">-->
          <!--<el-button @click="closeCheck" size="mini" icon="el-icon-circle-close" class="closeBtn">关闭</el-button>-->
          <!--<ul>-->
            <!--<li>{{checkAll.class_id}}</li>-->
            <!--<li>{{checkAll.class_state}}</li>-->
            <!--<li>{{checkAll.xuefen}}</li>-->
            <!--<li>{{checkAll.grade}}</li>-->
            <!--<li>{{checkAll.grade_ps}}</li>-->
          <!--</ul>-->
          <el-card class="checkGrade" v-show="checkGradeFlag">
            <div slot="header" class="clearfix">
              <span>所有信息</span>
              <el-button @click="closeCheck" size="mini" icon="el-icon-circle-close" class="closeBtn">关闭</el-button>

            </div>
            <div class="text item">
              {{'课程名字 ' + checkAll.class_name }}
              <br>
              {{'课程id ' + checkAll.class_id }}
              <br>
              {{'课程代码 ' + checkAll.class_state }}
              <br>
              {{'学分 ' + checkAll.xuefen }}
              <br>
              {{'列表内容 ' + checkAll.grade }}
              <br>
              {{'列表内容 ' + checkAll.grade_ps }}
              <br>
              {{'列表内容 ' + checkAll.jidian }}
              <br>
              {{'列表内容 ' + checkAll.xueyuan }}
            </div>
          </el-card>
        <!--</div>-->

    </div>
</template>

<script>

  import navHeader from '@/components/NavHeader'

export default {
    data() {
      return {
        checkGradeFlag:false,
        zhezhaoFlag:false,
        list:[
          {
          class_name: '高数',
          class_id: '000001',
          class_state: '必修',
          xuefen: '4',
          grade: 78,
          grade_ps: 200333,
          jidian:2.22,
          xueyuan:'信息学院',
          teacher:'王老师',
          xx:'111'
        },
          {
            class_name: '大雾',
            class_id: '000002',
            class_state: '必修',
            xuefen: '2',
            grade: 70,
            grade_ps: 20022233,
            jidian:2.62,
            xueyuan:'信息学院',
            teacher:'张老师',
            xx:'222'
          }],
        checkAll:'',

        options1: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: '',
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2: ''
      }
    },
  mounted() {
    this.loginFlagCsh()
  },
    methods: {
      loginFlagCsh(){
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='1';
      },
      handleClick(row) {
        alert(this.$store.state.userJob);
        this.checkAll=row;
        console.log(row);
        this.checkGradeFlag=true;
        this.zhezhaoFlag=true;
      },
      addd(){
        var neww={class_name: 'java',
          class_id: '000003',
          class_state: '必修',
          xuefen: '4',
          grade: 78,
          grade_ps: 200333,
          jidian:2.22,
          xueyuan:'信息学院',
          teacher:'王老师',
          xx:'111'
        };
        this.list.push(neww);
      },
      closeCheck(){
        this.checkGradeFlag=false;
        this.zhezhaoFlag=false;
      }
    },
  components:{navHeader}
}
</script>

<style lang='scss' scoped>
    .main{
      /*background:yellow;*/
        width:100%;
        height: 100%;
      z-index:0;
    }
    .table-con{
        width: 80%;
        margin:0 auto;
        margin-top:40px;

    }
    .search-con {
      margin-top: 30px;
      width: 80%;
    }
    .ml{
      margin-left:20px;
    }
    .checkGrade{
      width: 400px;
      height: 400px;
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

</style>
