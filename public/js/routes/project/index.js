angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/project', {
	  templateUrl: 'js/routes/project/template.html',
	  controller: 'homeController'
})
})
