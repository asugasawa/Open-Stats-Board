'use strict';

/**
 * @ngdoc function
 * @name openStatsBoardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the openStatsBoardApp
 */
angular.module('openStatsBoardApp')
  .controller('AboutCtrl', function ($scope) {
	$scope.options1 = {
                    renderer: 'area'
                };
                $scope.series1 = [{
                        name: 'Series 1',
                        color: 'steelblue',
                        data: [{x: 0, y: 23}, {x: 1, y: 15}, {x: 2, y: 79}, {x: 3, y: 31}, {x: 4, y: 60}]
                    }, {
                        name: 'Series 2',
                        color: 'lightblue',
                        data: [{x: 0, y: 30}, {x: 1, y: 20}, {x: 2, y: 64}, {x: 3, y: 50}, {x: 4, y: 15}]
                    }];
  });
