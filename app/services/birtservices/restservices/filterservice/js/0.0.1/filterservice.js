var app = angular.module('AngularBIRT');

app.service('restFilterService', function($http, $q, restLoginService, fileid, downloadfilters) {
    var deferred = $q.defer();
    var filters = {
        'template': ''
    }

    var downloadAllFilters = function() {
        restLoginService.doLogin().then(function(authToken){
            fileid.doGetFileID(authToken).then(function(fileID) {
                downloadfilters.doDownloadFilters(authToken, fileID).then(function(filters) {
                    deferred.resolve(filters);
                });
            });
        });

        return deferred.promise;
    };

    var buildTemplate = function(filters) {
        var temp;
        for(i=0; i<filters.mytable.filter.length; i++) {
            temp = '<h3>'+filters.mytable.filter[i].filtername+'</h3><div><div class="checkbox"><label><input type="checkbox" value="">Patient Number</label><input type="text" value="'+filters.mytable.filter[i].value[0]+'"class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Patient Last Name</label><input value="'+filters.mytable.filter[i].value[1]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Patient First Name</label><input value="'+filters.mytable.filter[i].value[2]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Address</label><input value="'+filters.mytable.filter[i].value[3]+'"type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">City</label><input value="'+filters.mytable.filter[i].value[4]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">State</label><input value="'+filters.mytable.filter[i].value[5]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Appointment Date</label><input value="'+filters.mytable.filter[i].value[6]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Diagnosis</label><input value="'+filters.mytable.filter[i].value[7]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Doctor Comments</label><input value="'+filters.mytable.filter[i].value[8]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Rx</label><input value="'+filters.mytable.filter[i].value[9]+'" type="text" class="form-control" ></div></div>';
        }

        window.savedFiltersTemplate = temp;
        console.log(window.savedFiltersTemplate);
    }

    this.doDownloadAllFilters = function(authid) {
        var deferred = $q.defer();

        downloadAllFilters().then(function(filters) {
            buildTemplate(filters);
            deferred.resolve(filters);
        });

        return deferred.promise;
    }


});