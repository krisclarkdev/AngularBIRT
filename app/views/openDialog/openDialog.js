'use strict';

angular.module('AngularBIRT.openDialog', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/openDialog', {
            templateUrl: 'views/openDialog/openDialog.html',
            controller: 'OpenDialogCtrl'
        });
    }])

    .controller('OpenDialogCtrl', function($scope) {
        $scope.reportExecutor = {};

        $scope.reportExecutor.doExecute = function() {window.runReport();}
    });