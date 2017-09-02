angular.module('mainApp', ['ngRoute', 'oitozero.ngSweetAlert', 'ngTagsInput', 'angular-jwt'])

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
		console.log('route has changed')
		if (next && next.secure) {
			console.log('this route is secured!!')
			if (!authService.isLoggedIn()) {
				$location.path('/')
			}
		}
	})
})
