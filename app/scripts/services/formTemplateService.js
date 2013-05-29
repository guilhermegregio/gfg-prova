'use strict';
angular.module('provaClientApp').
factory('templateService', function($resource) {
	return $resource('@@host/templates/:templateId/data', {}, {
		update: {
			method: 'PUT'
		}
	});
});
