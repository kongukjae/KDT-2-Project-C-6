import mysql from 'mysql2'
let object = {
  userid:"wlals1234560123",
  password:"dD1354268",
  name:"강지민",
  number1:10,
  number2:4929,
  number3:7381,
  email:"naver.com"
}
function join(object){
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
    // connection.end();

    }
    else
    console.log("DB와 연결 완료");
  });

connection.query(`SELECT * FROM test.new_table WHERE userid ="${object.userid}"`,(error,results)=>{
  if(error){
    console.log("에러발생")
    // connection.end();
  }
  else{
    if(results.length>=1){
      console.log("아이디 중복 발생")
      // connection.end();
      return false;
    }
    else{
      connection.query(`insert into test.new_table(userid, password, name, number1, number2, number3, email) values ('
      ${object.userid}', '${object.password}','${object.name}',${object.number1}, ${object.number2},${object.number3},'${object.email}
      ')`, function (error, results1, fields) {
        if (error) {
          console.log(error)
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