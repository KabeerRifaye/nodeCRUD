/* Edit Controller */

nodecrud.controller('editController', function($scope, $http){

	$scope.title = "Edit User";

	$scope.edit = function(id){
		$http.get('/api/user/'+id)
		.success(function(user){
			console.log("User is : " ,user);
			$scope.user = user;
		})
		.error(function(){
			console.log("Error getting users");
		});
	};

	$scope.editusers = function(){

	};
	
});
