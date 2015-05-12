/* Mongoose Connecttion */

var mongoose = require('mongoose');

var db = 'meanCRUD';

var process.env.MONGOLAB_URI = 'mongodb://heroku_app36750892:vl4395v7dgsc650ev63oovn7m9@ds035702.mongolab.com:35702/heroku_app36750892';

var URI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/'+db;

/* Connect Mongoose */

mongoose.connect(URI, function(e){
	console.log(e ? "Error connecting with mongodb : " +e : "Connected to database : " +db);
});

