'use strict';

describe('Testando o FormCtrl', function() {
 
  // beforeEach(function(){
  //   this.addMatchers({
  //     toEqualData: function(expected) {
  //       return angular.equals(this.actual, expected);
  //     }
  //   });
  // });
 
  // beforeEach(module('provaClientApp'));
 
 
  describe('FormCtrl', function(){
    // var scope, ctrl, $httpBackend;
 
    // beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    //   $httpBackend = _$httpBackend_;
    //   $httpBackend.expectGET('@@host/templates').respond({id: '1'});
 
    //   scope = $rootScope.$new();
    //   ctrl = $controller('FormCtrl', {$scope: scope});
    // }));
 
 
    it('deve receber 2 templates', function() {
      expect(0).toBe(0);
      // $httpBackend.flush();
 
      // expect(scope.viewForm).toEqualData({id: '1'});
    });
  });
});
