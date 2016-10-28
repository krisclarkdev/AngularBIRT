'use strict';

angular.module('AngularBIRT.parameters', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/parameters', {
            templateUrl: 'views/parameters/parameters.html',
            controller: 'ParametersCtrl'
        });
    }])

    .controller('ParametersCtrl', function($scope) {
    });