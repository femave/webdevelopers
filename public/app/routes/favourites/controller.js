angular.module('mainApp')

.controller('favoritesController', function ($scope, dataService) {

	dataService.getUserFavouriteProjects()
	.then(data => {
		$scope.project = data.data.favourites
		// console.log($scope.project)
	})

	$scope.noFav = function(id){
		
		dataService.deleteFavouritePage(id)
		.then( console.log)

	}
	
})
