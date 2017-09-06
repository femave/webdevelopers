angular.module('mainApp')

.factory('dataService', function ($http, $rootScope) {

	function getProject(){
		const url = `/projects`
		return $http.get(url)
	}

	function getUserProjects(){
		const id = $rootScope.idLoggedUser //USER ID!!!!!!!!!!!!!!!
		const url = `/projects/${id}`
		return $http.get(url)
	}

	function addFavouritesPage(id){
		const data = {idUser : $rootScope.idLoggedUser} //USER ID!!!!!!!!!!!!!!!
		const url = `/projects-page/${id}`
		return $http.post(url, data)
	}

	function getUserFavouriteProjects(){
		const id = $rootScope.idLoggedUser 
		const url = `/projects-page/favourites/${id}`
		return $http.get(url)
	}

	function projectTags(title, tag, dev, image, shortDesc, longDesc, whyThisProject){
		let data = {title, tag, dev, image, shortDesc, longDesc, whyThisProject, creator: $rootScope.idLoggedUser, creatorName: $rootScope.loggedUser, creatorImg: $rootScope.profileImgLoggedUser}
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
		const url = `/projects-page/favourites`
		return $http.put(url, data)
	}

	function deleteAllProjectPage(id){
		const url = `/projects-page/${id}`
		return $http.delete(url)
	}

	function editProfile(edit, toggle){
		let data = {edit, toggle}
		console.log(data)
		const url = `/users/edit-profile`
		return $http.post(url, data)
	}

	function getProfile(){
		const url = `/users/get-profile`
		return $http.get(url)
	}

	function deleteProfile(edit){
		let data = {edit}
		console.log(data)
		const url = `/users/edit-profile`
		return $http.put(url, data)
	}

	function joinProject(user){
		const data = {user}
		const url = `/sendMail`
		return $http.post(url, data)
	}



	return {
		projectTags,
		getProject,
		getProjectPage,
		editProjectPage,
		deleteProjectPage,
		deleteAllProjectPage,
		getUserProjects,
		addFavouritesPage,
		getUserFavouriteProjects,
		deleteFavouritePage,
		editProfile,
		getProfile,
		deleteProfile,
		joinProject

	}
})