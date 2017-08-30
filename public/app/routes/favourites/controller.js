angular.module('mainApp')

.controller('favoritesController', function ($scope, dataService) {

	dataService.getUserFavouriteProjects()
	.then(data => {
		console.log(data.data.favourites)
		$scope.project = data.data.favourites
	})
	
})
