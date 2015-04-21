/* Module Dependencies */

var express = require('express'),
	path = require('path')

/* Express Init */

var app = express();

/* View Engine Setup */

app.set("views", path.join(__dirname, "/public/"));
app.set("view_engine", "html").engine("html",function(path,options,fn){
	if("function" == typeof options){
		fn = options;
		options = {}
	}
	return fs.readFile(path, "utf8", fn);
});
app.use(express.static(path.join(__dirname, "/public")));


/* Server Request */
app.listen(process.env.PORT || 3000 , function(){
	console.log("Express listening on port " + (process.env.PORT || 3000));
});
