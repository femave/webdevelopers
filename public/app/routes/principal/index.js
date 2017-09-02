angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/', {
	  templateUrl: 'routes/principal/template.html',
	  controller: 'loginController'
})
})
