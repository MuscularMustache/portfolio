// routes
module.exports = function(app) {

  var resume = require('./controllers/resume-controller')(app);

  //-- resume
  app.get('/api/resume', resume.show);
  app.post('/api/resume', resume.add);
  app.delete('/api/resume/:id', resume.remove);

};
