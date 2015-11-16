var adminControlModule = angular.module('AdminController',[]);

adminControlModule.controller('RoleListCtrl',['$scope','$http',function($scope,$http){
	$http.get('http://localhost:8080/VMS/api/rest/role/').success(function (data){
		$scope.roles = data;
	});	
}]);