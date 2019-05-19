<template>
    <div>
      <h1>老师的主页</h1>
      <el-button @click="trya">确定</el-button>
      <p>{{apost}}</p>
    </div>
</template>

<script>
// import axios from 'axios'
    export default {
        name: "IndexTeacher",
        data(){
          return{
            apost:'',

          }
        },
        mounted() {
          this.loginFlagCsh()
        },
        methods:{
          loginFlagCsh(){
            this.$store.state.loginFlag=true;
            this.$store.state.userJob='老师';
          },
          trya(){
            var tid='10';
            // alert(11);
            this.axios.get('/api/teacher/xuanke/getTeacherInformation',{
              params:{
                tid:tid
              }
            }).then(res=>{
              console.log(res.data);
              console.log(res.data.code);
              this.apost=res.data.data.tid;
              console.log(this.apost);
            })
          }
        }
    }
</script>

<style scoped>

</style>
