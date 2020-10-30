var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connection.query('SELECT * FROM messages', callback);
  }, // a function which produces all the messages
  create: function (message, callback) {
    db.connection.query(`Insert INTO messages (msg) values ("${message}")`, callback);
  } // a function which can be used to insert a message into the database
};
