var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var db         = require('./server/models/db'); // connects database
var resume     = require('./server/models/resume-model');

// use body parser middleware
// app.use(bodyParser());


app.listen('3000', function() {
  console.log('listening');
});

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/client/index.html');
});

// serve static files to client
app.use(express.static(__dirname + '/client'));
app.use('/bower', express.static(__dirname + '/bower_components'));

// load api routes
require('./server/routes')(app);
