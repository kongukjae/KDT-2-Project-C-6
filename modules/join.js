import mysql from mysql2

let object = {
  id:"wlals12345601",
  password:"dD1354268",
  name:"강지민",
  phone1:"10",
  phone2:"4929",
  phone3:"7381"
}

function join(object){
  let mysql = require('mysql');
  let connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'dD1354268!',
    port     : 3306,
    database : 'gymwear'
  });
  connection.getConnection((err,conn)=>{
    if(err){
      console.log("DB와 연결중에 에러가 발생했습니다.");
    }
    else{
    console.log("DB와 연결 완료");
    
    conn.query(`SELECT * FROM gymwear.new_table WHERE id ="${object.id}"`,(error,results)=>{
      if(error){
        console.log("에러발생")
      }
      else{
        if(results.length>=1){
          console.log("아이디 중복 발생")
          return false;
        }   
        else{
          conn.query(`insert into gymwear.new_table(id, password, name, phone1, phone2, phone3, email) values ('${object.id}', '${object.password}','${object.name}','${object.phone1}','${object.phone2}','${object.phone3}')`, function (error, results1, fields) {
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
        // conn.release();
      }
      conn.release();
    })
  }
})
}

join(object)