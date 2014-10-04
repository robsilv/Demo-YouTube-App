angular.module('app.feature1')

.controller('Feature1Controller', function Feature1Controller ($scope, $location, $log, YouTubeService) {

	$scope.search = function( query ) {
		$log.log("Search "+query);

		YouTubeService.search( query ).then( function onSuccess(result) {
			$log.log("SUCCESS!", result);
		});
	};

});
