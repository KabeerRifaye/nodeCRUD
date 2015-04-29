/* Mongoose Connecttion */

var mongoose = require('mongoose');

var db = 'meanCRUD';

var URI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/'+db;

/* Connect Mongoose */

mongoose.connect(URI, function(e){
	console.log(e ? "Error connecting with mongodb : " +e : "Connected to database : " +db);
});

