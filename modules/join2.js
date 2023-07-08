import mysql from 'mysql2'

function join2(object) {
  
   return new Promise((resolve,reject)=>{
        let connection = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'dD1354268!',
            port: 3306,
            database: 'gymwear'
          });
          connection.getConnection((err,conn)=>{
            conn.query(`INSERT INTO gymwear.new_table(id, password, name, phone1, phone2, phone3, email) VALUES (
                      '${object.id}', '${object.password}','${object.name}','${object.phone1}', '${object.phone2}','${object.phone3}','${object.email}'
                    )`, function (error, results1, fields) {
                      if (error) {
                        console.error("데이터베이스에 데이터 쓰기 오류");
                        reject(false);
                      } else {
                        console.log('회원가입 완료:', results1);
                        resolve(true)
                      }
                    });
              conn.release();
          })
    })
    }
    export default join2