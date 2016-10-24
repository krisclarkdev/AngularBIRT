'use strict';

// Declare app level module which depends on views, and components
angular.module('reportFilters', [
  'ngRoute',
  'reportFilters.view1',
  'reportFilters.view2',
  'reportFilters.viewParameters',
  'reportFilters.viewSaveDialog',
  'reportFilters.viewSavedReports',
  'reportFilters.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
