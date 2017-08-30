angular.module('mainApp')

.controller('myProjectController', function ($scope, dataService) {
	
	dataService.getUserProjects()
	.then(data => {
		console.log(data.data.projects)
		$scope.project = data.data.projects
	})
	
})
