var express = require('express');
var app = express();

var mongoose = require('mongoose');

var connect = require('./connect'); //connection details stored seperately

/* Flip a switch for dev or production */
var isDevelopment = true;
var db;
if(isDevelopment){
  db = connect.connectToMongoDev();
} else {
  db = connect.connectToMongoProd();
}

app.get('/',   function (request,response) {
 response.send('hello world');
});

app.listen(3000, function(){
    console.log('listening on port 3000');
});
