angular.module('mainApp')

.factory('dataService', function ($http) {

	function getProject(){
		const url = `/projects`
		return $http.get(url)
	}

	function getUserProjects(){
		const id = "59a6b502c4f25d13a0a64d33" //USER ID!!!!!!!!!!!!!!!
		const url = `/projects/${id}`
		return $http.get(url)
	}

	function addFavouritesPage(id){
		const data = {idUser : "59a6b502c4f25d13a0a64d33"} //USER ID!!!!!!!!!!!!!!!
		const url = `/projects-page/${id}`
		return $http.post(url, data)
	}

	function getUserFavouriteProjects(){
		const id = "59a6b502c4f25d13a0a64d33" //USER ID!!!!!!!!!!!!!!!
		const url = `/projects-page/favourites/${id}`
		return $http.get(url)
	}

	function projectTags(title, tag, dev, image, shortDesc, longDesc, whyThisProject){
		let data = {title, tag, dev, image, shortDesc, longDesc, whyThisProject}
		const url = `/projects`
		return $http.post(url, data)
	}

	function getProjectPage(id){
		const url = `/projects-page/${id}`
		return $http.get(url)
	}

	function editProjectPage(id, edit, toggle){
		let data = { id, edit, toggle }
		const url = `/projects-page`
		return $http.post(url, data)
	}

	function deleteProjectPage(id, edit, toggle){
		let data = { id, edit, toggle }
		const url = `/projects-page`
		return $http.put(url, data)
	}

	function deleteFavouritePage(id){
		let data = {id}
		console.log(data)
		const url = `/projects-page/favourites`
		return $http.post(url, data)
	}

	function deleteAllProjectPage(id){
		const url = `/projects-page/${id}`
		return $http.delete(url)
	}



	return {
		projectTags:projectTags,
		getProject:getProject,
		getProjectPage:getProjectPage,
		editProjectPage:editProjectPage,
		deleteProjectPage:deleteProjectPage,
		deleteAllProjectPage:deleteAllProjectPage,
		getUserProjects:getUserProjects,
		addFavouritesPage:addFavouritesPage,
		getUserFavouriteProjects:getUserFavouriteProjects,
		deleteFavouritePage:deleteFavouritePage
	}
})