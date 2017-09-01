angular.module('mainApp')

.controller('myProjectController', function ($scope, $rootScope, dataService) {
	
	dataService.getUserProjects()
	.then(data => {
		$rootScope.badge = data.data.projects === undefined ? 0 : data.data.projects.length
		$scope.project = data.data.projects
	})
	

})
