var express = require('express');
var app = express();

var mongoose = require('mongoose');
var connect = require('./connect'); //connection details stored seperately
var fs = require('fs'); //files system library

/* Flip a switch for dev or production */
var isDevelopment = true;
var db = if(isDevelopment) ? connect.connectToMongoDev() : connect.connectToMongoProd();

/* Requiring in all js files in the models directory */
fs.readdirSync(__dirname + '/models' ).forEach(function(filename){
    if(~filename.indexOf('.js')){
        require(__dirname + '/models/' + filename);
    }
})

/* Requiring and mounting routes */
var defaultRoute = require('./routes/default'); //require the route
app.use('/',defaultRoute); //mount the route

var users = require('./routes/users');
app.use('/users',users);

var quotes = require('./routes/quotes');
app.use('/quotes',quotes);

app.listen(3000, function(){
    console.log('listening on port 3000');
});
