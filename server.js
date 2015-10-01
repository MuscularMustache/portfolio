var express    = require('express'),
    app        = express(),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser');


app.listen('3000', function() {
  console.log('listening');
});

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/client/index.html');
});

// serve static files to client
app.use(express.static(__dirname + '/client'));
app.use('/build', express.static(__dirname + '/build/assets'));
app.use('/bower', express.static(__dirname + '/bower_components'));
