var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    User = require('../models/user'), //bring in the user model
    bodyParser = require('body-parser'), //needed to get form data in correctly
    parseUrlencoded = bodyParser.urlencoded({extended:false}), //return value is a middleware function
    getUsers,
    postUser,
    deleteUser;

/* Each method out on its own first , for legibility. Route list at the end */
getUsers = function (request,response) {
 mongoose.model('users').find(function(err, users){
   if(err){
     response.send(500, 'There was an error - tough luck.');
   } else {
     response.json(users);
   }
 });
}

postUser = function(request,response){
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

};

deleteUser = function (request,response) {
  User.remove({_id:request.body.id}).exec();
};


/* Actual route calls & middleware calls */

router.route('/') //this already runs off /user from where it was mounted
.get(getUsers)
.post(parseUrlencoded,postUser)
.delete(parseUrlencoded,deleteUser);


module.exports = router;
