'use strict';

describe('Directive: angularNvd3', function () {

  // load the directive's module
  beforeEach(module('openStatsBoardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<angular-nvd3></angular-nvd3>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the angularNvd3 directive');
  }));
});
