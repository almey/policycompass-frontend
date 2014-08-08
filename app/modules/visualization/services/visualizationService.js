angular.module('pcApp.visualization.services.visualization',[
    'ngResource',
    'pcApp.config'
])

.factory('Visualization',  ['$resource', 'API_CONF', function($resource, API_CONF) {
	var url = API_CONF.VISUALIZATIONS_MANAGER_URL + "/visualizations/:id";
	var Visualization = $resource(url,
		{
			id: "@id"
		},
        {
            'update': { method:'PUT' }
        }
	);
	return Visualization;
}]);