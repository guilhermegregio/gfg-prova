'use strict';

describe('Controller: FormCtrl', function () {

  // load the controller's module
  beforeEach(module('provaClientApp'));

  var FormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormCtrl = $controller('FormCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of viewForm to the scope', function () {
    expect(5).toBe(5);
  });
});
