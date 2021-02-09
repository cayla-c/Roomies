DROP DATABASE IF EXISTS roomies;

CREATE DATABASE roomies;

USE roomies;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  firstName VARCHAR(20) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  phoneHome VARCHAR(15) NOT NULL,
  phoneCell VARCHAR(15) NOT NULL,
  email VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS room;

CREATE TABLE rooms (
  roomId INT NOT NULL AUTO_INCREMENT,
  dorm VARCHAR(20) NOT NULL,
  roomNo VARCHAR(20) NOT NULL,
  single TINYINT NOT NULL,
  mar21UserId INT,
  PRIMARY KEY (roomId)
);

DROP TABLE IF EXISTS roomReqs;

CREATE TABLE roomReqs (
  reqId INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  approxAge VARCHAR(20) NOT NULL,
  rrPref VARCHAR(30) NOT NULL,
  emergencyName VARCHAR(50) NOT NULL,
  emergencyPhone VARCHAR(15) NOT NULL,
  checkIn VARCHAR(50) NOT NULL,
  checkOut VARCHAR(50) NOT NULL,
  arrTime VARCHAR(50) NOT NULL,
  roomType VARCHAR(20) NOT NULL,
  roommateUserId VARCHAR(30),
  PRIMARY KEY (reqId)
);


LOAD DATA LOCAL INFILE './database/users.csv'
INTO TABLE users
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
IGNORE 1 ROWS
(userId, firstName, lastName, phoneHome, phoneCell, email);

LOAD DATA LOCAL INFILE './database/rooms.csv'
INTO TABLE rooms
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
IGNORE 1 ROWS
(dorm, roomNo, single, mar21UserId);

LOAD DATA LOCAL INFILE './database/roomReq.csv'
INTO TABLE roomReqs
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
IGNORE 1 ROWS
(userId, approxAge, rrPref, emergencyName, emergencyPhone, checkIn, checkOut, arrTime, roomType, roommateUserId);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < Schema.sql
 *  to create the database and the tables.
 *
 *  Re-execute this file from inside the MySQl shell by typing:
 *  source Schema.sql;
 */
