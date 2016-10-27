'use strict';

angular.module('AngularBIRT.header', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/header', {
            templateUrl: 'views/header/header.html',
            controller: 'HeaderCtrl'
        });
    }])

    .controller('HeaderCtrl', [function() {

    }]);