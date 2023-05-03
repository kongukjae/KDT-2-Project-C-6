let object = {
  id:"강지민1",
  password:"코드기어",
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
  
  connection.connect();
  
  connection.query(`insert into test.new_table(id_, password, name) values ('${object.id}', '${object.password}','${object.name}')`, function (error, results, fields) {
    if (error) {
      console.log("error")
    };
    console.log('The solution is: ', results);
  });
  
  connection.end();


}

join(object)