'use strict';

angular.module('reportFilters.saveDialog', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/saveDialog', {
            templateUrl: 'views/saveDialog/saveDialog.html',
            controller: 'SaveDialogCtrl'
        });
    }])

    .controller('SaveDialogCtrl', [function() {

    }]);