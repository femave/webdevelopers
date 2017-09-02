angular.module('mainApp')

.factory('storageService', storageService)

function storageService ($window) {
  function saveToken (token) {
    $window.localStorage.setItem('authToken', token)
  }

  function getToken () {
    return $window.localStorage.getItem('authToken')
  }

  function removeToken () {
    console.log('removing token?')
    $window.localStorage.removeItem('authToken')
  }

  return { saveToken, getToken, removeToken }
}
