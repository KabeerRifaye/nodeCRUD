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

/**
*
* Routes Configutation
*
**/

/* Create new user */

app.post('/api/user/add',function(req, res){
	new users(req.body).save(function(err,docs){
		// console.log("Request Body:" +req.body);
		console.log(err || docs);
		res.sendStatus(err ? 400 : 200);
	});
});

/* List all users from database */

app.get('/api/users',function(req, res){
	users.find(function(err,users){
		console.log(err || 'user listed successfully');
		res.json(users);
	});
});

/* Delete user */

app.delete('/api/users/:id', function(req, res){
	users.findByIdAndRemove(req.params.id, function(err, users){
		console.log(err || 'Deleted user: ' ,users);
		res.json(users);
	});
});

/* Edit user */

app.get('/api/user/:id', function(req, res){
	users.findOne(req.params.id, function(err, users){
		console.log(err || 'Edit user page loaded successfully');
		res.json(users);
	});
});

/**
*
* Create server
*
**/

app.listen(process.env.PORT || 3000 , function(){
	console.log("Express listening on port " + (process.env.PORT || 3000));
});
