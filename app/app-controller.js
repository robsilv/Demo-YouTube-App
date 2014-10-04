angular.module('app')

.controller('AppController', function AppController ($scope, $location, MessageService) {
	
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		if (angular.isDefined(toState.data.pageTitle)) {
			$scope.pageTitle = toState.data.pageTitle;
		}
	});

	$scope.messages = MessageService.messages;
});