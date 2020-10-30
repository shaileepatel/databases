var db = require('../db');

module.exports = {
  getAll: function () {},
  create: function (name, callback) {
    db.connection.query(`Insert INTO users (username) values ("${name}")`, callback);
  }
};

// module.exports.create('kp');