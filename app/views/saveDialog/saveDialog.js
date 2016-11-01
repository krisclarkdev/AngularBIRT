'use strict';

angular.module('AngularBIRT.saveDialog', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/saveDialog', {
            controller: 'SaveDialogCtrl'
        });
    }])

    .controller('SaveDialogCtrl', function($scope, viewerService) {
        $scope.report = {};
        $scope.report.doSave = function(){viewerService.doSaveReport();};
    });