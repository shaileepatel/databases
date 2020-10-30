var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body.message, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send('success');
      }
    });
  } // a function which handles posting a message to the database
};
