'use strict';

/**
 * @ngdoc function
 * @name openStatsBoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the openStatsBoardApp
*/
angular.module('openStatsBoardApp')
  .controller('MainCtrl', function ($scope) {

    
   /* var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore && todosInStore.split('\n') || [];

    $scope.$watch('todos', function () {
      localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);*/
    

    $scope.todos = [];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
    
  });