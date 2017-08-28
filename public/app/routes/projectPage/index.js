angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/project-page/:id', {
	  templateUrl: 'routes/projectPage/template.html',
	  controller: 'projectPageController'
})
})
