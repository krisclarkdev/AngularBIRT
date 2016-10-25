'use strict';

angular.module('reportFilters.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'views/main/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', [function() {

}]);