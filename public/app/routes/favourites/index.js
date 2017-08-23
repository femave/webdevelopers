angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/favourites', {
	  templateUrl: 'routes/favourites/template.html',
	  controller: 'favoritesController'
})
})
