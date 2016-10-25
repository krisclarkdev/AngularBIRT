'use strict';

angular.module('reportFilters.viewReport', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/viewReport', {
            templateUrl: 'views/viewReport/viewReport.html',
            controller: 'ViewReportCtrl'
        });
    }])

    .controller('ViewReportCtrl', [function() {

    }]);