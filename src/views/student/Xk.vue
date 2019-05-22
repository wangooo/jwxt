<template>
  <div>
    <div class="container">
      <div class="cbl" v-bind:class="{'cblActive':cblActive}">
        <div class="cbl-left">
          <a href="#" @click="cblClick"><img class="cbl-btn" src="../../assets/img/icon/click.png"></a>
          <p>侧边栏</p>
        </div>
        <div class="cbl-right">
          <p v-for="(item,index) in cbl_course" >
            课程名称：{{item.cname}}
            所在教室：{{item.classname}}
            学分：{{item.credit}}
            有无余量：{{item.yuliang}}
            类型：{{item.ctype}}
            <button @click="cbl_tuike(index)">退课</button>
          </p>
        </div>
      </div>

      <div class = "flex">
        <div class = "search">
          <el-input size="small" v-model="input" class="inputkk" placeholder="请输入课程号或教学班"></el-input>
          <el-button type="primary" class="search-btn" @click="sousu()">搜索</el-button>
        </div>
      </div>
      <div class = "flex-forth">
        <div class = "flex-third">
          <div class="word1">
            <ul >
              <p v-show="flag">面向学院
                <button class="tryoo" v-for="(item,index) in xueyuan" :key="index" @click="godown_xueyuan(index)">{{item}}</button>
                <el-divider></el-divider>
              </p>
            </ul>
            <ul >
              <p v-show="majorFlag" >面向专业
                <button v-for="(item,index) in major[majorIndex]" :key="index" @click="godown_zhuanye(majorIndex,index)">{{item}}</button>
                <el-divider></el-divider>
              </p>
            </ul>
            <ul >
              <p>面向年级
                <button v-for="(item,index) in nianji" :key="index" @click="godown_nianji(index)">{{item}}</button>
                <el-divider></el-divider>
              </p>
            </ul>
            <ul >
              <p>课程属性
                <button v-for="(item,index) in xingzhi" :key="index" @click="godown_xingzhi(index)">{{item}}</button>
                <el-divider></el-divider>
              </p>
            </ul>
            <ul >
              <p>学分
                <button v-for="(item,index) in xuefen" :key="index" @click="godown_xuefen(index)">{{item}}</button>
                <el-divider></el-divider>
              </p>
            </ul>
            <ul >
              <p>有无余量
                <button v-for="(item,index) in yuliang" :key="index" @click="godown_yuliang(index)">{{item}}</button>
                <el-divider></el-divider>
              </p>
            </ul>
            <ul>
              <p>已选条件
                <button v-show="flag1" v-for="(item,index) in show_icon" :key="index" @click="huifu(index,item)">{{item}}</button>
              </p>
            </ul>

          </div>
        </div>
      </div>
      <div>
        <p>
          学年：{{xuenian[0]}} 学期:{{xueqi[0]}} 选课要求最低学分：0 最高：50 已获得学分：{{yihuode[0]}} 本学期已选学分：{{yixuan[0]}}
        </p>
      </div>
      <div>
        <p v-for="(item,index) in course" >
          课程名称：{{item.cname}}
          所在教室：{{item.classname}}
          学分：{{item.credit}}
          有无余量：{{item.yuliang}}
          类型：{{item.ctype}}
          <button @click="xuanke(index)">选课</button>
        </p>
      </div>
      <div v-show="sousu_course_flag">
        <p v-for="(item,index) in sousu_course" >
          课程名称：{{item.cname}}
          所在教室：{{item.classname}}
          学分：{{item.credit}}
          有无余量：{{item.yuliang}}
          类型：{{item.ctype}}
          <button @click="sousu_xuanke(index)">选课</button>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Xk",
    data(){
      return{
        // xueyuan:['信息学院','经济管理','化学'],
        xueyuan:[],
        major:[[]],
        xuefen:['1.0','1.5','2.0','2.5','3.0','3.5','4.0','4.5','5.0','5.5','6.0'],
        xuefen1:['1.0','1.5','2.0','2.5','3.0','3.5','4.0','4.5','5.0','5.5','6.0'],
        yuliang:['有','无'],
        yuliang1:['有','无'],
        xingzhi:['通识教育课程','体育','专业选修','专业必修','实践环节必修'],
        xingzhi1:['通识教育课程','体育','专业选修','专业必修','实践环节必修'],
        nianji:['大一','大二','大三','大四'],
        nianji1:['大一','大二','大三','大四'],
        show_icon:[],
        course:[],
        sousu_course:[],
        cbl_course:[],
        xuenian:['2017-2018'],
        xueqi:['大二下学期'],
        yihuode:['116.5'],
        yixuan:['0'],
        cblActive: false,
        input: '',
        majorFlag:false,
        majorIndex:0,
        flag:true,
        flag1:true,
        sousu_course_flag:false,
        cxueyuan:'',
        cmajor:'',
        cnianji:'',
        cxingzhi:'',
        cyuliang:'',
        cxuefen:'',

      }
    },
    mounted() {
      this.loginFlagCsh();
      this.return_xueyuan();
    },
    methods:{
      loginFlagCsh(){
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='学生';
      },
      return_xueyuan(){
        this.axios.get('/api/student/xuanke/getCollegeName',{
          params:{
          }
        }).then(res=>{
          this.xueyuan=res.data.data;
        })
      },
      cblClick(){
        this.axios.get('/api/student/xuanke/zhangyuting',{
          params:{
            sid:'2016014358',
            year:'2019',
            semester:'1',
          }
        }).then(res=>{
          console.log(res.data);
          console.log(1);
          this.cblActive=!this.cblActive;
          for(var i=0;i<res.data.data.length;i++)
          {
            var tmp={"classname":res.data.data[i].classname,"cmajor":res.data.data[i].cmajor,"cname":res.data.data[i].cname,"yuliang":res.data.data[i].cnow+'/'+res.data.data[i].call,"cnum":res.data.data[i].cnum,"credit":res.data.data[i].credit,"ctype":res.data.data[i].ctype,"开始周结束周":res.data.data[i].cstart+'-'+res.data.data[i].cend,"id":res.data.data[i].id}
            this.cbl_course[i]=tmp;
          }
        })

      },
      sousu(){
        this.axios.get('/api/student/xuanke/chakeByCname',{
          params:{
            cname:this.input,
          }
        }).then(res=>{
          console.log(res.data);
          this.sousu_course_flag=true;
          var tmp={"classname":res.data.data[0].classname,"cmajor":res.data.data[0].cmajor,"cname":res.data.data[0].cname,"yuliang":res.data.data[0].cnow+'/'+res.data.data[0].call,"cnum":res.data.data[0].cnum,"credit":res.data.data[0].credit,"ctype":res.data.data[0].ctype,"开始周结束周":res.data.data[0].cstart+'-'+res.data.data[0].cend,"id":res.data.data[0].id}

          this.sousu_course[0]=tmp;

        })
      },

      shaixuan(){
        this.course=[];

        // alert(1);
        // alert(this.show_icon[1]);
        // alert(this.show_icon.length);
        for(var i=0;i<this.show_icon.length;i++)
        {
          // alert("i");
          // alert(i);
          // alert(this.major[0].indexOf(this.show_icon[1]));
          if(this.xueyuan.indexOf(this.show_icon[i])!=-1)
          {
            this.cxueyuan=this.show_icon[i];
            // continue;
          }
          else if(this.major[0].indexOf(this.show_icon[i])!=-1)
          {
            // alert(2);
            this.cmajor=this.show_icon[i];
            // continue;
          }
          else if(this.nianji1.indexOf(this.show_icon[i])!=-1)
          {
            this.cnianji=this.show_icon[i];
            // continue;
          }
          if(this.xingzhi1.indexOf(this.show_icon[i])!=-1)
          {
            this.cxingzhi=this.show_icon[i];
            // continue;
          }
          else if(this.xuefen1.indexOf(this.show_icon[i])!=-1)
          {
            this.cxuefen=this.show_icon[i];
            // continue;
          }
          else if(this.yuliang1.indexOf(this.show_icon[i])!=-1)
          {
            if(this.show_icon[i]=='有')
            {
              this.cyuliang=1;
            }
            else if(this.show_icon[i]=='无')
            {
              this.cyuliang=0;
            }
            // continue;
          }
        }
        // alert(this.cxueyuan);
        // alert(this.cmajor);
        this.axios.get('/api/student/xuanke/chake',{
          params:{
            collegeName:this.cxueyuan,
            majorName:this.cmajor,
            grade:this.cnianji,
            ctype:this.cxingzhi,
            credit:this.cxuefen,
            flag:this.cyuliang,
          }
        }).then(res=>{
          console.log(res.data);
          for(var i=0;i<res.data.data.length;i++)
          {
            var tmp={"classname":res.data.data[i].classname,"cmajor":res.data.data[i].cmajor,"cname":res.data.data[i].cname,"yuliang":res.data.data[i].cnow+'/'+res.data.data[i].call,"cnum":res.data.data[i].cnum,"credit":res.data.data[i].credit,"ctype":res.data.data[i].ctype,"开始周结束周":res.data.data[i].cstart+'-'+res.data.data[i].cend}
            this.course.push(tmp);
          }

        })

      },
      godown_xueyuan(index){
        this.axios.get('/api/student/xuanke/getMajorNameByCollegeName',{
          params:{
            collegeName:this.xueyuan[index],
          }
        }).then(res=>{
          console.log(res.data);
          this.majorFlag=true;
          this.majorIndex=index;
          this.major[index]=res.data.data;
          this.show_icon.push(this.xueyuan[index]);
          this.flag=false;
          this.flag1=true;
          this.shaixuan();
        })

      },
      godown_zhuanye(majorIndex,index){

        this.show_icon.push(this.major[majorIndex][index]);
        this.majorFlag=false;
        this.shaixuan();
      },
      godown_xingzhi(index){
        this.show_icon.push(this.xingzhi[index]);
        this.xingzhi.splice(index,1);
        this.shaixuan();
      },
      godown_xuefen(index){
        this.show_icon.push(this.xuefen[index]);
        this.xuefen.splice(index,1);
        this.shaixuan();
      },
      godown_yuliang(index){
        this.show_icon.push(this.yuliang[index]);
        this.yuliang.splice(index,1);
        this.shaixuan();
      },
      godown_nianji(index){

        var v1=this.show_icon.indexOf(this.nianji1[0])
        var v2=this.show_icon.indexOf(this.nianji1[1]);
        var v3=this.show_icon.indexOf(this.nianji1[2]);
        var v4=this.show_icon.indexOf(this.nianji1[3]);
        if(v1==-1&&v2==-1&&v3==-1&&v4==-1)
        {
          this.show_icon.push(this.nianji[index]);
          this.nianji.splice(index,1);
        }
        else
        {
          alert("不能重复选择年级");
        }
        this.shaixuan();
      },
      huifu(index,item){
        var v1=this.xueyuan.indexOf(item);
        var v21=this.major[0].indexOf(item);
        // var v22=this.major[1].indexOf(item);
        // var v23=this.major[2].indexOf(item);
        var v3=this.xingzhi1.indexOf(item);
        var v4=this.yuliang1.indexOf(item);
        var v5=this.nianji1.indexOf(item);
        var v6=this.xuefen1.indexOf(item);
        if(v1!=-1)
        {
          this.flag =true;
          this.majorFlag=false;
          for(var i=0;i<this.major.length;i++)
          {
            for(var j=0;j<this.major[i].length;j++)
            {
              if(this.show_icon.indexOf(this.major[i][j])!=-1)
              {
                var index1=this.show_icon.indexOf(this.major[i][j]);
                this.show_icon.splice(index1, 1);
                break;
              }
            }
          }
        }
        if(v21!=-1)
        {
          this.majorFlag=true;
        }
        if(v3!=-1)
        {
          this.xingzhi.splice(v3,0,item);
        }
        if(v4!=-1)
        {
          this.yuliang.splice(v4,0,item);
        }
        if(v5!=-1)
        {
          this.nianji.splice(v5,0,item);
        }
        if(v6!=-1)
        {
          this.xuefen.splice(v5,0,item);
        }
        this.show_icon.splice(index,1);
        if(this.show_icon.length == 0)
          this.flag1=false;
        this.shaixuan();
      },
      sousu_xuanke(index){
        this.axios.get('/api/student/xuanke/xuanKe',{
          params:{
            id:parseInt(this.sousu_course[0].id),
            sid:'2016014358',
            year:'2019',
            semester:1,
          }
        }).then(res=>{
          console.log(res.data);
          alert('选课成功！');
          // this.cbl.push(this.course[index]);
        })
      },
      xuanke(index){
        this.axios.get('/api/student/xuanke/xuanKe',{
          params:{
            id:this.course[index].id,
            sid:'2016014358',
            year:'2019',
            semester:'1',
          }
        }).then(res=>{
          console.log(res.data);
          alert('选课成功！');
        })
      },
      cbl_tuike(index){
        this.axios.get('/api/student/xuanke/tuiKe',{
          params:{
            id:this.cbl_course[index].id,
            sid:'2016014358',
          }
        }).then(res=>{
          console.log(res.data);
          this.cbl_course.splice(index,1);
          if(res.data.code==0)
          {
            alert("退课成功！");
          }
        })
      },
    },
  }
</script>


<style scoped lang="scss">
  .container{
    // overflow:scroll;
    position:relative;
    // position:fixed;
    // width:100%;
    // height:100%;
  }
  .cbl{
    // display:none;
    position:fixed;
    top:0px;
    right:-240px;
    width:300px;
    height:100%;
    background:lightskyblue;
    transition: 1s right ease;
    .cbl-left{
      width:20%;
      height:100%;
      background:lightskyblue;
      float:left;
      display:flex;
      align-items: center;
      justify-content: center;
    }
    .cbl-right{
      width:80%;
      height:100%;
      background:lightblue;
      float:left;
    }
    .cbl-btn{
      width:30px;
      height:30px;
    }
  }
  ul li{
    width:200px;
    height:50px;
    border:1px solid black;
  }
  .search{
    width: 700px;
    height: 70px;
    overflow:hidden;
    .inputkk{
      float:left;
      width:60%;
    }
    .search-btn{
      float:left;
      margin-left:30px;
    }
  }
  .flex{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-left:100px;
    margin-right:200px;
    border-radius: 5px;
    // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)

  }
  .flex-second{
    display: flex;
    margin-left:200px;
    margin-right:200px;
    border-radius: 5px;
    background:yellow;

  }
  .flex-third{
    display: flex;
    margin-left:50px;
    margin-right:50px;
    margin-top:5px;
  }
  .flex-forth{
    // margin-left:240px;
    // margin-right:50px;
    width:800px;
    margin:0 50px 50px 240px;
    padding-bottom:30px;
    // height:00px;
    border-radius: 10px;
    // margin-top:100px;
    box-shadow:0 2px 12px 0 rgba(0,0,0,0.1)
  }

  .cblActive{
    right:0;
  }
  .word1{
    color:black;
    font-weight:bold;
    font-size:15px;
    margin-top:15px;
  }
  .word2{
    font-size:12px;
    color:blue;
  }
  .link{
    margin-left:15px;
  }

</style>
