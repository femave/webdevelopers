angular.module('mainApp')
.controller('loginController', function (authService, $scope, $rootScope, $location, toaster) {
	$rootScope.logged = true

$scope.submitLogin = function (){
	
		authService.login($scope.username, $scope.password)
		.then(success => {
			console.log(success)
			if (success) {
				toaster.success(`You're logged in!`)
				$location.path('/home')
			} else {
				toaster.error('Username or password wrong try again!')
			}
		})
		.catch(()=>{
			toaster.error('Username or password wrong try again!')
		})
	}
})





