'use strict';

// Declare app level module which depends on views, and components
angular.module('reportFilters', [
  'ngRoute',
  'reportFilters.filterGroup1',
  'reportFilters.filterGroup2',
  'reportFilters.filterGroups',
  'reportFilters.footer',
  'reportFilters.header',
  'reportFilters.main',
  'reportFilters.parameterDivider',
  'reportFilters.parameters',
  'reportFilters.saveDialog',
  'reportFilters.social',
  'reportFilters.viewReport',
  'reportFilters.project',
  'reportFilters.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/main'});
}]);
