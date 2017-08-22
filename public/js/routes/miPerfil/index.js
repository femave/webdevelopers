angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/mi-perfil', {
	  templateUrl: 'js/routes/miPerfil/template.html',
	  controller: 'homeController'
})
})
