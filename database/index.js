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

  /// get list of unassigned users:
  selectUnassigned: function(callback) {
    connection.query('SELECT users.userId, users.firstName, users.lastName, roomReqs.approxAge, roomReqs.rrPref, roomReqs.roomType, roomReqs.roommateUserId FROM users LEFT JOIN roomReqs ON users.userId=roomReqs.userId WHERE NOT EXISTS (SELECT * FROM rooms WHERE users.userId=rooms.mar21UserId);', function(err, list) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, list);
      }
    })
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
  },

    /// get details about one room:
  selectOneRoom: function(params, callback) {
      connection.query('SELECT rooms.dorm, rooms.roomNo, rooms.single, rooms.mar21UserId, users.firstName, users.lastName FROM rooms LEFT JOIN users ON rooms.mar21UserId=users.userId WHERE rooms.roomNo = ?;', params, function(err, room) {
        if(err) {
          callback(err, null);
        } else {
          callback(null, room);
        }
      });
    },

  /// assign someone to a room:
  assignRoom: function(params, callback) {
    console.log('params received ', params)
    connection.query(`UPDATE rooms SET mar21UserId = ${params.userId} WHERE roomId = ${params.roomId};`, function(err, success) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, success);
      }
    });
  }

}
