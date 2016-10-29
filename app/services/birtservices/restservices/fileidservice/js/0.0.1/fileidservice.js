var app = angular.module('AngularBIRT');

app.service('fileid', function($http, $q) {
    var getFileID = function(authid) {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: window.filesurl,
            headers: {
                'AuthToken': authid
            }
        }).then(function(response) {
            deferred.resolve(response.data);
        });

        return deferred.promise;
    };

    this.doGetFileID = function(authid) {
        var deferred = $q.defer();

        getFileID(authid).then(function(data) {
            for(i=0;i<data.itemList.file.length;i++) {
                if(data.itemList.file[i].name == 'filters.json'){
                    deferred.resolve(data.itemList.file[i].id);
                }
            }
        }, function(data) {
            deferred.resolve(data);
        }, function(data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    }


});