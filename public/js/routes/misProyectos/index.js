angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/mis-proyectos', {
	  templateUrl: 'js/routes/misProyectos/template.html',
	  controller: 'myProjectsController'
})
})
