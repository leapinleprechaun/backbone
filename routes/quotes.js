var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Quote = require('../models/quote'); //bring in the quote model

var bodyParser = require('body-parser'); //needed to get form data in correctly
var parseUrlencoded = bodyParser.urlencoded({extended:false}); //return value is a middleware function

router.route('/') //this already runs off /quote from where it was mounted
.get(function (request,response) {
  mongoose.model('quotes').find(function(err, quotes){
    if(err){
      response.send(500, 'There was an error - tough luck.');
    } else {
      response.json(quotes);
    }
  })
})
.post(parseUrlencoded,function (request,response) {
  var quote = new Quote({
    content: request.body.content,
    author: request.body.author
  });

  quote.save(function(err, model) {
    if (err) {
      response.send(500, 'There was an error - tough luck.');
    } else {
      response.redirect('/');
    }
  });
});


module.exports = router;
