/* User Schema file */

var mongoose = require('mongoose');

/* Schema for user collection */

var userSchema = mongoose.Schema({
	firstname: {type:String},
	lastname: {type:String},
	email: {type:String},
	age: {type:Number},
	created_at: {type: Date, default:new Date()}
});

/* Export */

exports = module.exports = mongoose.model('User', userSchema);



