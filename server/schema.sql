CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS messages (
  id INT NOT NULL AUTO_INCREMENT,
  msg VARCHAR(50),
  user_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

