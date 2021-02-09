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

  selectAll: function(callback) {
    connection.query('SELECT * FROM users', function(err, results, fields) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  };
}
