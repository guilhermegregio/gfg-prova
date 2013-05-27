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
<<<<<<< HEAD
  }));

  it('should attach a list of fieldList to the scope', function () {
    expect(0).toBe(0);
=======
>>>>>>> 4550e8152c7cb4c04a929ef5a1dc7e4c8efa8036
  });
});
