'use strict';

angular.module('reportFilters.viewParameters', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/viewParameters', {
            templateUrl: 'viewParameters/viewParameters.html',
            controller: 'ViewParametersCtrl'
        });
    }])

    .controller('ViewParametersCtrl', [function() {

    }]);