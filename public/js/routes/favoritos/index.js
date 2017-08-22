angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/favoritos', {
	  templateUrl: 'js/routes/favoritos/template.html',
	  controller: 'favouritesController'
})
})
