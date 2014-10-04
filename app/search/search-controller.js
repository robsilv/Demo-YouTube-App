angular.module('app.search')

.controller('SearchController', function Feature1Controller ($scope, $location, $stateParams, $log, config, YouTubeService) {

	$scope.searchQuery = "hello";

	if ( $stateParams.apiKey !== undefined ) {
		config.api.key = $stateParams.apiKey;
		$log.log("SET API KEY "+config.api.key);
	}

	$scope.search = function( query ) {
		$log.log("Search "+query);

		YouTubeService.search( query ).then( function onSuccess(result) {
			$log.log("Search success", result);

			$scope.items = result.items;
		});
	};

});
