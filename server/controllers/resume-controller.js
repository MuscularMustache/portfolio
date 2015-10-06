var model = require('../models/resume-model');

// resume controller
module.exports = function(app) {
  return {
    index: function(req,res,next) {

      model.employer.find(function(err, employers) {
        if (err) {
          return console.error(err);
        }
        // properly sends employers from out database to our /api/resume route
        res.send(employers);
      });

    }
  };
};
