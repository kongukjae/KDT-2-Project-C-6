import mysql from 'mysql2'
let data = {id:"wlals123",
            password:"dD135428",                
}

function loginCheck(object) {
  return new Promise((resolve, reject) => {
    let connection = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'dD1354268!',
      port: 3306,
      database: 'gymwear'
    });
    let idcheck=false;
    let passwordcheck=false;
    connection.getConnection((err, conn) => {
      if (err) {
        console.error("DB연결 에러");
        reject(err);
      } else {
        console.log("DB와 연결 완료");

        conn.query(`SELECT * FROM gymwear.new_table WHERE id ="${object.id}"`, (error, results) => {
          if (error) {
            console.error("에러발생");
            reject(error);
          } else {
            if (results.length >= 1) {
                idcheck=true;
            }
              // conn.query(`INSERT INTO gymwear.new_table(id, password, name, phone1, phone2, phone3, email) VALUES (
              //   '${object.id}', '${object.password}','${object.name}','${object.phon1}', '${object.phone2}','${object.phone3}','${object.email}'
              // )`, function (error, results1, fields) {
              //   if (error) {
              //     console.error("데이터베이스에 데이터 쓰기 오류");
              //     reject(error);
              //   } else {
              //     console.log('회원가입 완료:', results1);
              //     resolve(true);
              //   }
              // });
            conn.query(`SELECT * FROM gymwear.new_table WHERE password ="${object.password}"`,(error,results)=>{
                if(error){
                    console.error("에러발생");
                }
                else{
                    if(results.length>=1){
                        passwordcheck=true
                    }
                }
                if(idcheck && passwordcheck){
                    resolve(true)
                }
                else{
                    resolve(false)
                }
            })
          }
          conn.release();
        });
      }
    });
  });
}

//loginCheck(data).then(result=>{console.log(result)}).catch(result=>{console.log(result)})
export default loginCheck