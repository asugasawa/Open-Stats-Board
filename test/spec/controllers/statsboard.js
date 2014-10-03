'use strict';

describe('Controller: StatsboardCtrl', function () {

  // load the controller's module
  beforeEach(module('openStatsBoardApp'));

  var StatsboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatsboardCtrl = $controller('StatsboardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
