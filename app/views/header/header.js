'use strict';

angular.module('AngularBIRT.header', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/header', {
            templateUrl: 'views/header/header.html',
            controller: 'HeaderCtrl'
        });
    }])

    .controller('HeaderCtrl', function($scope) {
        $scope.xls   = {};
        $scope.xlsx  = {};
        $scope.pdf   = {};
        $scope.ps    = {};
        $scope.ppt   = {};
        $scope.pptx  = {};
        $scope.doc   = {};
        $scope.docx  = {};
        $scope.xhtml = {};
        $scope.saveDialog      = {};
        $scope.openDialog      = {};
        $scope.helpDialog      = {};
        $scope.moveForwardOne  = {};
        $scope.moveForwardAll  = {};
        $scope.moveBackwardOne = {};
        $scope.moveBackwardAll = {};
        $scope.parametersCancel = {};
        $scope.parametersToggle = {};
        $scope.saveDialog = {};

        $scope.xls.doExport = function(){window.myViewer.downloadReport("xls", null, null);};
        $scope.xlsx.doExport = function(){window.myViewer.downloadReport("xlsx", null, null);};
        $scope.pdf.doExport = function(){window.myViewer.downloadReport("pdf", null, null);};
        $scope.ps.doExport = function(){window.myViewer.downloadReport("ps", null, null);};
        $scope.ppt.doExport = function(){window.myViewer.downloadReport("ppt", null, null);};
        $scope.pptx.doExport = function(){window.myViewer.downloadReport("pptx", null, null);};
        $scope.doc.doExport = function(){window.myViewer.downloadReport("doc", null, null);};
        $scope.docx.doExport = function(){window.myViewer.downloadReport("docx", null, null);};
        $scope.xhtml.doExport = function(){window.myViewer.downloadReport("xhtml", null, null);};
        $scope.helpDialog.doOpen = function(){window.dialogHelp.dialog('open');}
        $scope.openDialog.doOpen = function(){window.getOpenItems(); window.dialogOpen.dialog('open');}
        $scope.moveForwardOne.doMove = function(){window.moveForwardOne();}
        $scope.moveForwardAll.doMove = function(){window.moveForwardAll();}
        $scope.moveBackwardOne.doMove = function(){window.moveBackwardOne();}
        $scope.moveBackwardAll.doMove = function(){window.moveBackwardAll();}
        $scope.parametersToggle.doToggle = function(){window.toggleParameters();}
        $scope.saveDialog.doOpen = function() {window.openSaveFilterDialog();}
    });