'use strict';

/**
 * @ngdoc function
 * @name openStatsBoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the openStatsBoardApp
 */

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
      $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
  });
