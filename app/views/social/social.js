'use strict';

angular.module('reportFilters.social', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/social', {
            templateUrl: 'views/social/social.html',
            controller: 'SocialCtrl'
        });
    }])

    .controller('SocialCtrl', [function() {

    }]);