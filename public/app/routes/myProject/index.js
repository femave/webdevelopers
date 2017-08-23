angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/myProject', {
	  templateUrl: 'routes/myProject/template.html',
	  controller: 'myProjectController'
})
})
