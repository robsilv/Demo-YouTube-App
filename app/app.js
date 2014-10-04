angular.module( 'app', [
	'templates',
	'app.feature1',
	'app.feature2',
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
		key: '{API_KEY}',
		config: {}
	}
})

.config( function appConfig ( $stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider ) {

	cfpLoadingBarProvider.includeSpinner = false;

	$stateProvider
		.state('feature1', {
			url: '/feature1',
			controller: 'Feature1Controller',
			templateUrl: 'feature1/feature1-template.html',
			data: {
				pageTitle: 'feature 1'
			}
		})
		.state('feature2', {
			url: '/feature2',
			controller: 'Feature2Controller',
			templateUrl: 'feature2/feature2-template.html',
			data: {
				pageTitle: 'feature 2'
			}
		});

	$urlRouterProvider.otherwise('/feature1');


	$locationProvider.hashPrefix('!');
})

.run( function run ($rootScope) {

});

angular.module('app.feature1', []);
angular.module('app.feature2', []);
angular.module('app.common', []);
angular.module('app.components', []);