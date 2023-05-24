
let object = {
  id: "wlals1234560123",
  password: "dD1354268",
  name: "강지민",
  phon1: "10",
  phone2: "4929",
  phone3: "7381",
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
      console.err("DB연결 에러");
    } else {
      console.log("DB와 연결 완료");

      conn.query(`SELECT * FROM gymwear.new_table WHERE id ="${object.id}"`, (error, results) => {
        if (error) {
          console.err("에러발생")
        } else {
          if (results.length >= 1) {
            console.log("아이디 중복 발생")
          } else {
            conn.query(`INSERT INTO gymwear.new_table(id, password, name, phone1, phone2, phone3, email) VALUES (
              '${object.id}', '${object.password}','${object.name}','${object.phon1}', '${object.phone2}','${object.phone3}','${object.email}'
            )`, function (error, results1, fields) {
              if (error) {
                console.err("데이터베이스에 데이터 쓰기 오류");
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