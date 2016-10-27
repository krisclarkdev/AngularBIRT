'use strict';

angular.module('AngularBIRT.filterGroup2', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/filtergroup2', {
            templateUrl: 'views/filterGroup2/filterGroup2.html',
            controller: 'FilterGroup2Ctl'
        });
    }])

    .controller('FilterGroup2Ctl', [function() {

    }]);