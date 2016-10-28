'use strict';

angular.module('AngularBIRT.savedFilters', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/savedFilters', {
            templateUrl: 'views/savedFilters/savedFilters.html',
            controller: 'SavedFiltersCtrl'
        });
    }])

    .controller('SavedFiltersCtrl', function($scope) {
        $scope.reportExecutor = {};

        $scope.reportExecutor.doExecute = function() {window.runReport();}
    });