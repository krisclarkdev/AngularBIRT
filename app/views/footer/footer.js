'use strict';

angular.module('reportFilters.footer', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/footer', {
            templateUrl: 'views/footer/footer.html',
            controller: 'FooterCtl'
        });
    }])

    .controller('FooterCtl', [function() {

    }]);