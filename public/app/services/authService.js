(function () {
  angular.module('mainApp')
    .factory('authService', authService)

  function authService ($rootScope, $http, storageService, jwtHelper) {

    function isLoggedIn () {
      const token = storageService.getToken()
      if (!token) return false
     	return true
    }

    function setCredentials (token) {
      const tokenPayload = jwtHelper.decodeToken(token)
      $rootScope.loggedUser = tokenPayload.username
      $rootScope.idLoggedUser = tokenPayload.id
    }

    function register (username, password) {
      return $http.post('/user/register', {username, password})
                .then(res => res.data)
    }

    function login (username, password) {
      return $http.post('/user/login', {username, password})
                .then(res => res.data)
                .then(data => {
                  storageService.saveToken(data.token)
                  setCredentials(data.token)
                  return data.success
                })
    }

    function logout (username, password) {
      console.log('login out')
      storageService.removeToken()
      delete $rootScope.loggedUser
    }

    return { register, login, isLoggedIn, setCredentials, logout }
  }
})()