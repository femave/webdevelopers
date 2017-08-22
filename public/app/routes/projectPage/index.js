angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/project-page', {
	  templateUrl: 'routes/projectPage/template.html',
	  controller: 'homeController'
})
})
