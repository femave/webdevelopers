angular.module('mainApp')

.config(function ($routeProvider) {
  $routeProvider
	.when('/home', {
	  templateUrl: 'routes/home/template.html',
	  controller: 'homeController',
	  secure: true
})
})
