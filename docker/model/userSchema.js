//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName : {
        type : Number, // String
        required : true,
        unique : true
    },
    lastName : Number //String
});

let User = mongoose.model('user', userSchema );
module.exports = User;