var model = require('../models/resume-model');

// resume controller
module.exports = function(app) {
  return {
    show: function(req, res, next) {
      // show employers
      model.find(function(err, employers) {
        if (err) {
          return console.error(err);
        }
        // properly sends employers from out database to our /api/resume route
        res.send(employers);
      });
    },
    add: function(req, res, next) {
      var employer = new model(req.body);

      // this will save this to the database
      employer.save(function(error, result) {
        // this sends it back to the client
        res.json(result);
      });
    },
    remove: function(req, res, next) {
      console.log('removing');
      model.remove({_id: req.params.id}, function() {
        return res.send();
      });
    }
  };
};
