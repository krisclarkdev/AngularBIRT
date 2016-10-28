'use strict';

angular.module('AngularBIRT.parameters', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/parameters', {
            controller: 'ParametersCtrl'
        });
    }])

    .controller('ParametersCtrl', function($scope) {
    });