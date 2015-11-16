/**
 * 
 */


var app = angular.module("myApp",['ngRoute','ngResource','AdminController','Services']);
app.config(function($routeProvider){	
	$routeProvider
	.when( '/admin/roles', { controller: 'RoleListCtrl', templateUrl: 'components/roles/allroles.html' } )
	.when('/admin/companies', { controller: 'CompanyCtrl', templateUrl: 'components/company/companies.html' })
	.when('/admin/products', { controller: 'ProductCtrl', templateUrl: 'components/products/products.html' })
	.when('/admin/users', { controller: 'UserCtrl', templateUrl: 'components/users/users.html' })
	.otherwise( { redirectTo: '/index.html' } );
	}
		
);