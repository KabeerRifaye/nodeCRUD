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
	}	
});