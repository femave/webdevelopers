angular.module('mainApp', ['ngRoute', 'oitozero.ngSweetAlert', 'ngTagsInput', 'angular-jwt', 'ngFileUpload', 'toaster', 'ngAnimate'])

.config(function ($httpProvider) {
	$httpProvider.interceptors.push('authInterceptor')
})

.config(function ($routeProvider) {
	$routeProvider
	.otherwise('/')
})

.run(function ($rootScope, $location, storageService, authService) {
	if (authService.isLoggedIn()) {
		const token = storageService.getToken()
		authService.setCredentials(token)
	}

	$rootScope.$on('$routeChangeStart', function (event, next, current) {
		if (next && next.secure) {
			if (!authService.isLoggedIn()) {
				$location.path('/')
			}
		}
	})
})
