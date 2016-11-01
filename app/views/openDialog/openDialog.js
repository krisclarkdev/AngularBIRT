'use strict';

angular.module('AngularBIRT.openDialog', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/openDialog', {
            controller: 'OpenDialogCtrl'
        });
    }])

    .controller('OpenDialogCtrl', function($scope, viewerService) {
        $scope.reportExecutor = {};

        $scope.reportExecutor.doExecute = function() {viewerService.doExecuteReport('reportdesign', 'parameters')}
        //$scope.reportExecutor.doExecute = function() {window.runReport();}
    });