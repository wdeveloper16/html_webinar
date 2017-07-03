'use strict';

/**
 * @ngdoc overview
 * @name utahHomeApp
 * @description
 * # utahHomeApp
 *
 * Main module of the application.
 */
angular
  .module('utahHomeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'google.places'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
