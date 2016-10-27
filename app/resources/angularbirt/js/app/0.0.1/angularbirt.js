$(document).ready(function() {
    var dialogOpen = $('#dialogOpen').dialog({autoOpen: false, zIndex: 10000});
    var dialogSave = $('#dialogSave').dialog({autoOpen: false, zIndex: 10000});
    var dialogHelp = $('#dialogHelp').dialog({autoOpen: false, zIndex: 10000});

    //$('.toolbarDialogButton').dialog({autoOpen: false, zIndex: 10000});

    var accordionGroups = $('#accordionGroups').accordion();
    $('#accordionGroups').hide();

    $('#accordionGroups input[type="checkbox"]').click(function(e) {
        e.stopPropagation();
    });

    $('.toolbarButtons').click(function(event) {
        var elementID = $(this).attr('id');

        if(elementID == 'openReport') {
            openReportDialog();
        }else if(elementID == 'save') {
            save();
        }else if(elementID == 'filterGroupsDropDown'){
            //
        }else if(elementID == 'help') {
            openHelpDialog();
        }else if(elementID == 'exportDropDown') {

        }else if(elementID == 'home') {
            //
        }
    });

    function openReportDialog() {
        var resultDef = "Name|FileType|Version|VersionName|Description";
        getItems(resultDef, "explorerpane");
        dialogOpen.dialog('open');
    }

    function openSaveFilterDialog() {
        $('#saveInput').val('');
        var resultDef = "Name|FileType|Version|VersionName|Description";
        dialogSave.dialog('open');
        getItems(resultDef, "explorerpane2")
        myViewer.saveReportDesign('myNewDesign.rptdesign', function(){console.log('done saving');     // LIVE
            //myViewer.saveReportDocument('myNewDesign.rptdesign', function(){console.log('done saving'); // CACHED
        })
    }

    function openFiltersDropDown() {

    }

    function openParametersDropDown() {
        $('#accordionGroups').hide();
        $('.parameterButtons').show();
        $('.pTable').show();
        //$('#filterGroupsPane').hide();
        //$('.parametersContent').show();
        //$('#filterGroupsPane').show();
        $('.parametersPane').fadeToggle( "slow", "linear" );
    }

    function openHelpDialog() {
        dialogHelp.dialog('open');
    }

    $(window).on('resize', function() {
        var footerPosition = $('.footer').position();

        myViewer.setHeight(footerPosition.top - 30);
        myViewer.setWidth($(document).width()-200);
        myViewer.submit();
    });

    actuate.load('viewer');
    actuate.load('parameter');
    actuate.load('reportexplorer');
    actuate.load("dialog");

    reqOps = new actuate.RequestOptions();
    reqOps.setRepositoryType(repoType);
    reqOps.setVolume(volume);
    reqOps.setCustomParameters({});
    actuate.initialize(ihub, reqOps == undefined ? null : reqOps, username, password, null);

    $('#firstPageLink').click(function() {myViewer.gotoPage(1);});

    $('#prevPage').click(function() {if(myViewer.getCurrentPageNum() > 1) {myViewer.gotoPage(myViewer.getCurrentPageNum()-1);}});

    $('#nextPage').click(function() {if(myViewer.getCurrentPageNum() < viewer1.getTotalPageCount()) {myViewer.gotoPage(myViewer.getCurrentPageNum()+1);}});

    $('#lastPageLink').click(function() {myViewer.gotoPage(viewer1.getTotalPageCount());});

    var reportNameChange = '';


    $('#cancel').click(function() {$('.parametersPane').fadeToggle( "slow", "linear" );});

    $('#btnOpenReport').click(function() {
        //buildParams();
        reportDesign = reportNameChange;
        console.log('#@#@#@#');
        buildParams();
        executeReport();
        dialogOpen.dialog('close');
        console.log(reportNameChange);
    });

    function getItems(resultDef, pane) {
        console.log('getting items');
        var explorer = new actuate.ReportExplorer(pane);
        explorer.registerEventHandler(
            actuate.reportexplorer.EventConstants.ON_SELECTION_CHANGED,
            function(selectedItem, pathName, pane) {
                console.log(pathName);
                reportNameChange = pathName;
                $('#saveInput').val(pathName);

            });
        explorer.setFolderName("/");
        explorer.setResultDef( resultDef.split("|") );
        var test = explorer.submit();
        console.log(test);
    }

    $('#openReport').click(function() {
        var resultDef = "Name|FileType|Version|VersionName|Description";
        getItems(resultDef, "explorerpane");
        dialogOpen.dialog('open');
    });

    $('#parametersDropDown').click(function() {if($('.parametersPane').is(":visible")) {$('.parametersPane').fadeToggle( "slow", "linear" );}else{buildParams();}});

    $('#filterGroupsDropDown').click(function() {
        $('.parametersPane').fadeToggle( "slow", "linear" );
    });


    $('#exportDoc').click(function(){myViewer.downloadReport("doc", null, null);});
    $('#exportDocx').click(function(){myViewer.downloadReport("docx", null, null);});
    $('#exportPdf').click(function(){myViewer.downloadReport("pdf", null, null);});
    $('#exportPpt').click(function(){myViewer.downloadReport("ppt", null, null);});
    $('#exportPptx').click(function(){myViewer.downloadReport("pptx", null, null);});
    $('#exportPs').click(function(){myViewer.downloadReport("ps", null, null);});
    $('#exportXhtml').click(function(){myViewer.downloadReport("xhtml", null, null);});
    $('#exportXls').click(function(){myViewer.downloadReport("xls", null, null);});
    $('#exportXlsx').click(function(){myViewer.downloadReport("xlsx", null, null);});


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
        console.log('buildParams() for ' + reportDesign);
        console.log('buildParams() for ' + reportNameChange);
        params  = new actuate.Parameter("params");
        params.setReportName(reportNameChange);
        params.submit(function() {downloadParams(params);});
    }

    function downloadParams(paramsFromViewer) {
        try {

            var allParameters = new Array();

            console.log('downloadParams()');
            console.log(paramsFromViewer);
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

            console.log('TEST!!!!!!!');
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
            $('.parametersPane').fadeToggle( "slow", "linear" );
        }catch(err){
            console.log(err);
        }
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
            //filterReport(viewer1.getCurrentPageContent());
            var myTable = viewer1.getCurrentPageContent();
            getColumnNames();

            if(reportDesign == '/Home/administrator/Medical Report.rptdesign;1') {
                filterColumnGroup();
                hideColumnGroup();
            }
        });

        $('#reportName').html(reportDesign.replace(/^.*[\\\/]/, ''));
        getColumnNames();
        //filterReport();
    }

    function getBookmark(bookmarkName) {

    }

    function hideColumnGroup() {
        var hideTheseColumns = {
            'mytable': {
                'columns':['CUSTOMERNUMBER','STATE']
            }
        };

        hideColumns(viewer1.getCurrentPageContent(), myViewer);
    }

    function filterColumnGroup() {
        var filterTheseColumns = {
            'mytable': {
                'CONTACTLASTNAME': {
                    'condition': actuate.data.Filter.EQ,
                    'value': 'Young'
                }
            }
        };

        filterColumns(viewer1.getCurrentPageContent(), filterTheseColumns);
    }

    function updatePageNumbers() {
        $('#pageN').html(myViewer.getCurrentPageNum());
        $('#pageM').html(myViewer.getTotalPageCount());
        $('#pageOf').html("of");
    }

    function getColumnNames() {
    }

    function hideColumns(pagecontent, tables) {
        var tableCount = Object.keys(tables).length;

        for(i=0; i<tableCount; i++) {
            var currentTableName = Object.keys(tables)[i];
            var currentTableObject = pagecontent.getTableByBookmark(currentTableName);

            for(j=0; j<tables[currentTableName].columns.length; j++) {
                console.log(tables[currentTableName].columns[j]);
                currentTableObject.hideColumn(tables[currentTableName].columns[j]);
            }

            currentTableObject.submit();
        }
    }

    function filterColumns(pagecontent, tables) {
        var tableArray = new Array();
        var filtersArray = new Array();

        for(i=0; i<Object.keys(tables).length; i++) {
            var currentTableName  = Object.keys(tables)[i];
            var currentTableObject = pagecontent.getTableByBookmark(currentTableName);
            var filters = new Array();
            console.log('test');

            for(j=0; j<Object.keys(tables[currentTableName]).length; j++) {
                var currentColumnName1 = tables[currentTableName][Object.keys(tables[currentTableName])[j]];
                console.log('$$$$');
                filterOn = Object.keys(tables[currentTableName])[j];
                condition = currentColumnName1.condition;
                value     = currentColumnName1.value;

                var currentFilter = new actuate.data.Filter(filterOn, actuate.data.Filter.EQ, value);

                filters.push(currentFilter);
            }
            currentTableObject.setFilters(filters);
            tableArray.push(currentTableObject);
        }

        for(i=0; i<tableArray.length; i++) {
            tableArray[0].submit(function() {console.log('done filtering');updatePageNumbers();});
        }
    }

    function htmlbodyHeightUpdate(){
        var height3 = $( window ).height()
        var height1 = $('.nav').height()+50
        height2 = $('.main').height()
        if(height2 > height3){
            $('html').height(Math.max(height1,height3,height2)+10);
            $('body').height(Math.max(height1,height3,height2)+10);
        }
        else
        {
            $('html').height(Math.max(height1,height3,height2));
            $('body').height(Math.max(height1,height3,height2));
        }

    }

    $('#chkFirstName').click(function() {
        if($('#chkFirstName').is(":checked")) {
            $('#firstName').show();
        }else{
            $('#firstName').hide();
        }

    });

    $('#chkLastName').click(function() {
        if($('#chkLastName').is(":checked")) {
            $('#lastName').show();
        }else{
            $('#lastName').hide();
        }
    });

    $('#chkCity').click(function() {
        if($('#chkCity').is(":checked")) {
            $('#city').show();
        }else{
            $('#city').hide();
        }
    });

    $('#chkState').click(function() {
        if($('#chkState').is(":checked")) {
            $('state').show();
        }else{
            $('#state').hide();
        }
    });

    $('#filterFilter').click(function() {

        var filterTheseColumns = {
            'mytable': {
                'CONTACTLASTNAME': {
                    'condition': actuate.data.Filter.EQ,
                    'value': 'Young'
                }
            }
        };

        filterColumns(viewer1.getCurrentPageContent(), filterTheseColumns);
    });

    $('#filterHide').click(function() {
        var hideTheseColumns = {
            'mytable': {
                'columns':['CUSTOMERNUMBER','STATE']
            }
        };

        hideColumns(viewer1.getCurrentPageContent(), myViewer);
    })

    htmlbodyHeightUpdate()
    $( window ).resize(function() {
        htmlbodyHeightUpdate()
    });
    $( window ).scroll(function() {
        height2 = $('.main').height()
        htmlbodyHeightUpdate()
    });
});