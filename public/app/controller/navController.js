angular.module('mainApp')

.controller('navController', navController)

function navController (authService, $location, $scope) {
	$scope.logout = function () {
		authService.logout()
		$location.path('/')
	}
}
