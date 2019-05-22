<template>
    <div>
      <p class="viewsTitle">毕设</p>
      <input type="text" v-model="demo" placeholder="请输入">
      <a href="http://192.168.43.111:8090/myWeb/Login.jsp">跳转</a>

      <p>{{demo}}</p>
    </div>
</template>
<script>
  import '../../assets/css/common.scss';
  export default {
        name: "Bs",
    data(){
          return{
            demo:'nihao'
          }
    },
    mounted() { 
      // mounted()是一个钩子函数，意思是在页面构建完成前就调用函数loginFlagCsh,一般用来初始化数据
      this.loginFlagCsh()
    },
    methods:{
      loginFlagCsh(){
        var sudo=localStorage.getItem('login_if');
        if(!sudo){
          alert('请登陆！');
          this.$router.push({path:'/'});
        }
        // 检查this.$store.state中的loginflag的状态，来判断是否登陆loginFlag和当前登陆的身份userJob是什么，如果是学生界面就设置为'0'，老师界面设置为'1'，管理员设置为'2'（这是vuex的内容）
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='学生';
      },
    }
    }
</script>

<style scoped>

</style>
