<template>
  <div>
    <!--<nav-header></nav-header>-->
    <div class="main">
      <p class="viewsTitle">| 账号查询 |</p>
      <div>
      <div class="search-con one"  >
        <div class="left">
          <span class="small-font">账号</span>
          <template>
            <el-input v-model="id" style="display: inline-block;width:40%" size="small"
                      placeholder="请输入搜索内容">
            </el-input>
          </template>
          <el-button size="small" icon="el-icon-search" class="ml" @click="search()">搜索</el-button>
        </div>
      </div>
      <div class="table-con two">
        <el-table
          :data="list"
          border
          style="width: 75%">
          <el-table-column
            fixed
            prop="id"
            label="账号"
            width="120">
          </el-table-column>
          <!--<el-table-column-->
            <!--prop="password"-->
            <!--label="密码"-->
            <!--width="120"-->
            <!--v>-->
          <!--</el-table-column>-->
          <el-table-column
            prop="nature"
            label="性质"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div >
        <div style="left:20%">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
        </div>
      </div>
    </div>
    <div v-bind:class='{"zhezhao":zhezhaoFlag}'></div>
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
            id: '2016014338',
            // password: '970522',
            nature: '管理员',
          },
          {
            id: '2016014343',
            // password: '000000',
            nature: '沙雕',
          }],
        id:'',
        checkAll:'',
        value1: '',
        flag:'',
        flag1:'',
        value2: ''
      }
    },
    mounted() {
      this.loginFlagCsh()
    },
    methods: {
      search(){
        let param=new URLSearchParams();
        param.append("id",this.ID);
        alert(this.ID);

       this.axios.post('api/common/houtai/FindZhanghao',param).then(res=>{
         console.log(res.data);
         this.list=res.data;
         // alert(res.data());
       })

      },
      loginFlagCsh(){
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='管理员';
      },
      handleClick(row){
        let param=new URLSearchParams();
       param.append("id",row.id);
         alert(row.id);

        this.axios.post('api/common/houtai/DeleteZhanghao',param).then(res=>{
          // console.log(res.data);
          this.flag1=res.data;
          alert(res.data);
          // alert(res.data());
        })
      }
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

    // components:{navHeader}
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
    /**/
    width:30%;
    margin:0 auto;
    margin-top:40px;

  }
  .search-con {
    margin-top: 70px;
    width: 30%;
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

  .one{
    /*background:pink;*/
    margin:0 auto;
  }
  .left{
    margin-top:100px;
  }
</style>
