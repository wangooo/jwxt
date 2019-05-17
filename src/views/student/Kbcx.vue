<template>
    <div class="kbcx">
      <p class="viewsTitle">| 个人课表查询 |</p>
      <div class="kb-box">
            <span>请选择学年：</span>
            <el-select size="mini" v-model="xuenian" placeholder="请选择">
              <el-option
                v-for="item in xuenians"
                :key="item.xuenianTime"
                :label="item.xuenianTime"
                :value="item.xuenianTime">
              </el-option>
              </el-select>
            <span>请选择学期：</span>
            <el-select size="mini" v-model="xueqi" placeholder="请选择">
              <el-option
                v-for="item in xueqis"
                :key="item.xueqiTime"
                :label="item.xueqiTime"
                :value="item.xueqiTime">
              </el-option>
            </el-select>
            <el-button size="mini" @click="searchKbById">确定</el-button>
            <!-- <Kebiao class="Kebiao" v-show="kbFlag"></Kebiao> -->
      </div>
      <div class="kb-box">
        <table class="table table-bordered">
          <!-- <caption>基本的表格布局</caption> -->
          <thead>
              <tr>
                <th></th>
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
              <td>第{{index0+1}}节课</td>
              <td v-for="(items,index2) in bigItem" :key="index2">
                <li>课程：{{items.name}}</li>
                <li>老师：{{items.teacher}}</li>
                <li>教室：{{items.place}}</li>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>
    </div>
</template>

<script>
  import axios from 'axios' 
  import NavHeader from '@/components/NavHeader'
  // import Kebiao from '@/components/Kebiao'
export default {
    data(){
      return{
        kbMsg:[],
        kbMsgRer:[],
        xuenians: [{
            xuenianTime: '2016-2017'
          },
            {
            xuenianTime: '2018-2019'
          },
          {
            xuenianTime: '2019-2020'
          }],
          xuenian:'',
          xueqis: [{
            xueqiTime: '1'
          },
            {
            xueqiTime: '2'
          },
          {
            xueqiTime: '3'
          }],
          xueqi:'',
          kbFlag:false,
      }
    },
    mounted() {
      this.loginFlagCsh()
      this.kebiaoCsh()
    },
    methods:{
      loginFlagCsh(){
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='1';
      },
      kebiaoCsh(){
        var storage=window.localStorage;
        this.xuenian=storage.getItem('xuenianNow');
        this.xueqi=storage.getItem('xueqiNow');
        // axios.get('/student/kbcxByNow').then(res=>{
        //   // console.log(res.data.studentKb);
        //   this.$store.commit('getStudentKb',res.data.studentKb);
        // })
      },

      searchKbById(){
        this.kbFlag=true;
        axios.get('/student/kbcxById',{
          params:{
            is:'11'
          }
        }).then(res=>{
          // console.log(res.data.studentKbById);
          console.log(res);
          this.$store.commit('getStudentKb',res.data.studentKbById);
          this.$forceUpdate();
          var storage=window.localStorage;
          // var studentKb=JSON.parse(storage.getItem('student_kb'));
          var studentKb=this.$store.state.studentKb;
          console.log(studentKb);
          var newArray=[];
          for(var i=0;i<studentKb[0].length;i++){
              newArray[i]=[];
          }
          //2、先遍历旧数组，再动态添加数据
          for(var i=0;i<studentKb.length;i++){
              
              for(var j=0;j<studentKb[i].length;j++){
                  //动态添加数据到arr1数组中
                  newArray[j][i]=studentKb[i][j];
              }
          }
          this.kbMsgRer=newArray;
        })
      }
    },
  // components:{Kebiao}
}
</script>

<style scoped lang="scss">
  .kb-box{
    margin:0 auto;
    margin-top:30px;
    width:80%;
  }
  .box1{
    float:left;
    margin-left:10px;
    ul{
      border:1px solid powderblue;
    }
  }
  .every-class{
    margin-top:2px;
    background:rgba(173,216,230,0.6);

    width:140px;
    height:100px;
  }
</style>
