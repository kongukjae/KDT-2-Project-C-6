import mysql from 'mysql2'

let object = {
  userid: "wlals1234560123232112",
  password: "dD1354268",
  name: "강지민",
  number1: 10,
  number2: 4928,
  number3: 7382,
  email: "naver.com"
}

function join(object) {
  let connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'dD1354268!!',
    port: 3307,
    database: 'test'
  });

  connection.getConnection((err, conn) => {
    if (err) {
      console.log(err);
      return false
    } else {
      console.log("DB와 연결 완료");

      conn.query(`SELECT * FROM test.new_table WHERE userid ="${object.userid}"`, (error, results) => {
        if (error) {
          console.log("에러발생")
          return false;
        } else {
          if (results.length >= 1) {
            console.log("아이디 중복 발생")
            return false;
          } else {
            conn.query(`INSERT INTO test.new_table(userid, password, name, number1, number2, number3, email) VALUES (
              '${object.userid}', '${object.password}','${object.name}',${object.number1}, ${object.number2},${object.number3},'${object.email}'
            )`, function (error, results1, fields) {
              if (error) {
                console.log(error)
                return false;
              } else {
                console.log('회원가입 완료:', results1);
                return true;
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
console.log(join(object))
