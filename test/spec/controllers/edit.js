'use strict';

describe('Controller: EditCtrl', function () {

  // load the controller's module
  beforeEach(module('provaClientApp'));

  var EditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditCtrl = $controller('EditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of fieldList to the scope', function () {
    expect(0).toBe(0);
  });
});
