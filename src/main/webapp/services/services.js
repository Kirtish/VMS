/**
 * Service for roles
 */

var services = angular.module('Services', [ 'ngResource' ]);

services.factory('Role', [ '$resource', function($resource) {
	return $resource('./api/rest/role',{
		get : {method : 'GET',isArray:true}
	});
} ]);

