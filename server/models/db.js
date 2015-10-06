var mongoose = require('mongoose');
var db = mongoose.connection;
// console.log(db);

// connect database
mongoose.connect('mongodb://localhost:27017/portfolio');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('connected in db.js');
});
