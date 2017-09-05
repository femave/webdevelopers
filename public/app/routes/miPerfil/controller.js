angular.module('mainApp')

.controller('miPerfilController', function ($scope, SweetAlert, dataService, authService, $rootScope, $location, $window, Upload) {

	$scope.username = $rootScope.loggedUser
	$scope.mail = $rootScope.mailLoggedUser

	$scope.editorEnabled = false;

	dataService.getProfile()
	.then(user => {
		$scope.data = user.data.data
		console.log(user.data.data)
	})

	$scope.enableEditor = function(toggle) {
		if($scope.options === true){
			if (toggle === 'username') {
				$scope.editorEnabled = true;
			} else if (toggle === 'mail') {
				$scope.editorEnabledMail = true;
			} else if (toggle === 'lenguages') {
				$scope.editorEnabledLeng = true;
			}
		}
	};

	$scope.disableEditor = function(toggle) {
		if($scope.options === true){
			if (toggle === 'username') {
				$scope.editorEnabled = false;
			} else if (toggle === 'mail') {
				$scope.editorEnabledMail = false;
			} else if (toggle === 'lenguages') {
				$scope.editorEnabledLeng = false;
			}
		}
	};

	$scope.save = function(toggle) {
		let {username, mail, leng, profileImg} = $scope
		if (toggle === 'username') {
			dataService.editProfile(username, toggle)
			.then(() => {
				authService.logout()	
				$location.path('/')			
			})
		} else if (toggle === 'mail') {
			dataService.editProfile(mail, toggle)
			.then(() => {
				authService.logout()	
				$location.path('/')			
			})
		} else {
			dataService.editProfile(leng, toggle)
			.then(() => {
				$window.location.reload()		
			})
		}

	};

	$scope.deleteDev = function(leng) {
		dataService.deleteProfile(leng)
		.then(() => {
			$window.location.reload()	
		})
	}

	$scope.clickMeToShowMessage = function() {
		if($scope.options === true){
			SweetAlert.swal({
				title: 'Edit mode ON',
				text: "You can edit profile!",
				type: 'info',
			})
		}else{
			SweetAlert.swal({
				title: 'Edit mode OFF',
				text: "You can't edit profile!",
				type: 'info',
			})
		}
	}

	$scope.fileSelected = (files) => {
		if (files && files.length) {
			$scope.file = files[0];
		}
	}

	$scope.uploadFile = function() {
		const url = '/users/edit-profile'
		const file = $scope.file

      // show spinning when uploading
      // $scope.uploading = true;
      // document.querySelector('.preview').onload = () => {
      //   $scope.$apply( () => $scope.uploading = false )
      // }

      Upload.upload({ url, file })
      .success( ({imageLink}) => {
      	authService.logout()	
      	$location.path('/')	
      } )
        //.progress( console.log )
    }




})
