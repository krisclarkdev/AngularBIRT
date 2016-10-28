'use strict';

angular.module('AngularBIRT.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', [function() {

}]);