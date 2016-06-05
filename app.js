var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    connect = require('./connect'), //connection details kept seperately
    authentication = require('./authentication'), //local auth details kept seperately
    fs = require('fs'), //files system library
    isDevelopment,
    db,
    users,
    quotes;

/* Flip a switch for dev or production */
isDevelopment = true;
db = isDevelopment ? connect.connectToMongoDev() : connect.connectToMongoProd();

/* Requiring in all js files in the models directory */
fs.readdirSync(__dirname + '/models' ).forEach(function(filename){
    if(~filename.indexOf('.js')){
        require(__dirname + '/models/' + filename);
    }
})

app.use('/',authentication); //auth details held seperately
app.use('/',express.static('public'));

users = require('./routes/users');
app.use('/users',users);

quotes = require('./routes/quotes');
app.use('/quotes',quotes);

app.listen(3000, function(){
    console.log('listening on port 3000');
});
