'use strict';

describe('Controller: NewCtrl', function () {

  // load the controller's module
  beforeEach(module('provaClientApp'));

  var NewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewCtrl = $controller('NewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of dataForm to the scope', function () {
    expect(scope.dataForm.fields.length).toBe(0);
  });
});
