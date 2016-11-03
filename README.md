[![Analytics](https://ga-beacon.appspot.com/UA-67485661-3/github/otcookbook/home)](https://github.com/igrigorik/ga-beacon)

[Synopsis](#synopsis)

[Screenshots](#screenshots)

[Configuration](#configuration)

[Contributors](#contributors)

[License](#license)

## [Synopsis](#synopsis)
Custom responsive BIRT viewer built with AngularJS.  Still under a lot of work

## [Screenshots](#screenshots)
![alt tag](https://github.com/kclark-jenkins/AngularBIRT/blob/master/screenshots/AngularBIRT%201.png)
![alt tag](https://github.com/kclark-jenkins/AngularBIRT/blob/master/screenshots/AngularBIRT%202.png)
![alt tag](https://github.com/kclark-jenkins/AngularBIRT/blob/master/screenshots/AngularBIRT%203.png)

## [Configuration](#configuration)

This application can pretty much be completely configured in two files.

#### angularBirt.js

```
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
                exportOptions: [
                    '<a ng-click="xls.doExport()" class="exportOption" href="" id="exportXls"><i class="fa fa-file-excel-o" aria-hidden="true"></i> XLS</a>',
                    '<a ng-click="xlsx.doExport()"  href="" id="exportXlsx"><i  class="fa fa-file-excel-o"                  aria-hidden="true"></i> Excel (XLSX)</a>',
                    '<a ng-click="pdf.doExport()"   href="" id="exportPdf"><i   class="fa fa-file-pdf-o"                    aria-hidden="true"></i> PDF</a>',
                    '<a ng-click="ps.doExport()"    href="" id="exportPs"><i    class="fa fa-paragraph"                     aria-hidden="true"></i> PostScript (PS)</a>',
                    '<a ng-click="ppt.doExport()"   href="" id="exportPpt"><i   class="fa fa-file-powerpoint-o"             aria-hidden="true"></i> PowerPoint (PPT)</a>',
                    '<a ng-click="pptx.doExport()"  href="" id="exportPptx"><i  class="fa fa-file-powerpoint-o"             aria-hidden="true"></i> PowerPoint (PPTX)</a>',
                    '<a ng-click="doc.doExport()"   href="" id="exportDoc"><i   class="fa fa-file-word-o"                   aria-hidden="true"></i> Word (DOC)</a>',
                    '<a ng-click="docx.doExport()"  href="" id="exportDocx"><i  class="fa fa-file-word-o"                   aria-hidden="true"></i> Word (DOCX)</a>',
                    '<a ng-click="xhtml.doExport()" href="" id="exportXhtml"><i class="fa fa-internet-explorer"             aria-hidden="true"></i> XHTML</a>',
                    '<li role="separator" class="divider"></li>',
                    '<a ng-click="print.doPrint()" href=""><i class="fa fa-print toPrinter" aria-hidden="true"></i> Print</a></li>'
                ],
                navigation:[
                    '<small class="rpeortName text-muted" id="reportName">Please open a report</small>',
                    '<a class="navigation navbar-brand"   id="firstPageLink" ng-click="moveBackwardAll.doMove()" href=""><i class="fa fa-step-backward" aria-hidden="true"></i></a>',
                    '<a class="navigation navbar-brand"   id="prevPage"      ng-click="moveBackwardOne.doMove()" href=""><i class="fa fa-backward"      aria-hidden="true"></i></a>',
                    '<a class="navigation navbar-brand"   id="pageN"         href=""></a>',
                    '<a class="navigation navbar-brand"   id="pageOf"        href=""></a>',
                    '<a class="navigation navbar-brand"   id="pageM"         href=""><div id="lastPage"></div></a>',
                    '<a class="navigation navbar-brand"   id="nextPage"      ng-click="moveForwardOne.doMove()" href=""><i class="fa fa-forward"      aria-hidden="true"></i></a>',
                    '<a class="navigation navbar-brand"   id="lastPageLink"  ng-click="moveForwardAll.doMove()" href=""><i class="fa fa-step-forward" aria-hidden="true"></i></a>'
                ],
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
```

#### AngularBIRT.css

```
.ui-dialog { z-index: 1000 !important ;}
.explorerpane { display: none; }
.filterGroupsPane{ display: none;}
.accordianValues{ height: 90px; }
.socialNetworks { z-index: 1000 !important;}
.filterText { display: none; }
.navbar-fixed-top { z-index: 1000 !important;}
#reportViewer{ padding-left: 50px; height: 100%;}
.birtNav{ padding: 5px 10px 5px 5px; }
.licenses td { padding-right: 15px; }
.licenses tr:nth-child(even) {background: #FFF}
.licenses tr:nth-child(odd) {background: #CCC}

.ui-accordion-content { min-height: 300px;}

.viewerDialogs {
    height: 350px;
    overflow: auto;
}

html {
    position: relative;
    min-height: 100%;
}
body {
    /* Margin bottom by footer height */
    margin-bottom: 60px;
}
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    /* Set the fixed height of the footer here */
    height: 60px;
    background-color: #f5f5f5;
}

.parametersPane {
    height: 70px;
    display: none;
}

.filtersContent {
    display: none;
}

/* Custom page CSS
-------------------------------------------------- */
/* Not required for template or sticky footer method. */

body > .container {
    padding: 60px 15px 0;
}
.container .text-muted {
    margin: 20px 0;
}

.footer > .container {
    padding-right: 15px;
    padding-left: 15px;
}

code {
    font-size: 80%;
}

@media (max-width: 1200px) {
    body {
        font-size:90%;
    }
    h1 {
        font-size:4.3em;
    }
    p {
        font-size:1.3em;
    }
    header {
        height:80px;
    }
    header .logo {
        margin-top:12px;
        width:200px;
    }
    header nav {
        margin-top:11px;
    }
    header nav ul li {
        margin-right:12px;
    }
    header nav ul li a {
        border-radius:23px;
        font-size: 1.3em;
        padding:10px 12px;
    }
    .wrap {
        padding:0 30px;
    }
    .paddRow .close {
        right:30px;
    }
}
@media (max-width: 900px) {
    .contactForm {
        width:100%;
    }
}
@media (max-width: 768px) {
    body {
        font-size:80%;
        margin:0;
    }
    h1 {
        font-size:4em;
    }
    header {
        height:70px;
    }
    header .logo {
        margin-top:20px;
        width:70px;
    }
    header nav {
        margin-top:8px;
    }
    header nav ul li {
        margin-right:5px;
    }
    header nav ul li a {
        border-radius:20px;
        font-size:1.1em;
        padding:8px;
    }
    .wrap {
        padding:0 15px;
    }
    .projectObj .name {
        font-size:3em;
    }
    .paddRow {
        padding-bottom:30px;
    }
    .paddRow .head {
        font-size:3em;
        margin:30px 0;
    }
    .paddRow .close {
        right:20px;
        top:60px;
        width:30px;
    }
    .projectHead .picture {
        width:67%;
    }
    .projectHead .picture.right {
        margin-right:16.5%;
    }
    .projectHead .text {
        position:static;
        width:100%;
    }
    .projectHead .centerText {
        width:70%;
    }
    .view-enter,.view-leave {
        -webkit-transform:translate3d(0,0,0);
        transform:translate3d(0,0,0);
    }
}
@media (max-width: 480px) {
    body {
        font-size:70%;
        margin:0;
    }
    header {
        height:50px;
    }
    header .logo {
        display:none;
    }
    header nav {
        margin-top:3px;
    }
    header nav ul li {
        margin-right:3px;
    }
    header nav ul li a {
        border-radius:20px;
        font-size:1.3em;
        padding:5px 14px;
    }
    #contactBtn {
        display:none;
    }
    .wrap {
        padding:0 10px;
    }
    .paddRow {
        padding-bottom:20px;
    }
    .paddRow .head {
        margin:20px 0;
    }
    .paddRow .close {
        right:10px;
        top:45px;
        width:20px;
    }
    .about .image {
        margin:10% auto;
        width:60%;
    }
    .about .abIcon {
        display:inline;
    }
    .projectHead .centerText {
        width:90%;
    }
    .about .txt,.input {
        width:100%;
    }
    .about .flLeft,.about .flRight,.input.email {
        float:none;
    }
}

@import url(http://weloveiconfonts.com/api/?family=entypo);

/* entypo */
[class*="entypo-"]:before {
    font-family: "entypo", sans-serif;
}
a {
    text-decoration: none;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.socialContainer {
    margin: 0 auto;
    padding: 20px 50px;
    background: white;
}
.socialNetworks {
    left: 0;
    position: fixed;
    top: 150px;
}
.socialNetworks a {
    background: #333;
    color: #fff;
    display: block;
    height: 35px;
    font: 16px "Open Sans", sans-serif;
    line-height: 35px;
    position: relative;
    text-align: center;
    width: 35px;
}
.socialNetworks a span {
    line-height: 35px;
    left: -120px;
    position: absolute;
    text-align:center;
    width:120px;
}
.socialNetworks a:hover span {
    left: 100%;
}
.socialNetworks a[class*="facebook"],
.socialNetworks a[class*="facebook"]:hover,
.socialNetworks a[class*="facebook"] span { background: #3b5998; }

.socialNetworks a[class*="twitter"],
.socialNetworks a[class*="twitter"]:hover,
.socialNetworks a[class*="twitter"] span { background: #00aced; }

.socialNetworks a[class*="gplus"],
.socialNetworks a[class*="gplus"]:hover,
.socialNetworks a[class*="gplus"] span { background: #dd4b39; }

.socialNetworks a[class*="linkedin"],
.socialNetworks a[class*="linkedin"]:hover,
.socialNetworks a[class*="linkedin"] span { background: #007bb6; }

.socialNetworks a[class*="instagrem"],
.socialNetworks a[class*="instagrem"]:hover,
.socialNetworks a[class*="instagrem"] span { background: #517fa4; }

.socialNetworks a[class*="stumbleupon"],
.socialNetworks a[class*="stumbleupon"]:hover,
.socialNetworks a[class*="stumbleupon"] span { background: #eb4924; }

.socialNetworks a[class*="pinterest"],
.socialNetworks a[class*="pinterest"]:hover,
.socialNetworks a[class*="pinterest"] span { background: #cc2127; }

.socialNetworks a[class*="flickr"],
.socialNetworks a[class*="flickr"]:hover,
.socialNetworks a[class*="flickr"] span { background: #ff0084; }

.socialNetworks a[class*="tumblr"],
.socialNetworks a[class*="tumblr"]:hover,
.socialNetworks a[class*="tumblr"] span { background: #32506d; }
```

## [Contributors](#contributors)

Kristopher Clark

## [License](#license)

[MIT License](https://github.com/kclark-jenkins/OTCookbook/blob/master/LICENSE)
