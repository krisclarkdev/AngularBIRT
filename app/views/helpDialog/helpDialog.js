'use strict';

angular.module('AngularBIRT.helpDialog', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/helpDialog', {
            controller: 'HelpDialogCtrl'
        });
    }])

    .controller('HelpDialogCtrl', function($scope) {
        $scope.myData = {};
        $scope.myData.doClick = function() {
            alert(window.dialogHelp.dialog('close'));
        }
    });