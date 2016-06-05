var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSchema = new Schema({
  content:String,
  author: String
});

var quoteModel = mongoose.model('quotes', quoteSchema);
module.exports = quoteModel;
