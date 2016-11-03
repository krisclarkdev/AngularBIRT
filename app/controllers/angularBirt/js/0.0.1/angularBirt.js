'use strict';

var monthDays = [];

angular.module('AngularBIRT.app', ['ngRoute', 'ngSanitize'])

    .config(['$routeProvider', function() {
    }])

    .controller('AngularBirtCtrl', function($sce, $log, $scope, viewerService) {
        $scope.xls              = {};
        $scope.xlsx             = {};
        $scope.pdf              = {};
        $scope.ps               = {};
        $scope.ppt              = {};
        $scope.pptx             = {};
        $scope.doc              = {};
        $scope.docx             = {};
        $scope.xhtml            = {};
        $scope.report           = {};
        $scope.saveDialog       = {};
        $scope.openDialog       = {};
        $scope.helpDialog       = {};
        $scope.moveForwardOne   = {};
        $scope.moveForwardAll   = {};
        $scope.moveBackwardOne  = {};
        $scope.moveBackwardAll  = {};
        $scope.parametersCancel = {};
        $scope.parameters       = {};
        $scope.saveDialog       = {};
        $scope.savedFilters     = {};
        $scope.openFilters      = {};
        $scope.reportExecutor   = {};
        $scope.myData           = {};

        $scope.xls.doExport             = function(){viewerService.doExportReport('xls');};
        $scope.xlsx.doExport            = function(){viewerService.doExportReport('xlsx');};
        $scope.pdf.doExport             = function(){viewerService.doExportReport('pdf');};
        $scope.ps.doExport              = function(){viewerService.doExportReport('ps');};
        $scope.ppt.doExport             = function(){viewerService.doExportReport('ppt');};
        $scope.pptx.doExport            = function(){viewerService.doExportReport('pptx');};
        $scope.doc.doExport             = function(){viewerService.doExportReport('doc');};
        $scope.docx.doExport            = function(){viewerService.doExportReport('docx');};
        $scope.xhtml.doExport           = function(){viewerService.doExportReport('xhtml');};
        $scope.helpDialog.doOpen        = function(){viewerService.doOpenHelpDialog();};
        $scope.openDialog.doOpen        = function(){viewerService.doOpenDialog();};
        $scope.moveForwardOne.doMove    = function(){viewerService.doMoveForward();};
        $scope.moveForwardAll.doMove    = function(){viewerService.doMoveLastPage();};
        $scope.moveBackwardOne.doMove   = function(){console.log('test');viewerService.doMoveBackward();};
        $scope.moveBackwardAll.doMove   = function(){viewerService.doMoveLastPage();};
        $scope.parameters.doOpen        = function(){viewerService.doOpenParameters();};
        $scope.saveDialog.doOpen        = function() {viewerService.doOpenSaveDialog();};
        $scope.savedFilters.doOpen      = function() {$('#savedFiltersOutput').append(window.savedFiltersTemplate);window.savedFilters.dialog('open');}
        $scope.openFilters.doOpen       = function() {console.log('open filters');};
        $scope.reportExecutor.doExecute = function() {viewerService.doExecuteReport('reportdesign', 'parameters')};
        $scope.report.doSave            = function(){viewerService.doSaveReport();};
        $scope.myData.doClick           = function() {alert(window.dialogHelp.dialog('close'));};

        $scope.angularBirt = {
            app: {
                title: 'AngularBIRT',
                css: [
                    {href: 'resources/jquery-ui/css/1.12.1/jquery-ui.structure.min.css'},
                    {href: 'resources/jquery-ui/css/1.12.1/jquery-ui.min.css'},
                    {href: 'resources/jquery-ui/css/1.12.1/jquery-ui.theme.min.css'},
                    {href: 'resources/bootstrap/css/3.3.7/bootstrap.min.css'},
                    {href: 'resources/bootstrap/css/3.3.7/bootstrap.min.css.map'},
                    {href: 'resources/bootstrap/css/3.3.7/bootstrap-theme.min.css'},
                    {href: 'resources/bootstrap/css/3.3.7/bootstrap-theme.min.css.map'},
                    {href: 'bower_components/html5-boilerplate/dist/css/normalize.css'},
                    {href: 'bower_components/html5-boilerplate/dist/css/main.css'},
                    {href: 'resources/angularbirt/css/0.0.1/AngularBIRT.css'},
                    {href: 'resources/fontawesome/css/4.7.0/font-awesome.min.css'},
                    {href: 'app.css'},
                    {href: 'bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js'}
                ],
                help: {
                    text: 'AngularBIRT is an example interactive viewer for BIRT and InformationHub 16.  This example code is not meant for production use and is merely a way to show integration into your application using OpenText InformationHub\'s JavaScript API and Angular.',
                    title: 'Help'
                }
            },
            labels: {
                credits: {
                    author: 'Kristopher Clark'
                },
                topNav: {
                    openReport: 'Open Report',
                    saveReport: 'Save Report',
                    filters: 'Filters',
                    parameters: 'Parameters',
                    help: 'Help'
                }
            },
            social: {
                usernames: {
                    facebook:    '123',
                    twitter:     '123',
                    gplus:       '123',
                    linkedin:    '123',
                    instagram:   '123',
                    stumbleupon: '123',
                    pintrest:    '123',
                    flickr:      '123',
                    tumblr:      '123'
                },
                hrefs: {
                    facebook:    'www.facebook.com',
                    twitter:     'http://www.twitter.com',
                    gplus:       'http://plus.google.com',
                    linkedin:    'http://www.linkedin.com',
                    instagram:   'http://www.instagram.com',
                    stumbleupon: 'http://www.stumbleupon.com',
                    pintrest:    'http://www.pintrest.com',
                    flickr:      'http://www.flickr.com',
                    tumblr:      'http://www.tumblr.com'
                }
            },
            headerContent: {
                social:[
                    '<a href="http://{{angularBirt.social.hrefs.facebook}}/{{angularBirt.social.usernames.facebook}}"       class="entypo-facebook"    target="_blank"><i class="fa fa-facebook"    aria-hidden="true"></i><span>Facebook</span></a>',
                    '<a href="http://{{angularBirt.social.hrefs.twitter}}/{{angularBirt.social.usernames.twitter}}"         class="entypo-twitter"     target="_blank"><i class="fa fa-twitter"     aria-hidden="true"></i><span>Twitter</span></a>',
                    '<a href="http://{{angularBirt.social.hrefs.gplus}}/{{angularBirt.social.usernames.gplus}}"             class="entypo-gplus"       target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i><span>Google+</span></a>',
                    '<a href="http://{{angularBirt.social.hrefs.linkedin}}/{{angularBirt.social.usernames.linkedin}}"       class="entypo-linkedin"    target="_blank"><i class="fa fa-linkedin"    aria-hidden="true"></i><span>LinkedIn</span></a>',
                    '<a href="http://{{angularBirt.social.hrefs.instagram}}/{{angularBirt.social.usernames.instagram}}"     class="entypo-instagrem"   target="_blank"><i class="fa fa-instagram"   aria-hidden="true"></i><span>Instagram</span></a>',
                    '<a href="http://{{angularBirt.social.hrefs.stumbleupon}}/{{angularBirt.social.usernames.stumbleupon}}" class="entypo-stumbleupon" target="_blank"><i class="fa fa-stumbleupon" aria-hidden="true"></i></i><span>StumbleUpon</span></a>',
                    '<a href="http://{{angularBirt.social.hrefs.pintrest}}/{{angularBirt.social.usernames.pintrest}}"       class="entypo-pinterest"   target="_blank"><i class="fa fa-pinterest"   aria-hidden="true"></i><span>Pinterest</span></a>',
                    '<a href="http://{{angularBirt.social.hrefs.flickr}}/{{angularBirt.social.usernames.flickr}}"           class="entypo-flickr"      target="_blank"><i class="fa fa-flickr"      aria-hidden="true"></i><span>Flickr</span></a>',
                    '<a href="http://{{angularBirt.social.hrefs.tumblr}}/{{angularBirt.social.usernames.tumblr}}"           class="entypo-tumblr"      target="_blank"><i class="fa fa-tumblr"      aria-hidden="true"></i><span>Tumblr</span></a>'
                ]
            }
        };

        // Leaving in for reference
        //for (var i = 0; i < $scope.angularBirt.headerContent.exportOptions.length; i++) {$scope.angularBirt.headerContent.exportOptions[i] = $sce.trustAsHtml($scope.angularBirt.headerContent.exportOptions[i]);}
    })
;