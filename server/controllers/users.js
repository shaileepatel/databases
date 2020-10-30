var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log(req.body);
    res.end();
  },
  post: function (req, res) {
    console.log(req.body);
    models.users.create(req.body.username, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send('success');
      }
    });
  }
};
