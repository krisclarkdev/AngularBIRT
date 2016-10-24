'use strict';

angular.module('reportFilters.viewSaveDialog', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/viewSaveDialog', {
            templateUrl: 'viewSaveDialog/viewSaveDialog.html',
            controller: 'ViewSaveDialogCtrl'
        });
    }])

    .controller('ViewSaveDialogCtrl', [function() {

    }]);