DROP DATABASE IF EXISTS roomies;

CREATE DATABASE roomies;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  userId INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(20) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  phoneCell VARCHAR(15) NOT NULL,
  phoneHome VARCHAR(15) NOT NULL,
  email VARCHAR(30) NOT NULL,
  student TINYINT,
  faculty TINYINT,
  staff TINYINT,
  vendor TINYINT,
  guest TINYINT,
  board TINYINT,
  donor TINYINT,
  instrument VARCHAR(30),
  attYears TINYINT,
  PRIMARY KEY (id),
  INDEX (id),
  INDEX (lastName)
);

DROP TABLE IF EXISTS room;

CREATE TABLE rooms (
  roomId INT NOT NULL AUTO_INCREMENT,
  dorm VARCHAR(20) NOT NULL,
  roomNo VARCHAR(20) NOT NULL,
  single TINYINT NOT NULL,
  -- checked TINYINT NOT NULL,
  -- lightIssue VARCHAR(100) NOT NULL,
  -- airIssue VARCHAR(100) NOT NULL,
  -- windowIssue VARCHAR(100) NOT NULL,
  -- furnitureIssue VARCHAR(100) NOT NULL,
  -- smellIssue VARCHAR(100) NOT NULL,
  -- otherIssue VARCHAR(100) NOT NULL,
  mar21UserId INT,
  -- mar22UserId INT,
  -- mar23UserId INT,
  -- mar24UserId INT,
  -- mar25UserId INT,
  -- mar26UserId INT,
  -- mar27UserId INT,
  -- swept TINY INT NOT NULL,
  PRIMARY KEY (id),
  INDEX (dorm),
  INDEX (roomNo)
);

DROP TABLE IF EXISTS roomReq;

CREATE TABLE roomReq (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  approxAge VARCHAR(20) NOT NULL,
  rrPref VARCHAR(30) NOT NULL,
  emergencyName VARCHAR(50) NOT NULL,
  emergencyPhone VARCHAR(15) NOT NULL,
  -- checkIn DATE NOT NULL,
  -- checkOut DATE NOT NULL,
  -- arrTime TIME NOT NULL,
  roomType VARCHAR(20) NOT NULL,
  roommateName VARCHAR(30),
  -- mealCard TINYINT NOT NULL,
  -- linens TINYINT NOT NULL,
  -- comment VARCHAR(100),
  PRIMARY KEY (id),
  -- INDEX (checkIn),
  -- INDEX (checkOut),
  -- INDEX (mealCard),
  -- INDEX (linens)
);

-- DROP TABLE IF EXISTS keys;

-- CREATE TABLE keys (
--   id INT NOT NULL AUTO_INCREMENT,
--   roomId INT NOT NULL,
--   keyCode VARCHAR(10) NOT NULL,
--   numKeys TINYINT NOT NULL,
--   PRIMARY KEY (id)
-- );

LOAD DATA LOCAL INFILE 'make some files'
INTO TABLE users
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
(firstName, lastName, phoneCell, phoneHome, email, student, faculty, staff, vendor, guest, board, donor, instrument, attYears);

LOAD DATA LOCAL INFILE 'another file'
INTO TABLE rooms
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
(dorm, roomNo, single, mar21UserId);

LOAD DATA LOCAL INFILE 'yet another file'
INTO TABLE roomReq
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
(userId, approxAge, rrPref, emergencyName, emergencyPhone, roomType, roommateName);

-- LOAD DATA LOCAL INFILE 'even another file more'
-- INTO TABLE keys
-- FIELDS TERMINATED BY ','
-- OPTIONALLY ENCLOSED BY '"'
-- (roomId, keyCode, numKeys);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < Schema.sql
 *  to create the database and the tables.
 *
 *  Re-execute this file from inside the MySQl shell by typing:
 *  source Schema.sql;
 */
