'use strict';

/**
 * @ngdoc function
 * @name openStatsBoardApp.controller:StatsboardCtrl
 * @description
 * # StatsboardCtrl
 * Controller of the openStatsBoardApp
 */
angular.module('openStatsBoardApp')
  .controller('StatsboardCtrl', function ($scope) {
	    $scope.todos = [];

	    $scope.addTodo = function () {
	      $scope.todos.push($scope.todo);
	      $scope.todo = '';
	    };

	    $scope.removeTodo = function (index) {
	      $scope.todos.splice(index, 1);
	    };
	    
	  });