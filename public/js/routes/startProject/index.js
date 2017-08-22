angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/start-project', {
	  templateUrl: 'js/routes/startProject/template.html',
	  controller: 'homeController'
})
})
