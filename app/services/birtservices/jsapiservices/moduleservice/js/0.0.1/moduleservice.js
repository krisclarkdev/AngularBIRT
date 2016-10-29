var app = angular.module('AngularBIRT');

app.service('jsapiModuleService', function($http, $q) {

    var loadBirtModules = function() {
        actuate.load('viewer');
        actuate.load('parameter');
        actuate.load('reportexplorer');
        actuate.load('dialog');
    };

    this.doLoadModules = function() {
        loadBirtModules();
    }
});