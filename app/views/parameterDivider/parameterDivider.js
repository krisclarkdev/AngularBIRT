'use strict';

angular.module('AngularBIRT.parameterDivider', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/parameterDivider', {
            controller: 'ParameterDividerCtrl'
        });
    }])

    .controller('ParameterDividerCtrl', [function() {

    }]);