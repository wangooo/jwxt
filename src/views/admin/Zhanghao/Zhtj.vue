<template>
  <div class="Land">
    <div class="loginTitle">账号添加</div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="60px" class="demo-ruleForm">
      <el-form-item prop="name" label="账号">
        <el-input v-model="ruleForm2.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
        <el-button @click="daoruForm()">从文件导入</el-button>
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
        flag:'',
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
    mounted() {
      this.loginFlagCsh()
    },
    methods: {
      loginFlagCsh() {
        // alert(this.value1);
        this.$store.state.loginFlag = true;
        this.$store.state.userJob = '管理员';
      },
      submitForm(){
        this.axios.get('',{
          params:{
            id:this.id,
            password:this.password
          }
        }).then(res=>{
          console.log(res.data);
          this.flag=re.code;
        })
        alert(flag);
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      daoruForm(){

      }
    }
  }
</script>

<style scoped>
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
    width: 30%;
    position:fixed;
    top:20%;
    left: 0;
    right: 0;
    margin:0 auto;

    padding: 40px;
  }

  .loginTitle{
    color:#409EFF;
    margin-bottom:30px;
    font-size:20px;
    text-align:center;
  }

  .dxkBox{
    margin:10px 0 20px 60px;
    /*background:pink;*/
  }

</style>
