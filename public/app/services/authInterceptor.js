angular.module('mainApp')

.factory('authInterceptor', authInterceptor)

function authInterceptor (storageService) {
  return {
    request: function (config) {
      const token = storageService.getToken()
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    }
  }
}
