import mysql from 'mysql2'

let object = {
  userid: "wlals1234560123",
  password: "dD1354268",
  name: "강지민",
  number1: "10",
  number2: "4929",
  number3: "7381",
  email: "naver.com"
}

function join(object) {
  let connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'dD1354268!',
    port: 3306,
    database: 'gymwear'
  });

  connection.getConnection((err, conn) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB와 연결 완료");

      conn.query(`SELECT * FROM gymwear.new_table WHERE id ="${object.userid}"`, (error, results) => {
        if (error) {
          console.log("에러발생")
        } else {
          if (results.length >= 1) {
            console.log("아이디 중복 발생")
          } else {
            conn.query(`INSERT INTO gymwear.new_table(id, password, name, phone1, phone2, phone3, email) VALUES (
              '${object.userid}', '${object.password}','${object.name}','${object.number1}', '${object.number2}','${object.number3}','${object.email}'
            )`, function (error, results1, fields) {
              if (error) {
                console.log(error)
              } else {
                console.log('회원가입 완료:', results1);
              }
            });
          }
        }
        conn.release();
      })
    }
  });
}

join(object)