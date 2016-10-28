'use strict';

angular.module('AngularBIRT.footer', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/footer', {
            controller: 'FooterCtl'
        });
    }])

    .controller('FooterCtl', [function() {

    }]);