<template>
  <div>
    <p class="viewsTitle">手动搜索排课</p><br>
    <div class="center">
      教师工号：<input type="text" v-model="tid" style="font-size:20px;">
      <el-button type="el-button" size="small" @click="search()">确定</el-button>
    </div>
    <!--<div v-if="isshow">
            <h3 class="h3-result">重排结果如下：</h3>
            <p class="result">教师工号：{{tid}}<br>教师名：{{teachername}}<br>任课名称：{{cname}}<br>任课时间:{{myList}}<br>面向专业：{{zyname}}</p>
        </div>-->
    <div v-if="isshow" class="left center">
      <el-table
        :data="myList1"
        stripe
        border
        style="width: 80%">
        <el-table-column
          fixed
          prop="id"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="tid"
          label="教师工号">
        </el-table-column>
        <el-table-column
          prop="tname"
          label="教师名">
        </el-table-column>
        <el-table-column
          prop="cname"
          label="课程名">
        </el-table-column>
        <el-table-column
          prop="time1"
          label="上课时间1"
          width="150px">
        </el-table-column>
        <el-table-column
          prop="time2"
          label="上课时间2"
          width="150px">
        </el-table-column>
        <el-table-column
          prop="classname"
          label="上课地点"
          width="150px">
        </el-table-column>
        <el-table-column
          prop="cmajor"
          label="面向专业">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="cp(scope.row)" type="text" size="small">重新排课</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "admin",
    data(){
      return{
        myList:[],
        myList1:[],
        isshow:false,
        tid:''
      }
    },
    mounted() {
      this.loginFlagCsh()
    },
    methods:{
      loginFlagCsh(){
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='管理员';
      },
      search(){
        this.isshow=true;
        alert(this.tid);
        axios.post('/api/admin/sdpk_tid',{
          tid:this.tid
        }).then(res=>{
          console.log(res);
          this.myList1 = res.data;
        });
      },
      cp(row){
        var iscp=confirm("是否要重新排课？");
        var timef;
        if(iscp)
        {
          const loading = this.$loading({
            lock: true,
            text: '正在重新排课，请稍等...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(() => {
            loading.close();
          }, 2100);
          axios.post('/api/admin/sdpk_choose',{
            // cname:row.cname,
            id:row.id,
            tid:row.tid
          }).then(res=>{
            console.log(res);
            alert("重新排课成功！\n"+"新上课时间1："+res.data.data[0].time1+
              "\n"+"新上课时间2："+res.data.data[0].time2+"\n"+"新上课地点："+res.data.data[0].classname);
          });
        }
      }
    }
  }
</script>
<style lang='scss' scoped>
  .result{
    text-align:left;
    margin-left:550px;
    margin-top:25px;
  }
  .h3-result{
    text-align:center;
    margin-top:30px;
  }
  .left{
    margin-left:150px;
    margin-top:30px;
  }
</style>
