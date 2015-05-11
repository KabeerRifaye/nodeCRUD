/* Edit Controller */

nodecrud.controller('editController', function($scope, $http, $routeParams, $location){

	$scope.title = "Edit User";
	
	$http.get('/api/user/'+$routeParams.id)
	.success(function(user){
		console.log("User is : " ,user);
		$scope.user = user;
	})
	.error(function(){
		console.log("Error getting users");
	});

	$scope.updateuser = function(){
		var Uuser = {
			firstname: $scope.user.firstname,
			lastname: $scope.user.lastname,
			email: $scope.user.email,
			age: $scope.user.age,
			_id: $scope.user._id
		};
		console.log(Uuser);
		$http.put('/api/user/'+$routeParams.id, Uuser)
		.success(function(user){
			console.log(user);
			$location.path('/');
		})
		.error(function(){
			console.log("User update error..!!!");
		});
	};
	
});
