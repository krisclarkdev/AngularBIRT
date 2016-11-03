var app = angular.module('AngularBIRT');

app.factory('viewerService', function() {
    var viewerService = {};
    var ihub = {
        'url': 'http://ihub.demoimage.com:8700/iportal/',
        'repoType': 'Enterprise',
        'volume':   'Default Volume',
        'customParamters': {},
        'reqOps': new actuate.RequestOptions(),
        'uiOps': null,
        'success': function() {
            ihub.viewer = new actuate.Viewer('reportViewer');
            $('#pageN').html(ihub.viewer.getCurrentPageNum());
            $('#pageM').html(ihub.viewer.getTotalPageCount());
            $('#pageOf').html("of");
            changeViewerHeight();
            updateReportName();
            closeOpenDialog();
            buildParameters();
        },
        'credentials': {
            'username': 'Administrator',
            'password': null
        },
        'viewer': null,
        'reportDesign': null,
        'resultDef':     'Name|FileType|Version|VersionName|Description',
        'itemsPane':     'explorerpane',
        'saveItemsPane': 'explorerpane2'
    };

    var loadModules = function() {
        actuate.load('viewer');
        actuate.load('parameter');
        actuate.load('reportexplorer');
        actuate.load('dialog');
    };

    var setReqOps = function() {
        ihub.reqOps.setRepositoryType(ihub.repoType);
        ihub.reqOps.setVolume(ihub.volume);
        ihub.reqOps.setCustomParameters(ihub.customParamters);
    };

    var updateReportName = function() {
        $('#reportName').html(window.reportDesign.replace(/^.*[\\\/]/, ''));
    };

    var initActuate = function() {
        setReqOps();

        actuate.initialize(ihub.url,
                           ihub.reqOps == undefined ? null : ihub.reqOps,
                           ihub.credentials.username,
                           ihub.credentials.password,
                           ihub.success);
    };

    var executeReport = function(reportDesign, parameters) {
        if(ihub.viewer == null)
            ihub.viewer = new actuate.Viewer('reportViewer');

        ihub.reportDesign = reportDesign;
        ihub.viewer.setReportDesign(window.reportDesign);
        ihub.viewer.submit(ihub.success);
        var options = new actuate.viewer.UIOptions();
        options.enableToolBar(false)
        ihub.viewer.setUIOptions(options);
    };

    var changeViewerHeight = function() {
        ihub.viewer.setHeight($(document).height()-130);
        ihub.viewer.setWidth($(document).width()-200);
    };

    var closeOpenDialog = function() {
        console.log('Implement close dialog');
    };

    var buildParameters = function() {
        try {
            console.log('start 1');
            params  = new actuate.Parameter("params");
            params.setReportName(window.reportDesign);
            params.submit(function(){
                //this.run.style.visibility = 'visible';
                test(params);
            });
            console.log('end')
        }catch(err){
            console.log(err);
        }
    };

    var test = function(params) {
        console.log('Check it');
        //console.log(params);
        try {
            //console.log(params._.length);
            var allParameters = new Array();

            for(i=0; i<params._._paramImpl._paramDefs.length; i++) {
                var currentParameter = {};
                currentParameter = {
                    'cascadingParentName': params._._paramImpl._paramDefs[i]._._cascadingParentName,
                    'columnType': params._._paramImpl._paramDefs[i]._._columnType,
                    'currentValue': params._._paramImpl._paramDefs[i]._._currentValue,
                    'dataType': params._._paramImpl._paramDefs[i]._._dataType,
                    'defaultValue': params._._paramImpl._paramDefs[i]._._defaultValue,
                    'displayName': params._._paramImpl._paramDefs[i]._._displayName,
                    'helpText': params._._paramImpl._paramDefs[i]._._helpText,
                    'isAdHoc': params._._paramImpl._paramDefs[i]._._isAdHoc,
                    'isDynamicSelectionList': params._._paramImpl._paramDefs[i]._._isDynamicSelectionList,
                    'isHidden': params._._paramImpl._paramDefs[i]._._isHidden,
                    'isPassword': params._._paramImpl._paramDefs[i]._._isPassword,
                    'isRequired': params._._paramImpl._paramDefs[i]._._isRequired,
                    'name': params._._paramImpl._paramDefs[i]._._name
                };
                allParameters.push(currentParameter);
            }

            console.log(allParameters);

            var renderedParameters = new Array();
            for(i=0; i<allParameters.length; i++) {
                var currentInput = buildInput(allParameters[i].columnType,allParameters[i].name, allParameters[i].defaultValue);
                console.log(currentInput);
                var currentParameters = '<td>'+allParameters[i].displayName+'</td><td>'+currentInput+'</td>';
                renderedParameters.push(currentParameters);

            }

            var parameterTable = '<table class="pTable"><tr>';

            for(i=0; i<renderedParameters.length; i++) {
                parameterTable += renderedParameters[i] + '</tr>'
            }

            parameterTable += '</table>';
            $('#renderedParameters').html(parameterTable);
            parametersDialog.dialog('open');
            //$('.parametersPane').fadeToggle( "slow", "linear" );
            console.log('!!!!' + allParameters);
        }catch(err){
            console.log(err);
        }
    };

    var buildInput = function(inputType, inputName, defaultValue) {
        console.log('buildInput');
        if(inputType == 'String') {
            console.log('<input type="input" class="birtParameter" name="'+inputName+'" value="'+defaultValue+'">');
            return '<input type="text" class="birtParameter" name="'+inputName+'" value="'+defaultValue+'">';
        }
    }

    var exportReport = function(format) {
        switch(format) {
            case "XLS":
                ihub.viewer.downloadReport("xls", null, null);
                break;
            case "XLSX":
                ihub.viewer.downloadReport("xlsx", null, null);
                break;
            case "PDF":
                ihub.viewer.downloadReport("pdf", null, null);
                break;
            case "PS":
                ihub.viewer.downloadReport("ps", null, null);
                break;
            case "PPT":
                ihub.viewer.downloadReport("ppt", null, null);
                break;
            case "PPTX":
                ihub.viewer.downloadReport("pptx", null, null);
                break;
            case "DOC":
                ihub.viewer.downloadReport("doc", null, null);
                break;
            case "DOCX":
                ihub.viewer.downloadReport("docx", null, null);
                break;
            case "HTML":
                ihub.viewer.downloadReport("html", null, null);
                break;
            case "xls":
                ihub.viewer.downloadReport("xls", null, null);
                break;
            case "xlsx":
                ihub.viewer.downloadReport("xlsx", null, null);
                break;
            case "pdf":
                ihub.viewer.downloadReport("pdf", null, null);
                break;
            case "ps":
                ihub.viewer.downloadReport("ps", null, null);
                break;
            case "ppt":
                ihub.viewer.downloadReport("ppt", null, null);
                break;
            case "pptx":
                ihub.viewer.downloadReport("pptx", null, null);
                break;
            case "doc":
                ihub.viewer.downloadReport("doc", null, null);
                break;
            case "docx":
                ihub.viewer.downloadReport("docx", null, null);
                break;
            case "html":
                ihub.viewer.downloadReport("html", null, null);
                break;
        }
    };
    
    var moveForward = function() {
        var next = ihub.viewer.getCurrentPageNum() + 1;
        if(next <= ihub.viewer.getTotalPageCount()) {
            $('#pageN').html(next);
            ihub.viewer.gotoPage(next);
        }
    };

    var moveBackward = function() {
        var prev = ihub.viewer.getCurrentPageNum() - 1;
        if(prev > 0) {
            ihub.viewer.gotoPage(prev);
            $('#pageN').html(prev);
        }
    };

    var moveLastPage = function() {
        ihub.viewer.gotoPage(ihub.viewer.getTotalPageCount());
    };

    var moveFirstPage = function() {
        ihub.viewer.gotoPage(1);
    };

    var openOpenDialog = function() {
        var itemsPane = ihub.itemsPane;

        var explorer = new actuate.ReportExplorer(itemsPane);
        explorer.registerEventHandler(
            actuate.reportexplorer.EventConstants.ON_SELECTION_CHANGED,
            function(selectedItem, pathName, itemsPane) {
                console.log(pathName);
                reportDesign = pathName;
                $('#saveInput').val(pathName);

            });
        explorer.setFolderName("/");
        explorer.setResultDef( ihub.resultDef.split("|") );
        var test = explorer.submit(function() {
            dialogOpen.dialog('open');
        });
    };

    var openParametersDialog = function() {
        parametersDialog.dialog('open');
    }

    var openSaveDialog = function() {
        try {
            var itemsPane = ihub.saveItemsPane;

            var explorer = new actuate.ReportExplorer(itemsPane);
            explorer.registerEventHandler(
                actuate.reportexplorer.EventConstants.ON_SELECTION_CHANGED,
                function(selectedItem, pathName, itemsPane) {
                    console.log(pathName);
                    reportDesign = pathName;
                    $('#saveInput').val(pathName);

                });
            explorer.setFolderName("/");
            explorer.setResultDef( ihub.resultDef.split("|") );
            explorer.submit(function(){
                dialogSave.dialog('open');
            });
        }catch(err){
            console.log(err);
        }
    };

    var saveReport = function() {
        var newRpt = $('#saveInput').val();
        console.log('New report == ' + newRpt);
        ihub.viewer.saveReportDesign(newRpt, function(){
            dialogSave.dialog('close');
        });
    };

    var openHelpDialog = function() {
        dialogHelp.dialog('open');
    };

    viewerService.doLoadModules    = function() {
        loadModules();
    };
    viewerService.doInitActuate    = function() {
        initActuate();
    };
    viewerService.doExecuteReport  = function(reportDesign, parameters) {
        executeReport(reportDesign, parameters);
    };
    viewerService.doExportReport   = function(format) {
        exportReport(format);
    };
    viewerService.doMoveForward    = function(){moveForward();};
    viewerService.doMoveBackward   = function(){moveBackward();};
    viewerService.doMoveFistPage   = function(){moveFirstPage();};
    viewerService.doMoveLastPage   = function(){moveLastPage();};
    viewerService.doGetItems       = function(){getItems()};
    viewerService.doOpenDialog     = function(){openOpenDialog();};
    viewerService.doOpenSaveDialog = function(){openSaveDialog();};
    viewerService.doSaveReport     = function(){saveReport();};
    viewerService.doOpenParameters = function(){openParametersDialog();};
    viewerService.doOpenHelpDialog = function(){openHelpDialog();};

    return viewerService;
});