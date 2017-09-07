angular.module('mainApp')

.controller('startProjectController', function ($scope, $rootScope, $window, dataService, Upload, toaster) {

	$scope.submit = function(){
		let {title, tags, developer, image, shortDesc, longDesc, whyThisProject} = $scope
		
		let tag = tags.map(function(tag){ return tag.text})
		let dev = developer.map(function(dev){ return dev.text})

		dataService.projectTags(title, tag, dev, image, shortDesc, longDesc, whyThisProject)
		.then((urlLink) =>{
			const idProject = urlLink.data.split('/')[4]
			const url = `/projects/${idProject}`
			const file = $scope.file
			Upload.upload({ url, file })
			.success( (imageLink) => {
				toaster.success('Project created!')
				$window.location.href = urlLink.data
			})			
		});

		dataService.getUserProjects()
		.then(data => {
			$rootScope.badge = data.data.projects === undefined ? 0 : data.data.projects.length
		})
		
	}

	$scope.fileSelected = (files) => {
		if (files && files.length) {
			$scope.file = files[0];
		}
	}

	

})