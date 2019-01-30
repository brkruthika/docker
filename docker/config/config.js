let mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://172.17.0.3/docker';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

db.once('open',(err) => {
    if(!err) {
        console.log("mongoDb started!!");
    } else {
        console.log("problem in connecting mongoDb");
    }
});

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
