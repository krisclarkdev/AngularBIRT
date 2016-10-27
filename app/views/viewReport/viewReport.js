'use strict';

angular.module('AngularBIRT.viewReport', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/viewReport', {
            templateUrl: 'views/viewReport/viewReport.html',
            controller: 'ViewReportCtrl'
        });
    }])

    .controller('ViewReportCtrl', [function() {

    }]);