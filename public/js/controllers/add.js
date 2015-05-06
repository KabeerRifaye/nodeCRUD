/* addController */

nodecrud.controller('addController', function($scope, $http, $location){
	
	$scope.title = "Add new user";

	$scope.addnew = function(){
		var userinfo = {
			firstname: $scope.user.firstname,
			lastname: $scope.user.lastname,
			email: $scope.user.email,
			age: $scope.user.age
		};
		console.log(userinfo);
		$http.post('/api/users', userinfo).success(function(response) {
                $location.path('#/index');
            }).error(function(response) {
                console.log(response.message);
            });
		// console.log(userinfo);
	};	

	$scope.find = function(){
		$http.get('/api/users/viewall').success(function(users){
			$scope.users = users;
			console.log(users);
		}).error(function(response){
			console.log(response.message)
		});
	};

	$scope.Delete = function(id){
		$http.delete('/api/users/'+id).success(function(response){
			console.log('User deleted');
			$location.path('#/index');
		}).error(function(err){
			console.log("Error in user deletion");
		});
	};

});