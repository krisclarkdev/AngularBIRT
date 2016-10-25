$(document).ready(function() {
    var ihub     = 'http://ihub.demoimage.com:8700/iportal/';
    var myViewer = null;
    var username = null;
    var password = null;
    var volume   = 'Default Volume';
    var repoType = 'Enterprise';
    var reqOps   = null;
    var reportDesign = '/Applications/BIRT Sample App/Report Designs/Monthly Revenue Analysis.rptdesign;1';

    $(window).on('resize', function() {
        var footerPosition = $('.footer').position();

        myViewer.setHeight(footerPosition.top - 30);
        myViewer.setWidth($(document).width()-200);
        myViewer.submit();
    });

    actuate.load('viewer');
    actuate.load('parameter');

    reqOps = new actuate.RequestOptions();
    reqOps.setRepositoryType(repoType);
    reqOps.setVolume(volume);
    reqOps.setCustomParameters({});
    actuate.initialize(ihub, reqOps == undefined ? null : reqOps, username, password, null);

    $('#firstPageLink').click(function() {myViewer.gotoPage(1);});

    $('#prevPage').click(function() {if(myViewer.getCurrentPageNum() > 1) {myViewer.gotoPage(myViewer.getCurrentPageNum()-1);}});

    $('#nextPage').click(function() {if(myViewer.getCurrentPageNum() < viewer1.getTotalPageCount()) {myViewer.gotoPage(myViewer.getCurrentPageNum()+1);}});

    $('#lastPageLink').click(function() {myViewer.gotoPage(viewer1.getTotalPageCount());});

    $( "#dialog" ).dialog({autoOpen: false});

    $('#cancel').click(function() {$('.parametersPane').fadeToggle( "slow", "linear" );});

    $("#openReport").click(function(){console.log('opening ' + reportDesign);});

    $('#parametersDropDown').click(function() {if($('.parametersPane').is(":visible")) {$('.parametersPane').fadeToggle( "slow", "linear" );}else{buildParams();}});

    $('#exportDoc').click(function(){myViewer.downloadReport("doc", null, null);});
    $('#exportDocx').click(function(){myViewer.downloadReport("docx", null, null);});
    $('#exportPdf').click(function(){myViewer.downloadReport("pdf", null, null);});
    $('#exportPpt').click(function(){myViewer.downloadReport("ppt", null, null);});
    $('#exportPptx').click(function(){myViewer.downloadReport("pptx", null, null);});
    $('#exportPs').click(function(){myViewer.downloadReport("ps", null, null);});
    $('#exportXhtml').click(function(){myViewer.downloadReport("xhtml", null, null);});
    $('#exportXls').click(function(){myViewer.downloadReport("xls", null, null);});
    $('#exportXlsx').click(function(){myViewer.downloadReport("xlsx", null, null);});

    $('.save').click(function(){myViewer.saveReportDesign();});

    function allPages() {
        return "1-"+viewer1.getTotalPageCount();
    }

    $('#execute').click(function() {
        console.log($('.birtParameter'));
        var t = $('.birtParameter');
        var paramMap = {};
        for(i=0; i<t.length;i++) {
            paramMap [t[i].name] = t[i].value;
        }

        executeReport(paramMap);
    });

    function buildParams() {
        params  = new actuate.Parameter("params");
        params.setReportName(reportDesign);
        params.submit(function() {downloadParams(params);});
    }

    function downloadParams(paramsFromViewer) {
        var allParameters = new Array();

        for(i=0; i<paramsFromViewer._._paramImpl._paramDefs.length; i++) {
            var currentParameter = {};
            currentParameter = {
                'cascadingParentName': paramsFromViewer._._paramImpl._paramDefs[i]._._cascadingParentName,
                'columnType': paramsFromViewer._._paramImpl._paramDefs[i]._._columnType,
                'currentValue': paramsFromViewer._._paramImpl._paramDefs[i]._._currentValue,
                'dataType': paramsFromViewer._._paramImpl._paramDefs[i]._._dataType,
                'defaultValue': paramsFromViewer._._paramImpl._paramDefs[i]._._defaultValue,
                'displayName': paramsFromViewer._._paramImpl._paramDefs[i]._._displayName,
                'helpText': paramsFromViewer._._paramImpl._paramDefs[i]._._helpText,
                'isAdHoc': paramsFromViewer._._paramImpl._paramDefs[i]._._isAdHoc,
                'isDynamicSelectionList': paramsFromViewer._._paramImpl._paramDefs[i]._._isDynamicSelectionList,
                'isHidden': paramsFromViewer._._paramImpl._paramDefs[i]._._isHidden,
                'isPassword': paramsFromViewer._._paramImpl._paramDefs[i]._._isPassword,
                'isRequired': paramsFromViewer._._paramImpl._paramDefs[i]._._isRequired,
                'name': paramsFromViewer._._paramImpl._paramDefs[i]._._name
            };
            allParameters.push(currentParameter);
        }

        var renderedParameters = new Array();
        for(i=0; i<allParameters.length; i++) {
            var currentInput = buildInput(allParameters[i].columnType,allParameters[i].name, allParameters[i].defaultValue);
            console.log(currentInput);
            var currentParameters = '<td>'+allParameters[i].displayName+'</td><td>'+currentInput+'</td>';
            renderedParameters.push(currentParameters);

        }

        var parameterTable = '<table><tr>';

        for(i=0; i<renderedParameters.length; i++) {
            parameterTable += renderedParameters[i] + '</tr>'
        }

        parameterTable += '</table>';
        $('#renderedParameters').html(parameterTable);
        $('.parametersPane').fadeToggle( "slow", "linear" );
    }

    function buildInput(inputType, inputName, defaultValue) {
        console.log('buildInput');
        if(inputType == 'String') {
            console.log('<input type="input" class="birtParameter" name="'+inputName+'" value="'+defaultValue+'">');
            return '<input type="text" class="birtParameter" name="'+inputName+'" value="'+defaultValue+'">';
        }
    }

    function executeReport(paramMap) {

        viewer1 = new actuate.Viewer('reportViewer');
        viewer1.setReportDesign(reportDesign);

        var parameterValues = [];
        for (var key in paramMap) {
            var param = new actuate.viewer.impl.ParameterValue();
            param.setName(key);
            if (paramMap[key] != null) {
                param.setValue(paramMap[key]);
            } else {
                param.setValueIsNull(true);
            }
            parameterValues.push(param);
        }
        viewer1.setParameterValues(parameterValues);
        var options = new actuate.viewer.UIOptions();
        options.enableToolBar(false);
        viewer1.setUIOptions(options);
        console.log($(document).height());
        viewer1.setHeight($(document).height()-300);
        viewer1.setWidth($(document).width()-200);
        viewer1.submit(function() {
            myViewer = viewer1;
            $('#pageN').html(viewer1.getCurrentPageNum());
            $('#pageM').html(viewer1.getTotalPageCount());
            $('#pageOf').html("of");
            myViewer.enableIV();
        });

        $('#reportName').html('Monthly Revenue Analysis.rptdesign;1');
    }
});