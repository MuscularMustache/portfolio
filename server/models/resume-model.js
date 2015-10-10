var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resumeSchema = new Schema({
  name:  String,
  position: String,
  date: { type: Date, default: Date.now },
  description: String
});

// mongoose automatically looks for the plural version of our model name
// thus, Employer will look for employers as my collection name
var Employer = mongoose.model('Employer', resumeSchema);

module.exports = Employer;
