angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/mi-perfil', {
	  templateUrl: 'routes/miPerfil/template.html',
	  controller: 'miPerfilController'
})
})
