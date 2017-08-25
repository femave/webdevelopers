angular.module('mainApp')

.controller('miPerfilController', function ($scope) {
	$scope.username = 'Marc Vergara'
	$scope.mail = 'marc@marc.com'
	$scope.lenguages = {'len' : ['Java', 'Html', 'Javascript']}

	$scope.editorEnabled = false;

	$scope.enableEditor = function(toggle) {
		console.log(toggle)
		if (toggle === 'username') {
			$scope.editorEnabled = true;
		} else if (toggle === 'mail') {
			$scope.editorEnabledMail = true;
		} else if (toggle === 'lenguages') {
			$scope.editorEnabledLeng = true;
		}
	};

	$scope.disableEditor = function(toggle) {
		if (toggle === 'username') {
			$scope.editorEnabled = false;
		} else if (toggle === 'mail') {
			$scope.editorEnabledMail = false;
		} else if (toggle === 'lenguages') {
			$scope.editorEnabledLeng = false;
		}
	};

	$scope.save = function(toggle) {
		console.log(toggle)
		console.log($scope.leng)
		if (toggle === 'lenguages') {
			$scope.lenguages.len.push($scope.leng)
			console.log($scope.lenguages.len)
		}
		$scope.disableEditor(toggle);
	};

	$scope.deleteDev = function(index) {
		$scope.lenguages.len.splice(index, 1)
	}
})
