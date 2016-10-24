'use strict';

angular.module('reportFilters.viewSavedReports', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/viewSavedReports', {
            templateUrl: 'viewSavedReports/viewSavedReports.html',
            controller: 'viewSavedReportsCtrl'
        });
    }])

    .controller('viewSavedReportsCtrl', [function() {

    }]);