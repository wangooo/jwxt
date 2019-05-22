<template>
  <div>
    <p class="viewsTitle">| 学籍添加 |</p>
<!--    <el-container class="first1">-->
      <el-container class ="second1">
              <el-main class="third">
                <div>
                  <el-input placeholder="请输入内容" v-model="input1">
                    <template slot="prepend">学号</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input2">
                    <template slot="prepend">姓名</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input3">
                    <template slot="prepend">状态</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input4">
                    <template slot="prepend">性别</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input5">
                    <template slot="prepend">班级</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input6">
                    <template slot="prepend">专业</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input7">
                    <template slot="prepend">学院</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input8">
                    <template slot="prepend">籍贯</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input9">
                    <template slot="prepend">户口</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input10">
                    <template slot="prepend">邮箱</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input11">
                    <template slot="prepend">政治面貌</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input12">
                    <template slot="prepend">手机号</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input13">
                    <template slot="prepend">入学时间</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input14">
                    <template slot="prepend">毕业时间</template>
                  </el-input>
                </div>
                <br>
                <div>
                  <el-input placeholder="请输入内容" v-model="input15">
                    <template slot="prepend">生日</template>
                  </el-input>
                </div>
        </el-main>
        <el-footer class="footer">
          <el-row>
            <el-button type="primary" @click="submit()">提交</el-button>
            <el-button type="success">从文件导入</el-button>
          </el-row>
        </el-footer>
      </el-container>
<!--    </el-container>-->
  </div>

</template>

<script>
    export default {
      name: "Xjtj",
      data() {
        return {
          input1: '2012212112198',
          input2: '111',
          input3: '111',
          input4: '11',
          input5: '11',
          input6: '1',
          input7: '1',
          input8: '1',
          input9: '1',
          input10: '1',
          input11: '1',
          input12: '1',
          input13: '1',
          input14: '1',
          input15: "1997-5-22",
          flag:'1',
          // select: '',
          // tableData: Arr+ay(20).fill(item)

        }

      },
      mounted() {
        this.loginFlagCsh();
      },
      methods:{
        loginFlagCsh(){
          this.$store.state.loginFlag=true;
          this.$store.state.userJob='管理员';
        },
        submit(){

          this.axios.get('api/student/houtai/Addstudent',{
            params:{
              sid:this.input1,
              sname:this.input2,
              ssta: this.input3,
              ssex:this.input4 ,
              sclass:this.input5 ,
              major: this.input6 ,
              scollege:this.input7,
              snat: this.input8 ,
              sres:this.input9 ,
              smail:this.input10,
              spol:this.input11 ,
              stel:this.input12 ,
              sin:this.input13,
              sout:this.input14 ,
              sbir:this.input15 ,
            }
          }).then(res=>{
            alert(11);
            console.log(res.data);
            this.flag=res.code;
          })
        }
      }
    }
</script>

<style scoped>
  /*test*/
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .first1{
    position: absolute;
    display:flex;;
    justify-content: center;
  }
  .second1{
    position: fixed;
    top:20%;
    left:30%;
    bottom:30%;
    width: 600px;
    height: 550px;
  }
  .third1{
    position:fixed;
    width: 600px;
    /*height:400px;*/
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .footer{
    line-height: 80px;
  }
</style>
