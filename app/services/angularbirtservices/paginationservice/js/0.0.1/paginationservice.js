var app = angular.module('AngularBIRT');

app.factory('paginationService', function() {
    var paginationService = {};

    paginationService.doMoveForward  = function(){moveForward();};
    paginationService.doMoveBackward = function(){moveBackward();}
    paginationService.doMoveFistPage = function(){moveFirstPage();};
    paginationService.doMoveLastPage = function(){moveLastPage();};

    var moveForward = function() {
        var next = myViewer.getCurrentPageNum() + 1;
        if(next <= myViewer.getTotalPageCount()) {
            $('#pageN').html(next);
            myViewer.gotoPage(next);
        }
    };

    var moveBackward = function() {
        var prev = myViewer.getCurrentPageNum() - 1;
        if(prev > 0) {
            myViewer.gotoPage(prev);
            $('#pageN').html(prev);
        }
    };

    var moveLastPage = function() {
        myViewer.gotoPage(myViewer.getTotalPageCount());
    };

    var moveFirstPage = function() {
        myViewer.gotoPage(1);
    };

    return paginationService;
});