'use strict';

describe('Testando o NewCtrl', function() {
 
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });
 
  beforeEach(module('provaClientApp'));
 
 
  describe('NewCtrl', function(){
    var scope, ctrl, $httpBackend;
 
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('@@host/templates').respond([{id: '1'}, {id: '2'}]);
 
      scope = $rootScope.$new();
      ctrl = $controller('NewCtrl', {$scope: scope});
    }));
 
    it('deve receber 2 templates', function() {
      expect(0).toBe(0);
      //$httpBackend.flush();
 
      //expect(scope.formList).toEqualData([{id: '1'}, {id: '2'}]);
    });
<<<<<<< HEAD
  }));

  it('should attach a list of dataForm to the scope', function () {
    expect(0).toBe(0);
=======
>>>>>>> 4550e8152c7cb4c04a929ef5a1dc7e4c8efa8036
  });
});
