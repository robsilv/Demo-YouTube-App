angular.module('app.search')

.controller('SearchController', function Feature1Controller ($scope, $location, $state, $stateParams, $log, config, YouTubeService) {

	$scope.search = function( query ) {
		$log.log("Search \""+query+"\"");

		YouTubeService.search( query ).then( function onSuccess(result) {
			$log.log("Search success", result);

			$scope.items = result.items;
		});
	};

	$scope.setState = function() {
		$stateParams.query = $scope.searchQuery;
		$log.log("SET STATE ",$stateParams);
		$state.transitionTo($state.current, $stateParams, { 
			reload: true//, inherit: false, notify: false 
		});
	};

	if ( $stateParams.apiKey !== undefined ) {
		config.api.key = $stateParams.apiKey;
		$log.log("SET API KEY "+config.api.key);
	}

	if ( $stateParams.query !== undefined && $stateParams.query !== "" ) {
		$log.log("SET QUERY "+$stateParams.query);
		$scope.searchQuery = $stateParams.query;
		$scope.search($scope.searchQuery);
	}

});
