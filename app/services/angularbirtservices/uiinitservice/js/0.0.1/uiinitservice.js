var app = angular.module('AngularBIRT');

app.service('angularBirtUiInitService', function($http, $q) {
    var init = function() {
        $(document).ready(function() {
            window.parametersDialog = $('#parametersContent').dialog({autoOpen: false, zIndex: 10000});
            window.dialogOpen   = $('#dialogOpen').dialog({autoOpen: false, zIndex: 10000});
            window.dialogSave   = $('#dialogSave').dialog({autoOpen: false, zIndex: 10000});
            window.dialogHelp   = $('#dialogHelp').dialog({autoOpen: false, zIndex: 10000});
            window.savedFilters = $('#dialogSavedFilters').dialog({autoOpen: false, zIndex: 10000, maxHeight: 450, minHeight: 450});
            window.savedFiltersGroup = $('#savedFiltersOutput').accordion();
        });
    };

    this.doInit = function() {
        init();
    }
});