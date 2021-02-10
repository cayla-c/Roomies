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
    connection.query('SELECT dorm, roomNo, single FROM rooms WHERE mar21UserId = 0;', function(err, list) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, list);
      }
    });
  },

  /// find all filled rooms for a given night:
  selectAllOccupied: function(callback) {
    connection.query('SELECT rooms.dorm, rooms.roomNo, users.firstName, users.lastName, users.phoneCell, roomReqs.emergencyName, roomReqs.emergencyPhone FROM rooms LEFT JOIN users ON rooms.mar21UserId=users.userId JOIN roomReqs ON users.userId=roomReqs.userId WHERE rooms.mar21UserId>0;', function(err, list) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, list);
      }
    });
  }

  /// assign someone to a room:
  // UPDATE rooms SET mar21UserId = ? WHERE roomNo = ?; ---- can you have two '?' going on?
}
