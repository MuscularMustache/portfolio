var express    = require('express'),
    app        = express(),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser');


app.listen('4000', function() {
  console.log('listening');
});

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/client/index.html');
});
