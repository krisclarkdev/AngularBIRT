$(document).ready(function() {
    actuate.load('viewer');
    actuate.load('parameter');
    actuate.load('reportexplorer');
    actuate.load("dialog");

    reqOps.setRepositoryType(repoType);
    reqOps.setVolume(volume);
    reqOps.setCustomParameters({});

    actuate.initialize(ihub, reqOps == undefined ? null : reqOps, username, password, null);

    dialogOpen   = $('#dialogOpen').dialog({autoOpen: false, zIndex: 10000});
    dialogSave   = $('#dialogSave').dialog({autoOpen: false, zIndex: 10000});
    dialogHelp   = $('#dialogHelp').dialog({autoOpen: false, zIndex: 10000});
    savedFilters = $('#dialogSavedFilters').dialog({autoOpen: false, zIndex: 10000});

    accordionGroups = $('#accordionGroups').accordion();

    function login() {
        var jqxhr = $.post({
            url: window.resturl,
            data: {
                'username': window.restuser,
                'password': window.restpass
            },
            success: function(data, status, jqxhr) {
                console.log('1');
            },
            dataType: 'json'
        });

        jqxhr.always(function(data) {
            console.log(data.authToken);
            getFileID(data.authToken);
            //downloadFilters(data.authToken);
        });
    }

    function getFileID(authid) {
        console.log(authid);
        var jqxhr = $.ajax({
            url: window.filesurl,
            url: window.filesurl,
            type: "get", //send it through get method
            data:{'AuthToken': authid},
            beforeSend: function(xhr){xhr.setRequestHeader('AuthToken', authid);},
            success: function(response) {
                //Do Something
                test = response.itemList.file;
                console.log();

                for(i=0; i<test.length; i++) {
                    if(test[i].name == 'filters.json') {
                        downloadFilters(authid, test[i].id);
                    }
                }
            },
            error: function(xhr) {
                //Do Something to handle error
                console.log(xhr);
            }
        });
    }

    login();

    //52020000010
    function downloadFilters(authid, id) {
        console.log(authid);
        var jqxhr = $.ajax({
            url: 'http://ihub.demoimage.com:8000/api/v2/files/'+id+'/download?base64=false',
            type: "get", //send it through get method
            data:{'AuthToken': authid},
            beforeSend: function(xhr){xhr.setRequestHeader('AuthToken', authid);},
            success: function(response) {
                //Do Something
                console.log(response);
                filters = JSON.parse(response);
                console.log(filters);
                console.log(filters.mytable.filtername);

                //for(filters)
                for(i=0; i<filters.mytable.filter.length; i++) {
                    filterTemplate = '<label>'+filters.mytable.filter[i].filtername+'</label><div class="checkbox"><label><input type="checkbox" value="">Patient Number</label><input type="text" value="'+filters.mytable.filter[i].value[0]+'"class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Patient Last Name</label><input value="'+filters.mytable.filter[i].value[1]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Patient First Name</label><input value="'+filters.mytable.filter[i].value[2]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Address</label><input value="'+filters.mytable.filter[i].value[3]+'"type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">City</label><input value="'+filters.mytable.filter[i].value[4]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">State</label><input value="'+filters.mytable.filter[i].value[5]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Appointment Date</label><input value="'+filters.mytable.filter[i].value[6]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Diagnosis</label><input value="'+filters.mytable.filter[i].value[7]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Doctor Comments</label><input value="'+filters.mytable.filter[i].value[8]+'" type="text" class="form-control" ></div><div class="checkbox"><label><input type="checkbox" value="">Rx</label><input value="'+filters.mytable.filter[i].value[9]+'" type="text" class="form-control" ></div>';
                    $('#savedFiltersOutput').append(filterTemplate);
                }


            },
            error: function(xhr) {
                //Do Something to handle error
                console.log(xhr);
            }
        });
    }


    //$('#accordionGroups').hide();

    $('#accordionGroups input[type="checkbox"]').click(function(e) {
        e.stopPropagation();
    });

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

    window.runReport = function() {
        console.log($('.birtParameter'));
        var t = $('.birtParameter');
        var paramMap = {};
        for(i=0; i<t.length;i++) {
            paramMap [t[i].name] = t[i].value;
        }

        executeReport(paramMap);
    }

    $('button').click(function() {
        var elementID = $(this).attr('id');

        if(elementID = "execute") {
        }else if(elementID == 'cancelDialogOpen') {
            dialogOpen.dialog('close');
        }else if(elementID == 'cancelParameters') {
            $('.parametersPane').fadeToggle( "slow", "linear" );
        }else if(elementID == 'filterFilter'){
            var filterTheseColumns = {
                'mytable': {
                    'CONTACTLASTNAME': {
                        'condition': actuate.data.Filter.EQ,
                        'value': 'Young'
                    }
                }
            };

            filterColumns(viewer1.getCurrentPageContent(), filterTheseColumns);
        }else if(elementID == 'filterHide'){
            var hideTheseColumns = {
                'mytable': {
                    'columns':['CUSTOMERNUMBER','STATE']
                }
            };

            hideColumns(viewer1.getCurrentPageContent(), myViewer);
        }
    });

    $('.filterSelector').click(function() {
        var elementID = $(this).attr('id');

        if(elementID == 'chkFirstName'){
            if($(this).is(":checked")) {
                $(this).show();
            }else{
                $(this).hide();
            }
        }else if(elementID == 'chkLastName'){
            if($(this).is(":checked")) {
                $(this).show();
            }else{
                $(this).hide();
            }
        }else if(elementID == 'chkCity'){
            if($(this).is(":checked")) {
                $(this).show();
            }else{
                $(this).hide();
            }
        }else if(elementID == 'chkState'){
            if($(this).is(":checked")) {
                $(this).show();
            }else{
                $(this).hide();
            }
        }
    });

    window.getOpenItems = function() {
        var resultDef = "Name|FileType|Version|VersionName|Description";
        getItems(resultDef, "explorerpane");
        //dialogOpen.dialog('open');
    }



    window.openSaveFilterDialog = function() {
        $('#saveInput').val('');
        var resultDef = "Name|FileType|Version|VersionName|Description";
        dialogSave.dialog('open');
        getItems(resultDef, "explorerpane2")
        myViewer.saveReportDesign('myNewDesign.rptdesign', function(){console.log('done saving');     // LIVE
            //myViewer.saveReportDocument('myNewDesign.rptdesign', function(){console.log('done saving'); // CACHED
        })
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

    function openDesign() {
        buildParams();
        executeReport();
        dialogOpen.dialog('close');
        console.log(reportDesign);
    }

    function getItems(resultDef, pane) {
        console.log('getting items');
        var explorer = new actuate.ReportExplorer(pane);
        explorer.registerEventHandler(
            actuate.reportexplorer.EventConstants.ON_SELECTION_CHANGED,
            function(selectedItem, pathName, pane) {
                console.log(pathName);
                reportDesign = pathName;
                $('#saveInput').val(pathName);

            });
        explorer.setFolderName("/");
        explorer.setResultDef( resultDef.split("|") );
        var test = explorer.submit();
        console.log(test);
    }

    $('#parametersDropDown').click(function() {if($('.parametersPane').is(":visible")) {$('.parametersPane').fadeToggle( "slow", "linear" );}else{buildParams();}});

    $('#filterGroupsDropDown').click(function() {
        $('.parametersPane').fadeToggle( "slow", "linear" );
    });


    function allPages() {
        return "1-"+viewer1.getTotalPageCount();
    }

    function buildParams() {
        console.log('buildParams() for ' + reportDesign);
        params  = new actuate.Parameter("params");
        params.setReportName(reportDesign);
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
                updatePageNumbers();
            }
        });

        $('#reportName').html(reportDesign.replace(/^.*[\\\/]/, ''));
        getColumnNames();
        dialogOpen.dialog('close');

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

    function getColumnNames(){}

    htmlbodyHeightUpdate()
    $( window ).resize(function() {
        htmlbodyHeightUpdate()
    });
    $( window ).scroll(function() {
        height2 = $('.main').height()
        htmlbodyHeightUpdate()
    });
});