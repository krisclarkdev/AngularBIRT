'use strict';

angular.module('AngularBIRT.parameterDivider', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/parameterDivider', {
            templateUrl: 'views/parameterDivider/parameterDivider.html',
            controller: 'ParameterDividerCtrl'
        });
    }])

    .controller('ParameterDividerCtrl', [function() {

    }]);