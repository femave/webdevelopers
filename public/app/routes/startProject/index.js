angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/start-project', {
	  templateUrl: 'routes/startProject/template.html',
	  controller: 'homeController'
})
})
