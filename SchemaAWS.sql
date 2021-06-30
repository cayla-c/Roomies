DROP DATABASE IF EXISTS roomies;

CREATE DATABASE roomies;

USE roomies;

DROP TABLE IF EXISTS people;

CREATE TABLE people (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  prefix VARCHAR(10),
  firstName VARCHAR(20) NOT NULL,
  middleName VARCHAR(20),
  lastName VARCHAR(30) NOT NULL,
  suffix VARCHAR(10),
  nickName VARCHAR(20),
  phoneCell VARCHAR(15) NOT NULL,
  phoneHome VARCHAR(15) NOT NULL,
  email VARCHAR(30) NOT NULL,
  addressLine1 VARCHAR(60),
  addressLine2 VARCHAR(60),
  addressCity VARCHAR(50),
  addressState VARCHAR(40),
  addressZIP VARCHAR(10),
  addressCountry VARCHAR(30),
  areaOfStudy1 VARCHAR(15) NOT NULL,
  areaOfStudy2 VARCHAR(15),
  areaOfStudy3 VARCHAR(15),
  areaOfStudy4 VARCHAR(15),
  areaOfStudy5 VARCHAR(15),
  program1 VARCHAR(20),
  program2 VARCHAR(20),
  program3 VARCHAR(20),
  program4 VARCHAR(20),
  role1 VARCHAR(15) NOT NULL,
  role2 VARCHAR(15),
  role3 VARCHAR(15),
  role4 VARCHAR(15),
  role5 VARCHAR(15),
  vendorCo VARCHAR(30),
  guestOf VARCHAR(30),
  yearsAttended INT,
  arrivalDate VARCHAR(20),
  departureDate VARCHAR(20),
  housingRequested VARCHAR(10) NOT NULL,
  mealCardRequested VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS rooms;

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


LOAD DATA INFILE './database/people.csv'
INTO TABLE people
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
TERMINATED BY '\n\'
IGNORE 1 ROWS
(userId, prefix, firstName, middleName, lastName, suffix, nickName, phoneCell, phoneHome, email, addressLine1, addressLine2, addressCity, addressState, addressZip, addressCountry, areaOfStudy1, areaOfStudy2, areaOfStudy3, areaOfStudy4, areaOfStudy5, program1, program2, program3, program4, role1, role2, role3, role4, role5, vendorCo, guestOf, yearsAttended, arrivalDate, departureDate, housingRequested, mealCardRequested);

LOAD DATA INFILE './database/rooms.csv'
INTO TABLE rooms
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
TERMINATED BY '\n\'
IGNORE 1 ROWS
(dorm, roomNo, single, mar21UserId);

LOAD DATA INFILE './database/roomReq.csv'
INTO TABLE roomReqs
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
TERMINATED BY '\n\'
IGNORE 1 ROWS
(userId, approxAge, rrPref, emergencyName, emergencyPhone, checkIn, checkOut, arrTime, roomType, roommateUserId);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < SchemaAWS.sql
 *  to create the database and the tables.
 (visit here if problems: https://stackoverflow.com/questions/59993844/error-loading-local-data-is-disabled-this-must-be-enabled-on-both-the-client)
 (or here: https://stackoverflow.com/questions/10762239/mysql-enable-load-data-local-infile)
 *
 *  Re-execute this file from inside the MySQl shell by typing:
 *  source SchemaAWS.sql;
 */
