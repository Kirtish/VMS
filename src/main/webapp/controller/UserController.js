var userModule = angular.module('UserModule',[]);
userModule.controller('UserController',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location){
	$http.get('http://localhost:8080/VMS/api/rest/user/').success(function (data){
		$scope.users = data;
	});	
	// fetch if param id exists
	if($routeParams.id){
		$http.get('http://localhost:8080/VMS/api/rest/user/'+$routeParams.id).success(function (data){
		$scope.user = data;
	});
	}
	// delete user
	 $scope.deleteUser = function(user) {
		  $http.get('http://localhost:8080/VMS/api/rest/user/delete/'+user.id).success(function (data){
		   var index = $scope.users.indexOf(user);
		   $scope.users.splice(index, 1);
		 });
 };
  // add user 
    $scope.addUser = function(user) {
		 var data = {firstName : user.firstName,
		             middleName : user.middleName,
		             lastName: user.lastName,
					 loginId:user.loginId,
					 password: user.password,
					 email: user.email} ;
		 $http.post('http://localhost:8080/VMS/api/rest/user/save',data).success(function (data,status,headers){
		    $location.path("/admin/users");
		 });
  };
   // update User
   $scope.updateUser = function(user) {
		var data = { 
		             id: user.id,
		             firstName : user.firstName,
		             middleName : user.middleName,
		             lastName: user.lastName,
					 loginId:user.loginId,
					 password: user.password,
					 email: user.email,
					 deleted : user.deleted} ;
					 
		 $http.post('http://localhost:8080/VMS/api/rest/user/save',data).success(function (data,status,headers){
		 $location.path("/admin/users");
		 });
  };
  
  // reset
  $scope.reset = function() {
	  if(!$routeParams.id){
     $scope.user.firstName = "";
	 $scope.user.middleName = "";
	 $scope.user.lastName = "";
	 $scope.user.loginId = "";
	 $scope.user.password = "";
	 $scope.user.email = "";
	 
   }else{
	  // need to implement update reset 
   }
  };
  
}]);

 

