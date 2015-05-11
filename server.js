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
	User = mongoose.model('User');


/* Create new user */

app.post('/api/user',function(req, res){
	new User(req.body).save(function(err,docs){
		console.log(err || docs);
		res.sendStatus(err ? 400 : 200);
	});
});

/* List all users from database */

app.get('/api/users',function(req, res){
	User.find(function(err,users){
		console.log(err || 'user listed successfully');
		res.json(users);
	});
});

/* Edit user */

app.get('/api/user/:id', function(req, res){
	User.findOne({_id: req.params.id}, function(err, user){
		console.log(err || 'Edit user page loaded successfully');
		res.json(user);
	});
});

/* Delete user */

app.delete('/api/user/:id', function(req, res){
	User.remove({_id: req.params.id}, function(err){
		console.log(err || 'Deleted user');
		res.sendStatus(200);
	});
});

/* Update user */

app.put('/api/user/:id', function(req, res){
	User.update({_id: req.params.id},{
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		age: req.body.age
	}, function(err){
		console.log(err || 'User updated');
		res.sendStatus(200);
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
