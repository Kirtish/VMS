var adminControlModule = angular.module('AdminController',[]);
adminControlModule.controller('RoleListCtrl',['$scope','$http',function($scope,$http){
	$http.get('http://localhost:8080/VMS/api/rest/role/').success(function (data){
		$scope.roles = data;
	});	
	 $scope.delete = function(role) {
		  $http.get('http://localhost:8080/VMS/api/rest/role/delete/'+role.id).success(function (data){
		   var index = $scope.roles.indexOf(role);
		   $scope.roles.splice(index, 1);
		 });
};
}]);
adminControlModule.controller('RoleController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){
	$scope.role = {};
	$scope.addRole = function(role) {
		 var data = {code : role.code,descr: role.descr} ;
		 $http.post('http://localhost:8080/VMS/api/rest/role/save',data).success(function (data,status,headers){
		 $location.path("/admin/roles");
		 });
  };
 $scope.reset = function() {
	  $scope.role.code = "";
	  $scope.role.descr = "";
  };
   if(!$routeParams.id){
     $scope.reset();
   }
}]);

adminControlModule.controller('RoleEditController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){
	$scope.role = {};
	 if($routeParams.id){
	   alert($routeParams.id);
	    $http.get('http://localhost:8080/VMS/api/rest/role/'+$routeParams.id).success(function (data){
		    $scope.role = data;		  
		 });
   }
 
   $scope.updateRole = function(role) {
		 var data = {code : role.code,descr: role.descr,id:role.id,deleted:role.deleted} ;
		 $http.post('http://localhost:8080/VMS/api/rest/role/save',data).success(function (data,status,headers){
		 $location.path("/admin/roles");
		 });
  };
  $scope.reset = function() {
	  $scope.role.descr = "";
  };
    
}]);


// User Controller 
adminControlModule.controller('UserController',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location){
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

// Company Controller
adminControlModule.controller('CompanyController',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location){
	$http.get('http://localhost:8080/VMS/api/rest/company/').success(function (data){
		$scope.companys = data;
	});	
	// fetch company if param id exists
	if($routeParams.id){
		$http.get('http://localhost:8080/VMS/api/rest/company/'+$routeParams.id).success(function (data){
		$scope.company = data;
	});
	}
	// delete Company
	 $scope.deleteCompany = function(company) {
		  $http.get('http://localhost:8080/VMS/api/rest/company/delete/'+company.id).success(function (data){
		   var index = $scope.companys.indexOf(company);
		   $scope.companys.splice(index, 1);
		 });
 };
  // add Company 
    $scope.addCompany = function(company) {
		 var data = {name : company.name,
		             descr : company.descr} ;
		 $http.post('http://localhost:8080/VMS/api/rest/company/save',data).success(function (data,status,headers){
		    $location.path("/admin/companies");
		 });
  };
   // update Company
   $scope.updateCompany = function(company) {
		var data = { 
		             id: company.id,
		             name : company.name,
		             descr : company.descr,
		             deleted : company.deleted} ;
	     $http.post('http://localhost:8080/VMS/api/rest/company/save',data).success(function (data,status,headers){
		 $location.path("/admin/companies");
		 });
  };
  
  // reset
  $scope.reset = function() {
	  if(!$routeParams.id){
     $scope.company.name = "";
	 $scope.company.descr = "";
	}else{
	  // need to implement update reset 
   }
  };
  
}]);

// Product Controller

adminControlModule.controller('ProductController',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location){
	// fetch Vocher if param id exists
	if($routeParams.id){
		$http.get('http://localhost:8080/VMS/api/rest/vocher/'+$routeParams.id).success(function (data){
		$scope.vocher = data;
	    });
		$http.get('http://localhost:8080/VMS/api/rest/company/').success(function (data){
		$scope.companys = data;
	   });	
	}else{
		var url = $location.url();
		//alert(url);
		if(url == '/admin/products/add'){
			$http.get('http://localhost:8080/VMS/api/rest/company/').success(function (data){
		       $scope.companys = data;
	        });
		}else if( url == '/admin/products'){
		$http.get('http://localhost:8080/VMS/api/rest/vocher/').success(function (data){
			$scope.vochers = data;
	});	
	
		}
	}
	// delete Vocher
	 $scope.deleteVocher = function(vocher) {
		  $http.get('http://localhost:8080/VMS/api/rest/vocher/delete/'+vocher.id).success(function (data){
		   var index = $scope.vochers.indexOf(vocher);
		   $scope.vochers.splice(index, 1);
		 });
 };
  // add Vocher 
    $scope.addVocher = function(vocher) {
		 var data = { 
		              name: vocher.name,
		              descr : vocher.descr,
					  topup : vocher.topup,
					  price : vocher.price,
					  minStock : vocher.minStock,
					  maxStock : vocher.maxStock,
					  instock: 0,
					  topup : vocher.topup,
					  company : vocher.company				 
					 } ;
		     $http.post('http://localhost:8080/VMS/api/rest/vocher/save',data).success(function (data,status,headers){
		    $location.path("/admin/products");
		 });
  };
   // update Vocher
   $scope.updateVocher = function(vocher) {
		var data = { 
		             id : vocher.id,
		             name : vocher.name,
		              descr : vocher.descr,
					  topup : vocher.topup,
					  price : vocher.price,
					  minStock : vocher.minStock,
					  maxStock : vocher.maxStock,
					   instock: vocher.instock,
					  company : vocher.company,
		              deleted : vocher.deleted} ;
	     $http.post('http://localhost:8080/VMS/api/rest/vocher/save',data).success(function (data,status,headers){
		 $location.path("/admin/products");
		 });
  };
  
  // reset
  $scope.reset = function() {
	  if(!$routeParams.id){
      // will do afterwards
	}else{
	  // need to implement update reset 
   }
  };
  
}]);
