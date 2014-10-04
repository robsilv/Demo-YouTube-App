angular.module('app.common')

.factory('YouTubeService', function($q, $http, $log, config, Utils) {

	var urlBase = config.api.root;
	var apiConfig =  config.api.config;


	function YouTubeService() { }
	var instance = new YouTubeService();

	instance.search = function search(query) {
		config.funcName = Utils.getFunctionName(this, arguments);

		$log.log('YouTubeService - search...');
		var url = urlBase + config.api.search;
		url += '?part=snippet&q=' + query + 'key=' + config.api.key;
		var promise = $http.get(url, apiConfig).then( function onSuccess(result) {
			$log.log(' YouTubeService - Search results:', result);
			return result.data;	
		});

		return promise;
	};

	return instance;
});
