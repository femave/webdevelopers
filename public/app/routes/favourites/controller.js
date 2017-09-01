angular.module('mainApp')

.controller('favoritesController', function ($scope, $rootScope, dataService, $window) {

	dataService.getUserFavouriteProjects()
	.then(data => {
		$scope.project = data.data.favourites
		// console.log($scope.project)
	})

	dataService.getUserProjects()
	.then(data => {
		$rootScope.badge = data.data.projects.length
	})

	$scope.noFav = function(id){
		
		dataService.deleteFavouritePage(id)
		.then(()=>$window.location.reload())

	}
	
})
