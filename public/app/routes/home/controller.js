angular.module('mainApp')

.controller('homeController', function ($scope, $rootScope, dataService) {
	$rootScope.logged = false
	

	dataService.getProject()
	.then(data => {
		$scope.project = data.data
		console.log(data.data)
	})

	dataService.getUserProjects()
	.then(data => {
		$rootScope.badge = data.data.projects === undefined ? 0 : data.data.projects.length
	})

	$scope.getTagFilter = function(tag){
		$scope.lenguage = tag
	}


})

