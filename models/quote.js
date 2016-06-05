var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSchema = new Schema({
  content:String,
  author: String
});

mongoose.model('quote', quoteSchema);
