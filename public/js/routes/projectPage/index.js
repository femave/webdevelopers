angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/project-page', {
	  templateUrl: 'js/routes/projectPage/template.html',
	  controller: 'homeController'
})
})
