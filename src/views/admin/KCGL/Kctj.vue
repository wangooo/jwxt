<template>
  <div>
    <p class="viewsTitle">| 课程添加 |</p>
    <div class="container">
      <div class="demo-input-size">
        <el-button slot="reference" style="width:150px">>全校课程表序号</el-button>
        <el-input
          style="width: 200px"
          placeholder="请输入全校课程表序号"
          v-model="id"
          clearable>
        </el-input>
        <br>
        <el-button slot="reference"style="width:150px" >>课程编号</el-button>
        <el-input
          style="width: 800px"
          placeholder="请输入课程编号"
          width="100px"
          v-model="cnum"
          clearable>
        </el-input>
      </div>
      <br>
      <div>
          <el-button slot="reference" style="width:150px">>课程名称</el-button>

        <el-input
          clearable
          style="width: 800px"
          placeholder="请输入课程名称"

          v-model="cname">
        </el-input>
        <br>
          <el-button slot="reference"style="width:150px" >>课程属性</el-button>
        <el-input
          style="width: 800px"
          placeholder="请输入课程属性"
          clearable
          v-model="ctype">
        </el-input>
      </div>
      <br>
      <div>
          <el-button slot="reference" style="width:150px">>教室编号</el-button>
        <el-input
          style="width: 800px"
          placeholder="请输入教室编号"
          clearable
          v-model="classid">
        </el-input>
        <br>
          <el-button slot="reference" style="width:150px">>容量</el-button>

        <el-input
          style="width: 800px"
          placeholder="请输入容量"
          clearable
          v-model="call">
        </el-input>
      </div>
      <br>
      <div class="block">
          <el-button slot="reference"style="width:150px" >>第一次时</el-button>

        <el-date-picker

          v-model="cstart"
          style="width:800px"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions">
        </el-date-picker>

        <br><el-button slot="reference"style="width:150px" >>第二次时</el-button>

        <el-date-picker
          v-model="cend"
          style="width:800px"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <br>
      <div>
          <el-button slot="reference"style="width:150px" >>教师编号</el-button>

        <el-input
          style="width: 800px"
          placeholder="请输入教师编号"
          clearable
          v-model="tid">
        </el-input>
        <br>
          <el-button slot="reference"style="width:150px" >>面向专业</el-button>

        <el-input
          style="width: 800px"
          placeholder="面向专业"
          clearable
          v-model="cmajor">
        </el-input>
      </div>

      <br>
      <div>
          <el-button slot="reference"style="width:150px" >>余量</el-button>

        <el-input
          style="width: 800px"
          placeholder="请输入余量"
          clearable
          v-model="cnow">
        </el-input>
        <br>
        <el-popover
          placement="top-start"
          title="最大值"
          width="200"
          trigger="hover"
          content="最大不超过8.0">
          <el-button slot="reference"style="width:150px"  >>学分</el-button>
        </el-popover>
        <el-input
          style="width: 800px"
          placeholder="请输入余量"
          clearable
          v-model="credit">
        </el-input>
      </div>
      <br>
      <div>
          <el-button slot="reference"style="width:150px"  >>课时</el-button>

        <el-input
          style="width: 800px"
          placeholder="请输入课时"
          clearable
          v-model="ctime">
        </el-input>
        <br>
          <el-button slot="reference"style="width:150px"  >>开课频率</el-button>

        <el-input
          style="width: 800px"
          placeholder="请输入开课频率"
          clearable
          v-model="cfre">
        </el-input>
      </div>
      <div align="center">

      <el-button type="primary" style="width:150px;margin-top:30px" :plain="true" @click="open2" >提交<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
    </div>

    <br>

  </div>
</template>

<script>
  export default {
    name: "Kctj",
    mounted() {
      this.loginFlagCsh();
    },
    methods: {
      loginFlagCsh(){
        this.$store.state.loginFlag=true;
        this.$store.state.userJob='管理员';
      },
      open2() {
        let param=new URLSearchParams();
        param.append("id",this.id);
        param.append("cnum",this.cnum);
        param.append("cname",this.cname);
        param.append("cmajor",this.cmajor);
        param.append("ctype",this.ctype);
        param.append("tid",this.tid);
        param.append("call",this.call);
        param.append("cstart",this.cstart);
        param.append("cend",this.cend);
        param.append("credit",this.credit);
        param.append("ctime",this.ctime);
        param.append("cfre",this.cfre);

        this.axios.post('api/common/houtai/AddCourse',param).then(res=>{
          console.log(res.data);

        })

        this.$message({
          message: '恭喜你，提交成功',
          type: 'success'
        });
      }},
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },

        value1: '',
        value2: '',
        value3: '',
        pickerOptions: {
          shortcuts: [{
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: '今年至今',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);

              picker.$emit('pick', [start, end]);
            }
          },{
            text: '大一上',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              end.setMonth(start.getMonth()-18);
              start.setMonth(start.getMonth() - 24);
              picker.$emit('pick', [start, end]);
            }
          },{
            text: '大一下',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              end.setMonth(start.getMonth()-12);
              start.setMonth(start.getMonth() - 18);
              picker.$emit('pick', [start, end]);
            }
          },{
            text: '大二上',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              end.setMonth(start.getMonth()-6);
              start.setMonth(start.getMonth() - 12);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        options: [{
          credit: '选项1',
          label: '1.0'
        }, {
          credit: '选项2',
          label: '1.5'
        }, {
          credit: '选项3',
          label: '2.0'
        }, {
          credit: '选项4',
          label: '2.5'
        }, {
          credit: '选项5',
          label: '3.0'
        }],
        credit: '',
        visible: false,
        value2: '',
        cname: '',
        id: '',
        cnum: '',
        ctype: '',
        classid: '',
        call: '',
        tid: '',
        cstart: '',
        cend: '',
        cmajor: '',
        cnow: '',
        credit: '',
        ctime: '',
        cfre: ''
      };
    }
  }

</script>

<style type="text/css">

  .el-button {
    background:  #B3C0D1;
    /*float:left;*/
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .float{
    float:left;
  }
  .container{
    margin:0 auto;
    width:70%;
    /*background:pink;*/
  }


</style>
