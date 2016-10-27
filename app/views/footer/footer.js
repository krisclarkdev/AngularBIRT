'use strict';

angular.module('AngularBIRT.footer', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/footer', {
            templateUrl: 'views/footer/footer.html',
            controller: 'FooterCtl'
        });
    }])

    .controller('FooterCtl', [function() {

    }]);