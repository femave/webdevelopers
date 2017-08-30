angular.module('mainApp')

.controller('homeController', function ($scope, dataService) {

	dataService.getProject()
	.then(data => {
		$scope.project = data.data
	})

	$scope.getTagFilter = function(tag){
		$scope.lenguage = tag
	}

})

