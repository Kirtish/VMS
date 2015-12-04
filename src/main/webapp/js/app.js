/**
 * 
 */


var app = angular.module("myApp",['ngRoute','ngResource','AdminController','Services']);
app.config(function($routeProvider){	
	$routeProvider
	.when( '/admin/roles', { controller: 'RoleListCtrl', templateUrl: 'components/roles/allroles.html' } )
	.when( '/admin/roles/add', { controller: 'RoleController', templateUrl: 'components/roles/role.html' } )
	.when( '/admin/roles/:id', { controller: 'RoleController', templateUrl: 'components/roles/editrole.html' } )
	.when( '/admin/roles/delete/:id', { controller: 'RoleController', templateUrl: 'components/roles/role.html' } )
	.when('/admin/companies', { controller: 'CompanyController', templateUrl: 'components/company/allcompanies.html' })
	.when('/admin/companies/add', { controller: 'CompanyController', templateUrl: 'components/company/addCompany.html' })
	.when('/admin/companies/:id', { controller: 'CompanyController', templateUrl: 'components/company/editCompany.html' })
	.when('/admin/products', { controller: 'ProductController', templateUrl: 'components/products/products.html' })
	.when('/admin/products/add', { controller: 'ProductController', templateUrl: 'components/products/addProduct.html' })
	.when('/admin/products/:id', { controller: 'ProductController', templateUrl: 'components/products/editProduct.html' })
	.when('/admin/users', { controller: 'UserController', templateUrl: 'components/users/users.html' })
	.when('/admin/users/add', { controller: 'UserController', templateUrl: 'components/users/addUser.html' })
	.when('/admin/users/:id', { controller: 'UserController', templateUrl: 'components/users/editUser.html' })	
	.otherwise( { redirectTo: '/index.html' } );
	}
		
);