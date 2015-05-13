/* Mongoose Connecttion */

var mongoose = require('mongoose');

var db = 'meanCRUD';

var MONGOLAB_URI =  'mongodb://heroku_app36750892:jksqplro0dos111c74irhae67j@ds063170.mongolab.com:63170/heroku_app36750892';

var MONGOHQ_URL = 'mongodb://heroku:jtXW_5x9qev3ohrpaSZtd-iezBvchlTJ-NF8HystrT88jiGag-7-gGlBJmX1mtl8jib7sJ4ZzZDiYQQNkftGjQ@candidate.10.mongolayer.com:10422,candidate.7.mongolayer.com:10403/app36750892';

var URI = MONGOLAB_URI || MONGOHQ_URL || 'mongodb://localhost/'+db;

/* Connect Mongoose */

mongoose.connect(URI, function(e){
	console.log(e ? "Error connecting with mongodb : " +e : "Connected to database : " +db);
});

