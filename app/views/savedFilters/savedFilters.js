'use strict';

angular.module('AngularBIRT.savedFilters', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/savedFilters', {
            controller: 'SavedFiltersCtrl'
        });
    }])

    .controller('SavedFiltersCtrl', function($scope) {
    });