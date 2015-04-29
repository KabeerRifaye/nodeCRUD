/**
*
* Routes Configuration
*
**/

/* Collections */

var User = require('../models/users');

// exports = module.exports = {
// 	Index: function(req, res){
// 		res.send("Hello World");
// 	},
// 	User: {
// 		create: function(req, res){
// 			new User(req.body).save(function(err,user){
// 				err ? res.sendStatus(400) : res.send(user);
// 			});
// 		},
// 	}

// }

// exports.create = function(req, res, next){
// 	var user = new User(req.body);
// 	user.save(function(err){
// 		if(err){
// 			return next(err);
// 		}else{
// 			res.json(next);
// 		}
// 	});
// };

// module.exports = function(app){
// 	app.route('/users').post(create);
// }
