<template >
  <div>
    <p class="viewsTitle">| 教籍查询 |</p>
    <br>
    <br>
    <div class="Jinformations">
      <div class="search-num">
        <div style="display: inline-block"> 搜索：</div>
        <el-input v-model="search" style="display: inline-block;width:40%"
                  placeholder="请输入搜索内容">
        </el-input>
      </div>
      <br>
      <div class="Jdata">
        <el-table
          ref="multipleTable"
          :data="Jtables"

          max-height="600"
          tooltip-effect="dark"
          stripe
          style="width:100%"
          @selection-change="handleSelectionChange">//max-height待检验高度
          <el-table-column type="selection" width=50%></el-table-column>
          <el-table-column label="工号" prop="tnum"></el-table-column>
          <el-table-column label="姓名" prop="tname"></el-table-column>
          <el-table-column label="学院" prop="tplace"></el-table-column>
          <el-table-column label="职位" prop="tjob"></el-table-column>
          <el-table-column label="籍贯" prop="tbirth"></el-table-column>
          <el-table-column label="户口" prop="thome"></el-table-column>
          <el-table-column label="邮箱" prop="temail" width="200"></el-table-column>
          <el-table-column label="政治面貌" prop="tparty"></el-table-column>
          <el-table-column label="手机号" prop="tphone"></el-table-column>
          <el-table-column label="入职时间" prop="tyear"></el-table-column>
          <el-table-column label="操作" fixed="right" width="150">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
<!--          <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>-->
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Jjcx",
    data() {
      return {
        Jinformations: [
          {
            tnum: '2012012343',
            tname: 'XX',
            tplace: '信息科学与技术学院',
            tjob: '辅导员',
            tbirth: '俄罗斯',
            thome: '中国',
            temail: '111111@buct.edu.cn',
            tparty: '预备党员',
            tphone: 'XXXXXXX',
            tyear: '2012'
          },
          {
            tnum: '2001001923',
            tname: 'YY',
            tplace: '生命科学与技术学院',
            tjob: '教师',
            tbirth: '云南',
            thome: '北京',
            temail: '23323333@buct.edu.cn',
            tparty: '无党派',
            tphone: '234234234',
            tyear: '2001'
          },
          {
            tnum: '2007018239',
            tname: 'ZZ',
            tplace: "经济管理学院",
            tjob: '助教',
            tbirth: '浙江',
            thome: '上海',
            temail: '2342354525@buct.edu.cn',
            tparty: '党员',
            tphone: '342343234',
            tyear: '2016'
          },
          {
            tnum: '2003003823',
            tname: 'QQ',
            tplace: '巴黎居里工程师学院',
            tjob: '教授',
            tbirth: '巴黎',
            thome: '瑞典',
            temail: '12423332@buct.edu.cn',
            tparty: '无党派人士',
            tphone: '342412121',
            tyear: '2003'
          }],
        search: ''
      }
    },
    computed: {
      Jtables() {
        const search = this.search;
        if (search) {
          return this.Jinformations.filter(data => {
            return Object.keys(data).some(key => {
              return String(data[key]).toLowerCase().indexOf(search) > -1
            })
          })
        }
        return this.Jinformations
      }
    },
    mounted() {
      this.loginFlagCsh()
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleTable = val;
      },
      loginFlagCsh() {
        // alert(this.value1);
        this.$store.state.loginFlag = true;
        this.$store.state.userJob = '管理员';
      }
    }
  }
</script>

<style lang='scss' scoped>
  .Jinformations{
    position: relative;
    top:30%;
    bottom: 25%;
    font-size: 20px;
    font-family: "Microsoft YaHei",serif;
  }
  .el-table__body td,.el-table__body th{
    padding:5px;
  }
</style>
