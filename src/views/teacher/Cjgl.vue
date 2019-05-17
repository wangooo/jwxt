<template>
    <div>
      <div class="container">
        <p class="viewsTitle">|    成绩管理    |</p>
        <div>
          <div class="select-box">
            <span>请选择学年：</span>
            <template>
              <el-select size="mini" v-model="xuenian" placeholder="请选择">
                <el-option
                  v-for="item in xuenians"
                  :key="item.xuenianTime"
                  :label="item.xuenianTime"
                  :value="item.xuenianTime">
                </el-option>
              </el-select>
            <span style="margin-left:20px">请选择学期：</span>
              <el-select size="mini" v-model="xueqi" placeholder="请选择">
                <el-option
                  v-for="item in xueqis"
                  :key="item.xueqiTime"
                  :label="item.xueqiTime"
                  :value="item.xueqiTime">
                </el-option>
              </el-select>
            </template>
            <el-button @click="findCoursesByXuenianXueqi" size="mini" style="margin-left:20px;margin-bottom:20px;">确定</el-button>
            <br>

            <div v-show="flag2">
            <span >请选择所教课程：</span>
              <el-select size="mini" v-model="course" placeholder="请选择">
                <el-option
                  v-for="item in courseList"
                  :key="item.cid"
                  :label="item.cmajor+item.cname"
                  :value="item.cid">
                </el-option>
              </el-select>
              <el-button size="mini" @click="gradeSet">确定</el-button>
              <!-- <span>请选择成绩个数：</span>
              <el-select size="mini" v-model="value2" placeholder="请选择">
                <el-option
                  v-for="item in options2"
                  :key="item.classId"
                  :label="item.classNamee"
                  :value="item.classId">
                </el-option>
              </el-select> -->
            </div>
          </div>
          <div class="input-box" v-show="percentFlag" style="margin:20px 0 30px 0;">
            平时成绩:<el-input size="mini" :disabled="disFlag" v-model="gradePercent1"></el-input>
            实验成绩:<el-input size="mini" :disabled="disFlag" v-model="gradePercent2"></el-input>
            期末成绩:<el-input size="mini" v-model="gradePercent3"></el-input>
            <el-button size="mini" @click="percentChange">确定修改</el-button>
            <!-- <el-input size="mini" v-for="(item,index) in parseInt(value2)" :key="index" v-model="grade[index]"></el-input> -->
          </div>
          <!-- <el-button size="mini" style="margin-left:20px;" @click="gradeBiliCheck">确定</el-button>
          <el-button size="mini" style="margin-left:20px;" @click="gradeBiliCheck">重置</el-button> -->
        </div>

        <div class="studentmsg-box">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>姓名</th>
                <th>学号</th>
                <th>班级</th>
                <th>专业</th>
                <th>成绩1</th>
                <th v-if="!disFlag">成绩2</th>
                <th v-if="!disFlag">成绩3</th>
                <th>总成绩</th>
                <th v-if="!disFlag">成绩等级</th>
                <th>操作</th>
              </tr>
          </thead>
            <tbody>
              <tr v-for="(item,index) in studentsList" :key="index" class="tr">
                <td>{{item.sname}}</td>
                <td>{{item.sid}}</td>
                <td>{{item.sclass}}</td>
                <td>{{item.smajor}}</td>
                <td><el-input v-model="item.grade1" size="mini" autosize></el-input></td>
                <td v-if="!disFlag"><el-input v-model="item.grade2" size="mini" autosize></el-input></td>
                <td v-if="!disFlag"><el-input v-model="item.grade3" size="mini" autosize></el-input></td>
                <td>{{item.gradesum}}</td>
                <td v-if="item.gradesum>=80">A</td>
                <td v-else-if="item.gradesum>=60&&item.gradesum<80">B</td>
                <td v-else-if="item.gradesum<60">不合格</td>
                <td><el-button @click="changeStudentGrade(index)" size="mini">确定修改</el-button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>

    // import axios from 'axios'

    export default {
      data() {
        return {
          grade:[],
          gradeByCheck:0,
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
          course: '',
          courseList: [],
          options2: [{
            classId: '1',
            classNamee: '1'
          },
            {
              classId: '2',
              classNamee: '2'
            },
            {
              classId: '3',
              classNamee: '3'
            },
            {
              classId: '4',
              classNamee: '4'
            },],
          value2: '1',
          courseType:'',
          disFlag:false,
          gradePercent1:'',
          gradePercent2:'',
          gradePercent3:'',
          percentFlag:false,
          studentsList:[],
          flag2:false,
          fDisabled:false
        }
      },
        name: "Cjgl",
        mounted() {
          this.loginFlagCsh()
        },
        methods:{
          loginFlagCsh(){
            var storage=window.localStorage;
            this.xuenian=storage.getItem('xuenianNow');
            this.xueqi=storage.getItem('xueqiNow');
            this.$store.state.loginFlag=true;
            this.$store.state.userJob='2';
          },
          gradeBiliCheck(){
            var len=this.grade.length;
            var sum=0;
            if(len==this.value2){
              this.grade.forEach((val,index)=>{
                console.log(val,index);
                sum+=parseInt(val);
              })
              if(sum!=100){
                alert(sum+"请输入正确比例，使它们相加为100！");
              }
              else{
                alert("输入成功!");
                this.gradeByCheck=len;
              }
            }
            else{
              alert("请输入完整！");
            }
          },
          findCoursesByXuenianXueqi(){
            this.flag2=true;
            var list=[];
            this.axios.get('/teacher/findCoursesByXuenianXueqi').then(res=>{
              list=res.data.findCourses;
              console.log(list);
              this.courseList=list;
            })
          },
          gradeSet(){
            // alert(this.course);
            this.courseList.forEach((val,index)=>{
              console.log(val,index);
              if(val.cid==this.course){
                this.courseType=val.ctype;
                this.gradePercent1=val.cgrade_1;
                this.gradePercent2=val.cgrade_2;
                this.gradePercent3=val.cgrade_3;
              }
            })
            if(this.courseType.toString()=='0'){
              this.disFlag=true;
            }
            else{
              this.disFlag=false;
            }
            this.percentFlag=true;
            var stusList=[];
            // alert(this.courseType);
            this.axios.get('/teacher/getStudentByCname').then(res=>{
              stusList=res.data.studentsList;
              this.studentsList=stusList;
              console.log(stusList);
            })
          },
          percentChange() {
            if(parseInt(this.gradePercent1)+parseInt(this.gradePercent2)+parseInt(this.gradePercent3)==100){
             this.$confirm('此操作将修改所有学生成绩, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '修改成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消修改'
              });          
            });
            }
            else{
              alert("请确保百分比只和为100！");
            }
          },
          changeStudentGrade(index){
            // alert(index);
            console.log(this.studentsList[index].grade1,this.studentsList[index].grade2,this.studentsList[index].grade3);
            this.studentsList[index].gradesum=(this.studentsList[index].grade1*this.gradePercent1*0.01+this.studentsList[index].grade2*this.gradePercent2*0.01+this.studentsList[index].grade3*this.gradePercent3*0.01).toFixed(2);
          }
    },
  }
</script>

<style scoped lang="scss">
.select-box,.input-box{
  float:left;
  // background:pink;
  .el-input{
    width:140px;
    margin:0 40px 0 20px;
  }
}
.tr{
  .el-input{
    width:80px;
  }
}
</style>
