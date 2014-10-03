'use strict';

/**
 * @ngdoc overview
 * @name openStatsBoardApp
 * @description
 * # openStatsBoardApp
 *
 * Main module of the application.
 */
angular
  .module('openStatsBoardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  	.config(['localStorageServiceProvider', '$routeProvider', function(localStorageServiceProvider, $routeProvider){
  		localStorageServiceProvider.setPrefix('ls');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/statsboard', {
        templateUrl: 'views/statsboard.html',
        controller: 'StatsboardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
