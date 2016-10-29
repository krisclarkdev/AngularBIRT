var app = angular.module('AngularBIRT');

app.service('jsapiInitService', function($http, $q) {
    var actuateInit = function() {
        reqOps.setRepositoryType(repoType);
        reqOps.setVolume(volume);
        reqOps.setCustomParameters({});
        actuate.initialize(ihub, reqOps == undefined ? null : reqOps, username, password, null);
    };

    this.doActuateInit = function() {
        actuateInit();
    }
});