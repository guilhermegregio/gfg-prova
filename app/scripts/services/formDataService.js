'use strict';
angular.module('provaClientApp').
factory('dataFormService', function($resource) {
	return $resource('@@host/templates/:templateId/data', {}, {
	});
});