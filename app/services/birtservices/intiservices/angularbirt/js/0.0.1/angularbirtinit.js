var app = angular.module('AngularBIRT');

app.service('angularBirtInitService', function($http, $q, restFilterService, jsapiInitService, jsapiModuleService) {
    var init = function() {
        jsapiModuleService.doLoadModules();
        jsapiInitService.doActuateInit();
        restFilterService.doDownloadAllFilters().then(function(filters) {window.filters = filters;});
    }

    this.doInit = function() {
        init();
    }
});