'use strict';

describe('Testando o EditCtrl', function() {
 
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });
 
  beforeEach(module('provaClientApp'));
 
 
  describe('EditCtrl', function(){
    var scope, ctrl, $httpBackend;
 
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('@@host/templates').respond({id: '1'});
 
      scope = $rootScope.$new();
      ctrl = $controller('EditCtrl', {$scope: scope});
    }));
 
 
    it('deve receber 2 templates', function() {
      expect(scope.form).toEqual({});
      $httpBackend.flush();
 
      expect(scope.form).toEqualData({id: '1'});
    });
  });
});