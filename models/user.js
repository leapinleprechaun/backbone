var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  age: Number,
  location: String,
  areasOfInterest: [String]
});

mongoose.model('user', userSchema);
