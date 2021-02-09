const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Matthias',
  database : 'roomies'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to Roomies DB! ', connection.threadId)
  }
});

/////////// DATABASE QUERIES:

module.exports = {

  /// find all empty rooms for a given night:
  selectAllEmpties: function(callback) {
    connection.query('SELECT dorm, roomNo, single FROM rooms WHERE mar21UserId = 0;', function(err, results) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }
}
