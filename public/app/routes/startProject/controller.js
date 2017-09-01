angular.module('mainApp')

.controller('startProjectController', function ($scope, $rootScope, $window, dataService) {

	$scope.submit = function(){
		let {title, tags, developer, image, shortDesc, longDesc, whyThisProject} = $scope
		
		let tag = tags.map(function(tag){ return tag.text})
		let dev = developer.map(function(dev){ return dev.text})

		dataService.projectTags(title, tag, dev, image, shortDesc, longDesc, whyThisProject)
		.then((url) => $window.location.href = url.data);

		dataService.getUserProjects()
		.then(data => {
			$rootScope.badge = data.data.projects === undefined ? 0 : data.data.projects.length
		})
		
	}

})