'use strict';

angular.module('reportFilters.filterGroups', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/filtergroup2', {
            templateUrl: 'views/filterGroups/filterGroups.html',
            controller: 'FilterGroupsCtl'
        });
    }])

    .controller('FilterGroupsCtl', [function() {

    }]);