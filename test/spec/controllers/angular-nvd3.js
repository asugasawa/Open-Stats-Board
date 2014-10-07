'use strict';

describe('Controller: AngularNvd3Ctrl', function () {

  // load the controller's module
  beforeEach(module('openStatsBoardApp'));

  var AngularNvd3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngularNvd3Ctrl = $controller('AngularNvd3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
