'use strict';

angular.module('AngularBIRT.social', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/social', {
            controller: 'SocialCtrl'
        });
    }])

    .controller('SocialCtrl', [function() {

    }]);