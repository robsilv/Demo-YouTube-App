angular.module( 'app', [
	'templates',
	'app.search',
	'app.common',
	'app.components',
	'ui.router',
	'angular-loading-bar'
])

.constant('config', {
	site: {

	},
	api: {
		root: 'https://www.googleapis.com/youtube/v3',
		search: '/search',
		key: 'API_KEY',
		config: {}
	}
})

.config( function appConfig ( $stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider ) {

	cfpLoadingBarProvider.includeSpinner = false;

	$stateProvider
		.state('search', {
			url: '/search/{apiKey}/{query}',
			controller: 'SearchController',
			templateUrl: 'search/search-template.html',
			data: {
				pageTitle: 'YouTube Search'
			}
		});

	$urlRouterProvider.otherwise('/search/put_api_key_here/hello');


	$locationProvider.hashPrefix('!');
})

.run( function run ($rootScope) {

});

angular.module('app.search', []);
angular.module('app.common', []);
angular.module('app.components', []);