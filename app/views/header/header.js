'use strict';

angular.module('AngularBIRT.header', ['ngRoute', 'ngSanitize'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/header', {
            controller: 'HeaderCtrl'
        });
    }])

    .controller('HeaderCtrl', function($sce, $log, $scope) {
        var header = this;

        //header.rootElements = [
        //    '<li class="dropdown"><a href="#" class="dropdown-toggle toolbarButtons parametersDropDown" id="exportDropDown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-bars" aria-hidden="true"></i></a><ul class="dropdown-menu" ng-controller="HeaderCtrl as tester"><li ng-repeat="link in tester.exportOptions" compile-html="link"></li></ul></li>'
        //]
        header.exportDropDown = '<li class="dropdown"><a href="#" class="dropdown-toggle toolbarButtons parametersDropDown" id="exportDropDown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-bars" aria-hidden="true"></i></a><ul class="dropdown-menu" ng-controller="HeaderCtrl as tester"><li ng-repeat="link in tester.exportOptions" compile-html="link"></li></ul></li>';
        header.rootElements = [
            '<li><a ng-click="openDialog.doOpen($event)" href="" class="toolbarButtons" id="openReport"><medium class="text-muted">Open Report</medium></a></li>',
            '<li><a href="" ng-click="saveDialog.doOpen()" class="toolbarButtons" id="save" href=""><medium class="text-muted">Save</medium></a></li>',
            '<li class="dropdown"><!--<a href="#" class="dropdown-toggle toolbarButtons parametersDropDown" id="filterGroupsDropDown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><medium class="text-muted">Filters <span class="caret"></span></medium></a>--></li>',
            '<li class="dropdown"><a href="#" class="dropdown-toggle parametersDropDown" id="parametersDropDown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><medium class="text-muted">Filters <span class="caret"></span></medium></a><ul class="dropdown-menu"><li><a href="#">Action</a></li><li><a href="#">Another action</a></li></ul></li>',
            '<li class="dropdown"><a href="#" class="dropdown-toggle parametersDropDown" id="parametersDropDown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><medium class="text-muted">Parameters <span class="caret"></span></medium></a></li>',
            '<li><a href="" class="toolbarButtons" ng-click="helpDialog.doOpen($event)" id="help"><medium class="text-muted">Help</medium></a></li>'
        ]

        header.exportOptions = [
            '<a ng-click="xls.doExport()" class="exportOption" href="" id="exportXls"><i class="fa fa-file-excel-o" aria-hidden="true"></i> XLS</a>',
            '<a ng-click="xlsx.doExport()" href="" id="exportXlsx"><i class="fa fa-file-excel-o" aria-hidden="true"></i> Excel (XLSX)</a>',
            '<a ng-click="pdf.doExport()" href="" id="exportPdf"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</a>',
            '<a ng-click="ps.doExport()" href="" id="exportPs"><i class="fa fa-paragraph" aria-hidden="true"></i> PostScript (PS)</a>',
            '<a ng-click="ppt.doExport()" href="" id="exportPpt"><i class="fa fa-file-powerpoint-o" aria-hidden="true"></i> PowerPoint (PPT)</a>',
            '<a ng-click="pptx.doExport()" href="" id="exportPptx"><i class="fa fa-file-powerpoint-o" aria-hidden="true"></i> PowerPoint (PPTX)</a>',
            '<a ng-click="doc.doExport()" href="" id="exportDoc"><i class="fa fa-file-word-o" aria-hidden="true"></i> Word (DOC)</a>',
            '<a ng-click="docx.doExport()" href="" id="exportDocx"><i class="fa fa-file-word-o" aria-hidden="true"></i> Word (DOCX)</a>',
            '<a ng-click="xhtml.doExport()" href="" id="exportXhtml"><i class="fa fa-internet-explorer" aria-hidden="true"></i> XHTML</a>',
            '<li role="separator" class="divider"></li>',
            '<a href="" ng-click="print.doPrint()"><i class="fa fa-print toPrinter" aria-hidden="true"></i> Print</a></li>'
            ];

        for (var i = 0; i < header.exportOptions.length; i++) {
            header.exportOptions[i] = $sce.trustAsHtml(header.exportOptions[i]);
        }

        for (var i = 0; i < header.rootElements.length; i++) {
            header.rootElements[i] = $sce.trustAsHtml(header.rootElements[i]);
        }

        header.xlsExport = function() {
            alert('test');
        }

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
        $scope.savedFilters = {};
        $scope.openFilters = {};

        $scope.xls.doExport = function(){console.log('yup');window.myViewer.downloadReport("xls", null, null);};
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
        $scope.savedFilters.doOpen = function() {console.log('open saved filter');window.savedFilters.dialog('open');}
        $scope.openFilters.doOpen = function() {console.log('open filters');}

    })
;