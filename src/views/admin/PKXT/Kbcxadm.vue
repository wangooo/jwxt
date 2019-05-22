<template>
  <div>
    <div class="main">
      <p class="viewsTitle">信息查询</p>
      <div class="xuenianxueqi">
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
      </div>
      <div class="line2 center">
        <span class="small-font">专业名称</span>
        <template>
          <input type="text" v-model="cmajor" style="font-size:15px;">
        </template>
        <el-button size="small" type="el-button" class="ml" icon="el-icon-search" @click="showZykb()">专业课表查询</el-button>
        <span class="small-font ml">教师工号</span>
        <template>
          <input type="text" v-model="tid" style="font-size:15px;">
        </template>
        <el-button size="small" type="el-button" class="ml" icon="el-icon-search" @click="showJskb()">教师课表查询</el-button>
      </div>
      <br>
      <div v-if="check">
        <p class="zyTitle">({{value1}}学年第{{value2}}学期)</p><p class="title1">{{cmajor}}专业</p><p align="center" class="title2">专业课表</p>
      </div>
      <div v-if="check1">
        <p class="zyTitle">({{value1}}学年第{{value2}}学期)</p><p class="title1">{{tid}}</p><p align="center" class="title2">教师课表</p>
      </div>
      <div class="kb-box" v-if="check">
        <table class="table table-bordered">
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
            <td align="center" width="70px">第{{index0+1}}节</td>
            <td width="150px" height="100px" v-for="(items,index2) in bigItem" :key="index2">
              <li><strong>{{items.cname}}</strong></li>
              <li v-if="items.cname!=''">({{items.tname}})</li>
              <li v-if="items.cname!=''">{{items.cstart}}-{{items.cend}}周</li>
              <li>{{items.classname}}</li>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="kb-box" v-if="check1">
        <table class="table table-bordered">
          <thead>
          <tr align="center">
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
          <tr v-for="(bigItem,index0) in kbTeacher" :key="index0">
            <td align="center" width="70px">第{{index0+1}}节</td>
            <td width="150px" height="100px" v-for="(items,index2) in bigItem" :key="index2">
              <li><strong>{{items.cname}}</strong></li>
              <li v-if="items.cname!=''">{{items.cstart}}-{{items.cend}}周</li>
              <li>{{items.classname}}</li>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        tid:'',
        cmajor:'',
        check:false,
        check1:false,
        kbMsgRer:[],
        kbTeacher:[],
        options1: [{
          value: '2016',
          label: '2016'
        }, {
          value: '2017',
          label: '2017'
        }, {
          value: '2018',
          label: '2018'
        }, {
          value: '2019',
          label: '2019'
        }, {
          value: '2020',
          label: '2020'
        }],
        value1: '',
        options2: [{
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }],
        value2: ''
      }
    },
    mounted() {
      this.loginFlagCsh()
      this.kebiaoCsh()
    },
    methods:{
      loginFlagCsh(){
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='老师';
      },
      kebiaoCsh(){
        var storage=window.localStorage;
        this.value1=storage.getItem('xuenianNow');
        this.value2=storage.getItem('xueqiNow');
      },
      showZykb(){
        this.check=true;
        this.check1=false;
        this.tid='';
        axios.post('/api/common/major_find_course',{
          year:this.value1,
          semester:parseInt(this.value2),
          cmajor:this.cmajor
        }).then(res=>{
          console.log(res);
          var zykb = res.data;
          var newArray=[];
          for(var i=0;i<zykb[0].length;i++){//i<13
            newArray[i]=[];
          }
          //2、先遍历旧数组，再动态添加数据
          for(var i=0;i<zykb.length;i++){//i<7

            for(var j=0;j<zykb[i].length;j++){//i<13
              //动态添加数据到arr1数组中
              newArray[j][i]=zykb[i][j];
            }
          }
          this.kbMsgRer=newArray;
        });
      },
      showJskb(){
        this.check1=true;
        this.check=false;
        this.cmajor='';
        axios.post('/api/admin/teacher_find_course',{

          year:this.value1,
          semester:parseInt(this.value2),
          tid:this.tid

        }).then(res=>{
          console.log(res);
          var jskb=res.data;
          var newArray=[];
          for(var i=0;i<jskb[0].length;i++){
            newArray[i]=[];
          }
          //2、先遍历旧数组，再动态添加数据
          for(var i=0;i<jskb.length;i++){

            for(var j=0;j<jskb[i].length;j++){
              //动态添加数据到arr1数组中
              newArray[j][i]=jskb[i][j];
            }
          }
          this.kbTeacher=newArray;
        });

      }
    }
  }
</script>

<style lang='scss' scoped>
  .main{
    width:100%;
    height: 100%;
  }
  .kb-box{
    margin:0 auto;
    margin-top:10px;
    width:90%;
  }
  .delete{
    width: 80%;
    margin:0 auto;
    margin-top:40px;
  }
  .ml{
    margin-left:30px;
  }
  .xuenianxueqi{
    margin-left:253px;
  }
  .zyTitle{
    font-size:20px;
    margin-left:60px;
  }
  .title1{
    font-size:22px;
    margin-top:-40px;
    margin-left:1145px;
  }
  .title2{
    margin-top:-40px;
    font-size:22px;
  }
  .line2{
    margin-top:10px;
  }
</style>
