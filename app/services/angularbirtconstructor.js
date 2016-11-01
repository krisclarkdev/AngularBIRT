var app = angular.module('AngularBIRT');

app.service('angularBirtConstructor', function($http, $q, angularBirtInitService, angularBirtUiInitService) {
    var init = function() {
        angularBirtInitService.doInit();
        angularBirtUiInitService.doInit();
    }

    this.doInit = function() {
        init();
    }
});