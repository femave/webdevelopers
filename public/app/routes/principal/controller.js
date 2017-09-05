angular.module('mainApp')
.controller('loginController', function (authService, $scope, $rootScope, $location) {
	$rootScope.logged = true

$scope.submitLogin = function (){
	
		authService.login($scope.username, $scope.password)
		.then(success => {
			if (success) {
				// toastr.success('succesfully logged')
				$location.path('/home')
			} else {
				// toastr.error('try again!')
			}
		})
	}
})





