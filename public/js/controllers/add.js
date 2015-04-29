/* addController */


nodecrud.controller('addController', function($scope, $http, $location){
	
	$scope.title = "Add new user";
	
	$scope.addnew = function(){
		var userinfo = {
			fname: $scope.regusers.fname,
			lname: $scope.regusers.lname,
			age: $scope.regusers.age,
			email: $scope.regusers.email
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