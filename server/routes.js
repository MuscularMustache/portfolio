// routes
module.exports = function(app) {

  var resume = require('./controllers/resume-controller')(app);

  //-- resume
  app.get('/api/resume', resume.index);

};
