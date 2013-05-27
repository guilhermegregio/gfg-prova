'use strict';

describe('Testando o FormCtrl', function() {
 
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });
 
  beforeEach(module('provaClientApp'));
 
 
  describe('FormCtrl', function(){
    var scope, ctrl, $httpBackend;
 
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('@@host/templates').respond({id: '1'});
 
      scope = $rootScope.$new();
      ctrl = $controller('FormCtrl', {$scope: scope});
    }));
 
 
    it('deve receber 2 templates', function() {
      expect(scope.viewForm).toEqual({});
      $httpBackend.flush();
 
      expect(scope.viewForm).toEqualData({id: '1'});
    });
<<<<<<< HEAD
  }));

  it('should attach a list of viewForm to the scope', function () {
    expect(5).toBe(5);
=======
>>>>>>> 4550e8152c7cb4c04a929ef5a1dc7e4c8efa8036
  });
});
