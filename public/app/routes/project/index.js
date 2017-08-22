angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/project', {
	  templateUrl: 'routes/project/template.html',
	  controller: 'homeController'
})
})
