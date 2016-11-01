var app = angular.module('AngularBIRT');

app.service('angularBirtInitService', function($http, $q, restFilterService, jsapiInitService) {
    var init = function() {
        jsapiInitService.doActuateInit();
        restFilterService.doDownloadAllFilters().then(function(filters) {window.filters = filters;});
    }

    this.doInit = function() {
        init();
    }
});