
var utils = {};

utils.getDBConn = function() {
    
    //get the database connection.
    var mongoose = require('mongoose'); //mongo db api.
    //var MongoClient = require('mongodb').MongoClient;
   
    //connect to the database. 
    mongoose.connect('mongodb://localhost:27017/is217');
   
    
    var db = mongoose.connection;
    //check if connection was sucessfull
    
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
        console.log("Connection Sucessful"); 
    });
    
    return db; 
    
}

exports.utils = utils; 
