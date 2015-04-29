/**
*
* Module Dependencies
*
**/
var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');

/**
*
* Express init
*
**/
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
*
* View Engine setup
*
**/
app.set("views", path.join(__dirname, "/public/"));
app.set("view_engine", "html").engine("html",function(path,options,fn){
	if("function" == typeof options){
		fn = options;
		options = {}
	}
	return fs.readFile(path, "utf8", fn);
});
app.use(express.static(path.join(__dirname, "/public")));


/**
*
* Mongoose Connect
*
**/

require('./models/init');
require('./models/users');
var mongoose = require('mongoose'),
	users = mongoose.model('User');


app.post('/api/users',function(req, res){
	new users(req.body).save(function(err,docs){
		console.log("Request Body:" +req.body);
		console.log(err || docs);
		res.sendStatus(err ? 400 : 200);
	});
})
/**
*
* Routes
*
**/
var Route = require('./routes/routes');

/**
*
* Create Server
*
**/

app.listen(process.env.PORT || 3000 , function(){
	console.log("Express listening on port " + (process.env.PORT || 3000));
});
