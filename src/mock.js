const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceStudentGrade = function() {
    let gradeList = [];
    for (let i = 0; i < 20; i++) {
        let newStudentGrade = {
            class_name: Random.cname(), //  Random.csentence( min, max )
            class_id: Random.id(), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            class_state: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            xuefen: Random.float(1,4,1,3),
            grade:Random.integer(0,100),
            jidian:Random.float(0,4.33,1,2),
            xueyuan:Random.city(),
            teacher:Random.cname(),
              // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        gradeList.push(newStudentGrade);
    }
 
    return {
        gradeList: gradeList
    }
}
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/student/findGradeById', 'get', produceStudentGrade);

const studentKb = function() {
    let studentKbList = [[{
        name:'数据结构00',
        teacher:'万静',
        place:'B201'
      },
        {
          name:'大雾01',
          teacher:'张',
          place:'B202'
        },
        {
          name:'人工智能',
          teacher:'刘',
          place:'B203'
        },
        {

        },
        {
          name:'数据结构',
          teacher:'万静',
          place:'B201'
        },
        {
          name:'大雾',
          teacher:'张',
          place:'B202'
        },
        {
          name:'人工智能',
          teacher:'刘',
          place:'B203'
        },
        {

        },
        {
          name:'数据结构',
          teacher:'万静',
          place:'B201'
        },
        {
          name:'大雾',
          teacher:'张',
          place:'B202'
        },
        {
          name:'人工智能',
          teacher:'刘',
          place:'B203'
        },
        {

        },
        {}],
        [{
          name:'数据结构',
          teacher:'万静',
          place:'B201'
        },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {}],
        [{
          name:'数据结构03',
          teacher:'万静',
          place:'B201'
        },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {}],
        [{
          name:'数据结构04',
          teacher:'万静',
          place:'B201'
        },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {}],
        [{
          name:'数据结构',
          teacher:'万静',
          place:'B201'
        },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {}],
        [{
          name:'数据结构',
          teacher:'万静',
          place:'B201'
        },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {}],
        [{
          name:'数据结构',
          teacher:'万静',
          place:'B201'
        },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {}]];
    
 
    return {
        studentKb: studentKbList
    }
}
Mock.mock('/student/kbcxByNow', 'get', studentKb);


const studentKbById = function() {
    let studentKbList = [[{
        name:'数据结构嘤嘤嘤',
        teacher:'万静',
        place:'B201'
      },
        {
          name:'大雾01',
          teacher:'张',
          place:'B202'
        },
        {
          name:'人工智能',
          teacher:'刘',
          place:'B203'
        },
        {

        },
        {
          name:'数据结构',
          teacher:'万静',
          place:'B201'
        },
        {
          name:'大雾',
          teacher:'张',
          place:'B202'
        },
        {
          name:'人工智能',
          teacher:'刘',
          place:'B203'
        },
        {

        },
        {
          name:'数据结构',
          teacher:'万静',
          place:'B201'
        },
        {
          name:'大雾',
          teacher:'张',
          place:'B202'
        },
        {
          name:'人工智能',
          teacher:'刘',
          place:'B203'
        },
        {

        },
        {}],
        [{
          name:'数据结构',
          teacher:'万静',
          place:'B201'
        },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {}],
        [{
          name:'数据结构03',
          teacher:'万静',
          place:'B201'
        },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {}],
        [{
          name:'数据结构04',
          teacher:'万静',
          place:'B201'
        },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {}],
        [{
          name:'数据结构',
          teacher:'万静',
          place:'B201'
        },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {}],
        [{
          name:'数据结构',
          teacher:'万静',
          place:'B201'
        },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {}],
        [{
          name:'数据结构',
          teacher:'万静',
          place:'B201'
        },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {
            name:'数据结构',
            teacher:'万静',
            place:'B201'
          },
          {
            name:'大雾',
            teacher:'张',
            place:'B202'
          },
          {
            name:'人工智能',
            teacher:'刘',
            place:'B203'
          },
          {

          },
          {}]];
    
    return {
        studentKbById: studentKbList
    }
}
Mock.mock('/student/kbcxById', 'get', studentKbById);


const findCourses = function(){
    var findCoursesData=[];
    for (let i=0;i<200;i++){
        let courseList={
            cid:Random.id(),
            cname:Random.cname(),
            cmajor:Random.cname(),
            ctype:Random.integer(0,3),
            cgrade_1:Random.integer(10,50),
            cgrade_2:Random.integer(10,50),
            cgrade_3:Random.integer(10,50),
        }
        findCoursesData.push(courseList);
    }
    return{
        findCourses:findCoursesData
    }
}
Mock.mock('/teacher/findCoursesByXuenianXueqi','get',findCourses);


const getStudents = function(){
    var studentsList=[];
    for (let i=0;i<50;i++){
        let astudent={
            sname:Random.cname(),
            sid:Random.id(),
            sclass:'计科1603',
            smajor:Random.sentence(1,2),
            grade1:Random.integer(0,100),
            grade2:Random.integer(0,100),
            grade3:Random.integer(0,100),
            gradesum:0
        }
        studentsList.push(astudent);
    }
    return{
        studentsList:studentsList
    }

}
Mock.mock('/teacher/getStudentByCname','get',getStudents);

