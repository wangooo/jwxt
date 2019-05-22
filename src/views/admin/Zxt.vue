<template>
  <div>
    <p class="viewsTitle">| 子系统管理 |</p>
    <div class="maintable">
      <el-table
        :data="tableData"
        style="width: 100%" class="table">
        <el-table-column
          prop="name"
          label="系统名称"
          width="240">
        </el-table-column>
        <el-table-column label="使用状态" width="240">
          <template slot-scope="scope">
            <el-button type="text"  style="font-family: 'Microsoft YaHei';font-size: 20px" v-if="scope.row.pro">启用中</el-button>
            <el-button type="text" style="font-family: 'Microsoft YaHei';font-size: 20px" v-else>已停用</el-button>
          </template>
        </el-table-column>
        <el-table-column label="管理" width="240">
          <template slot-scope="scope">
            <el-switch active-color="#409EFF" inactive-color="lightgray" v-model="scope.row.pro"
                       @change="change(scope.$evnet,scope.row.pro)"></el-switch>
          </template>
        </el-table-column>


      </el-table>
    </div>
  </div>
</template>
<script>
  //  import '../../../assets/css/common.scss';
  export default{
    name:'Bs',
    data() {
      return{
        tableData:[
          {
            name:'成绩查询系统',
            pro:'true'
          },
          {
            name:'学籍管理系统',
            pro:'true'
          },
          {
            name:'教籍管理系统',
            pro:'true'
          },
          {
            name:'账号管理系统',
            pro:'true'
          },
          {
            name:'课程信息管理系统',
            pro:'true'
          }
        ]
        //msg:'金爱上',
        //value:[]
      }
    },
    mounted() {
      this.loginFlagCsh()
    },
    methods:{
      change($event,num){
        // alert(1);
        console.log($event,num);
      },
      loginFlagCsh(){
        // alert(this.value1);
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='管理员';
      }

    }
  }
</script>

<style lang='scss' scoped>
  .viewsTitle{
    font-size: 25px;
    padding-top: 20px;
  }
  .maintable{
    position: relative;
    /* left, right, bottom, top要和position一起使用，margin-*不用 */
    top: 10%;
    left: 30%;
    right: 30%;
    bottom: 30%;
    line-height: 30px;
    letter-spacing: 5px;
    font-family: "宋体";
    /*text-align: center;*/
  }
  .table{
    font-size: 20px;
    border-collapse: collapse;
    margin: auto;
    text-align: center;
  }
  .AdminBu{
    position: relative;
    /* left, right, bottom, top要和position一起使用，margin-*不用 */
    top: 10%;
    left: 50%;
    right: 25%;
    bottom: 40%;
    line-height: 50px;
    font-size: 20px;
    /*size: 70px;*/
    /*height: 30px;*/
    /*weight:30px;*/
    /*background:pink;*/
  }
  .el-switch{
    display:block
  }
</style>
