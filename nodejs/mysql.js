var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1004',
  database : 'opentutorials'
});

connection.connect();

connection.query('SELECT * FROM topic', function (error, results, fields) {
if(err) {
  console.log(error);
}

  console.log(results);
});

connection.end();
