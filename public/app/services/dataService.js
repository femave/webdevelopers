angular.module('mainApp')

.factory('dataService', function ($http) {

	function projectTags(title, tags, dev, image, shortDesc, longDesc, whyThisProject){
		let data = {title, tags, dev, image, shortDesc, longDesc, whyThisProject}
		const url = `/projects`
		return $http.post(url, data)
	}

	return {
		projectTags:projectTags
	}
})