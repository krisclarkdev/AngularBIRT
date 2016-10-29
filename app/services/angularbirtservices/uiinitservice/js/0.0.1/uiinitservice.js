var app = angular.module('AngularBIRT');

app.service('angularBirtUiInitService', function($http, $q) {
    var init = function() {
        $(document).ready(function() {
            window.dialogOpen   = $('#dialogOpen').dialog({autoOpen: false, zIndex: 10000});
            window.dialogSave   = $('#dialogSave').dialog({autoOpen: false, zIndex: 10000});
            window.dialogHelp   = $('#dialogHelp').dialog({autoOpen: false, zIndex: 10000});
            window.savedFilters = $('#dialogSavedFilters').dialog({autoOpen: false, zIndex: 10000, maxHeight: 450, minHeight: 450});
            window.savedFiltersGroup = $('#savedFiltersOutput').accordion();
            paginationConstructor();
        });
    }

    var moveForward = function() {

    }

    function paginationConstructor() {
        window.moveForwardOne = function() {
            var next = myViewer.getCurrentPageNum() + 1;
            if(next <= myViewer.getTotalPageCount()) {
                $('#pageN').html(next);
                myViewer.gotoPage(next);
            }
        }

        window.moveBackwardOne = function() {
            var prev = myViewer.getCurrentPageNum() - 1;
            if(prev > 0) {
                myViewer.gotoPage(prev);
                $('#pageN').html(prev);
            }
        }

        window.moveForwardAll = function() {
            myViewer.gotoPage(myViewer.getTotalPageCount());
        }

        window.moveBackwardAll = function() {
            myViewer.gotoPage(1);
        }
    }

    this.doInit = function() {
        init();
    }
});