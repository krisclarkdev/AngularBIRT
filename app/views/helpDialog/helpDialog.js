'use strict';

angular.module('AngularBIRT.helpDialog', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/helpDialog', {
            templateUrl: 'views/helpDialog/helpDialog.html',
            controller: 'HelpDialogCtrl'
        });
    }])

    .controller('HelpDialogCtrl', [function() {

    }]);