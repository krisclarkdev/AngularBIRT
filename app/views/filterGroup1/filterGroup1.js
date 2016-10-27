'use strict';

angular.module('AngularBIRT.filterGroup1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/filtergroup1', {
            templateUrl: 'views/filterGroup1/filterGroup1.html',
            controller: 'FilterGroup1Ctl'
        });
    }])

    .controller('FilterGroup1Ctl', [function() {

    }]);