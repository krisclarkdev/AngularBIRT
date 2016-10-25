'use strict';

angular.module('reportFilters.parameters', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/parameters', {
            templateUrl: 'views/parameters/parameters.html',
            controller: 'ParametersCtrl'
        });
    }])

    .controller('ParametersCtrl', [function() {

    }]);