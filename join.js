
let object = {
  id:"wlals12345601",
  password:"dD1354268",
  name:"강지민"
}
function join(object){
  let mysql = require('mysql2');
  let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'dD1354268!!',
    port     : 3307,
    database : 'test'
  });
  connection.connect(err=>{
    if(err){
      console.log("DB와 연결중에 에러가 발생했습니다.");
    }
    else
    console.log("DB와 연결 완료");
  });

connection.query(`SELECT * FROM test.new_table WHERE id_ ="${object.id}"`,(error,results)=>{
  if(error){
    console.log("에러발생")
  }
  else{
    if(results.length>=1){
      console.log("아이디 중복 발생")
      return false;
    }
    else{
      connection.query(`insert into test.new_table(id_, password, name) values ('${object.id}', '${object.password}','${object.name}')`, function (error, results1, fields) {
        if (error) {
          console.log("error")
          return false;
        }
        else{
          console.log('회원가입 완료:', results1);
          connection.end();
          return true;
          
        }
      });      
    }
  }
})
connection.end();
  
  



 }

join(object)