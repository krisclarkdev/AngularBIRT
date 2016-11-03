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
    $('#parametersContent').dialog();
    //$('.pTable').show();
    //$('#filterGroupsPane').hide();
    //$('.parametersContent').show();
    //$('#filterGroupsPane').show();
    //$('.parametersPane').fadeToggle( "slow", "linear" );
}

function openHelpDialog() {
    dialogHelp.dialog('open');
}

function openExportDropDown() {

}