/* addController */

nodecrud.controller('addController', function($scope, $http, $location){
	
	$scope.title = "Add new user";

	/* Add new user */
	
	$scope.addnew = function(){
		var userinfo = {
			firstname: $scope.user.firstname,
			lastname: $scope.user.lastname,
			email: $scope.user.email,
			age: $scope.user.age
		};
		console.log(userinfo);
		$http.post('/api/user', userinfo).success(function(response) {
                $location.path('#/index');
            }).error(function(response) {
                console.log(response.message);
            });
	};	

	/* List all the registered users */
	
	$scope.find = function(){
		$http.get('/api/users').success(function(users){
			$scope.users = users;
		}).error(function(response){
			console.log(response.message)
		});
	};

	/* Delete the user by using _id */
	
	$scope.Delete = function(id){
		$http.delete('/api/user/'+id).success(function(response){
			console.log('User deleted');
			$scope.find();
		}).error(function(err){
			console.log("Error in user deletion");
		});
	};
});