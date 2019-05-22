<template>
  <div>
    <div class="main">
      <p class="viewsTitle">自动排课</p>
      <div class="search-con center">
        <div class="center">
          <!--<p v-if="this.$store.state.ispk=='Success'">{{ispaike2}}</p>-->
          <!--<p v-else>{{ispaike1}}</p><br>-->
          <p v-if="flag_wsy">已排课</p>
          <p v-else>未排课</p>
          <el-button size="small" type="el-button" @click="paike()">自动排课</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        ispaike1:'未排课！',
        ispaike2:'已排课!',
        flag1:'',
        flag2:'1',
        flag_wsy:0
      }
    },
    mounted() {
      this.loginFlagCsh(),
        this.zdpkState()
    },
    methods:{
      loginFlagCsh(){
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='管理员';
        this.axios.post('/api/admin/zdpk',{
          flag:'0'
        }).then(res=>{
          console.log(res);
          if(res.data=='Success'){
            this.flag_wsy=1;
            alert("已排课");
          }
          else{
            alert("未排课");
            this.flag_wsy=0;
          }
        })
      },
      zdpkState(){
        var storage=window.localStorage;
        this.flag1=this.$store.state.ispk;
      },
      // paike(){
      //   if(this.$store.state.ispk=='Success')
      //   {
      //     var reclick=confirm("您已排过课！是否要重新排课？");
      //     if(reclick)
      //     {
      //       const loading = this.$loading({
      //         lock: true,
      //         text: '正在排课，请稍等...',
      //         spinner: 'el-icon-loading',
      //         background: 'rgba(0, 0, 0, 0.7)'
      //       });
      //       setTimeout(() => {
      //         loading.close();
      //       }, 5000);
      //       // alert(this.flag2);
      //       axios.post('/api/admin/zdpk',{
      //         flag:'0'
      //       }).then(res=>{
      //         console.log(res.data);
      //         // alert(1);
      //         this.$store.commit('getPk',res.data);
      //         this.$forceUpdate();
      //         var storage=window.localStorage;
      //         this.flag1 = this.$store.state.ispk;
      //         if(res.data=='Success')
      //         {
      //           alert("排课成功！");
      //         }
      //         else
      //         {
      //           alert("排课失败！");
      //         }
      //       });
      //     }
      //   }
      //   else
      //   {
      //     var click=confirm("目前您还未排课，是否要排课？");
      //     if(click)
      //     {
      //       const loading = this.$loading({
      //         lock: true,
      //         text: '正在排课，请稍等...',
      //         spinner: 'el-icon-loading',
      //         background: 'rgba(0, 0, 0, 0.7)'
      //       });
      //       setTimeout(() => {
      //         loading.close();
      //       }, 15000);
      //       axios.post('/api/admin/zdpk',{
      //         flag:this.flag2
      //       }).then(res=>{
      //         console.log(res);
      //         this.$store.commit('getPk',res.data);
      //         this.$forceUpdate();
      //         var storage=window.localStorage;
      //         this.flag1 = this.$store.state.ispk;
      //         if(this.flag1=='Success')
      //         {
      //           alert("排课成功！");
      //         }
      //         else
      //         {
      //           alert("排课失败！");
      //         }
      //       });
      //     }
      //   }
      // },
      paike(){
        var click=confirm("目前您还未排课，是否要排课？");
        if(click)
        {
          const loading = this.$loading({
            lock: true,
            text: '正在排课，请稍等...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(() => {
            loading.close();
          }, 15000);
        }
        this.axios.post('/api/admin/zdpk',{
          flag:'1'
        }).then(res=>{

          console.log(res);
          if(res.data=="Success"){
            alert("排课成功")
          }
          else{
            alert("排课失败")
          }

        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  .main{
    width:100%;
    height: 100%;
  }
  .delete{
    width: 80%;
    margin:0 auto;
    margin-top:40px;
  }
  .search-con {
    margin-top: 30px;
    width: 80%;
  }
</style>
