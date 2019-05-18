<template>
  <div class="Land">
    <div class="loginTitle">学生教务系统</div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="60px" class="demo-ruleForm">
      <el-form-item prop="name" label="账号">
        <el-input v-model="ruleForm2.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <div class="dxkBox">
        <!--<el-radio v-model="studentJob" label="1">学生</el-radio>-->
        <!--<el-radio v-model="$store.state.userJob" label="2">老师</el-radio>-->
        <!--<el-radio v-model="$store.state.userJob" label="3">管理员</el-radio>-->
        <el-radio label="1" v-model="radio">学生</el-radio>
        <el-radio label="2" v-model="radio">老师</el-radio>
        <el-radio label="3" v-model="radio">管理员</el-radio>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        // studentJob:'1',
        radio:'1',
      //   ymUserJob:  his.$store.state.userJob,
        ruleForm2: {
          pass: '',
          name: ''
        },
        rules2: {
          pass: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
          name: [{required: true, message: '不能为空', trigger: 'blur'},
            {pattern: /^\d+$/, message: '用户名只能为学号', trigger: 'blur'}],
        }
      };
    },
    mounted:function(){
      this.loginFlagCsh()
    },
    methods: {
      loginFlagCsh(){
        this.$store.state.loginFlag=false;
        console.log(this.$store.state.loginFlag);
      },
      submitForm(formName) {
        // alert(this.radio);
        this.$refs[formName].validate((valid) => {
          if (valid&&this.ruleForm2.name=='123'&&this.ruleForm2.pass=='123') {

            localStorage.setItem('xuenianNow', this.$store.state.xuenianNow);
            localStorage.setItem('xueqiNow', this.$store.state.xueqiNow);
            // alert(this.$store.state.xuenianNow);

            this.$store.commit('handleUserJob',this.radio);
            var storage=window.localStorage;
            this.$store.commit('handleUserJob',this.radio);
            console.log('此时vuex中user_jpb为 : '+this.$store.state.userJob);
            console.log('存入user_job : '+storage.getItem("user_job"))
            if(this.radio=='1'){
              alert('学生身份进入');
               this.$router.push({path:'/index'})
            }
            if(this.radio=='2'){
              alert("老师身份进入")

              this.$router.push({path:'/teacher'})
            }
            // if(this.$store.state.userJob=='3'){
            if(this.radio=='3'){
              alert("管理员身份进入")
              this.$router.push({path:'/admin'})
            }

            this.$store.state.loginFlag=true;
            console.log(this.$store.state.loginFlag);

            // localStorage.setItem('token',res.data.token)
            // 将登录名使用vuex传递到Home页面
            console.log('存入user_name : '+storage.getItem("user_name"))
            this.$store.commit('handleUserName',this.ruleForm2.name);

          } else {
            alert('密码错误');
            // return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="scss">
  html,body{
    width:100%;
    height:100%;
    /*background: url(../../build/beijin.jpg) no-repeat;*/
    background-size: 100% 100%;

  }
  #app .topzi{
    font-size: 40px;
    margin-bottom: 20px;
  }
  #app .Land{
    min-width:400px;
    background:rgba(100,149,237,0.5);
    width: 35%;
    position:fixed;
    top:20%;
    left: 0;
    right: 0;
    margin:0 auto;
    border: 2px solid #409EFF;
    padding: 40px;
  }

  .loginTitle{
    color:#409EFF;
    margin-bottom:30px;
    font-size:20px;
    text-align:center;
  }

  .dxkBox{
    margin:10px 0px 20px 60px;
    display:flex;
    justify-content: space-around;
    /*background:pink;*/
    .el-radio{
      /*margin:0 60px 0 0;*/
    }
  }

  .demo-ruleForm{
    /*background:yellow;*/
    padding:0 20px 0 0;

  }

</style>
