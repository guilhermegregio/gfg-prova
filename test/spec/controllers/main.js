'use strict';

describe('Testando o MainCtrl', function() {
 
	beforeEach(function(){
		this.addMatchers({
			toEqualData: function(expected) {
				return angular.equals(this.actual, expected);
			}
		});
	});
 
	beforeEach(module('provaClientApp'));
 
 
	describe('MainCtrl', function(){
		var scope, ctrl, $httpBackend;
 
		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('@@host/templates').respond([{id: '1'}, {id: '2'}]);
 
			scope = $rootScope.$new();
			ctrl = $controller('MainCtrl', {$scope: scope});
		}));
 
 
		it('deve receber 2 templates', function() {
			expect(scope.formList).toEqual([]);
			$httpBackend.flush();
 
			expect(scope.formList).toEqualData([{id: '1'}, {id: '2'}]);
		});
	});
});