var registryApp = angular.module('registryApp', ['ngRoute']);

// templates and controllers
registryApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/registry', {
			templateUrl: './views/templates/registry.html',
			controller: 'RegistryController',
			controllerAs: 'registry'
		})
		.when('/identities', {
			templateUrl: './views/templates/identities.html',
			controller: 'IdentitiesController',
			controllerAs: 'identities'
		})
		.otherwise({
			redirectTo: 'registry'
		});
}]);
