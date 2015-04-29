var nodecrud = angular.module('nodecrud',['ngRoute','crudController']);

var crudController = angular.module('crudController',[]);

// Route Configuration
nodecrud.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/index',{
			templateUrl: 'views/index.html'
		}).
		when('/edit',{
			templateUrl: 'views/edit.html',
			controller: 'editController'
		}).
		when('/view',{
			templateUrl: 'views/view.html',
			controller: 'editController'
		}).
		when('/addnew',{
			templateUrl: 'views/addnew.html',
			controller: 'addController'
		}).
		otherwise({
			redirectTo: '/index'
		});
}]);