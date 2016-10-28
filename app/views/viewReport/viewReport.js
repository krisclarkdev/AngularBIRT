'use strict';

angular.module('AngularBIRT.viewReport', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/viewReport', {
            templateUrl: 'views/viewReport/viewReport.html',
            controller: 'ViewReportCtrl'
        });
    }])

    .controller('ViewReportCtrl', function($scope) {
        var main = this;
        main.links = [
            "<li><a href='http://google.com'>Google</a></li>",
            "<a href='http://odetocode.com'>OdeToCode</a>",
            "<a href='http://twitter.com'>Twitter</a>",
        ];

        main.Xls = 'test';
    });