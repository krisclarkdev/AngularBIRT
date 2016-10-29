var app = angular.module('AngularBIRT');

app.service('restLoginService', function($http, $q) {
    var authObject = {};

    this.getAuthObject = function() {
        return authObject;
    };

    this.loadBirtLibrary = function() {
        actuate.load('viewer');
        actuate.load('parameter');
        actuate.load('reportexplorer');
        actuate.load('dialog');
    };

    var login = function() {
        var deferred = $q.defer();

        var data = $.param({
            'username': window.restuser,
            'password': window.restpass
        });

        var config = {
            'headers' : {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        $http.post('http://ihub.demoimage.com:8000/api/v2/login', data, config)
            .then(function(response) {
                deferred.resolve(response.data);
            });

        return deferred.promise;
    };

    this.doLogin = function() {
        var deferred = $q.defer();

        login().then(function(data) {
            deferred.resolve(data.authToken);
        }, function(data) {
            deferred.resolve(data);
        }, function(data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    }
});