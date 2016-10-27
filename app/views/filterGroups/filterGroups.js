'use strict';

angular.module('AngularBIRT.filterGroups', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/filtergroup2', {
            templateUrl: 'views/filterGroups/filterGroups.html',
            controller: 'FilterGroupsCtl'
        });
    }])

    .controller('FilterGroupsCtl', [function() {

    }]);