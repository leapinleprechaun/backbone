var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user'); //bring in the user model

var bodyParser = require('body-parser'); //needed to get form data in correctly
var parseUrlencoded = bodyParser.urlencoded({extended:false}); //return value is a middleware function

router.route('/') //this already runs off /user from where it was mounted
.get(function (request,response) {
  mongoose.model('users').find(function(err, users){
    if(err){
      response.send(500, 'There was an error - tough luck.');
    } else {
      response.json(users);
    }
  });

})
.post(parseUrlencoded,function(request,response){
  var user = new User({
    name: request.body.name,
    age: request.body.age,
    location: request.body.location,
    areasOfInterest: request.body.areasOfInterest
  });

  user.save(function(err, model) {
    if (err) {
      response.send(500, 'There was an error - tough luck.');
    } else {
      response.redirect('/');
    }
  });

});


module.exports = router;
