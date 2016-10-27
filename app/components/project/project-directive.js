'use strict';

angular.module('AngularBIRT.project.project-directive', [])

    .directive('appVersion', ['project', function(project) {
        return function(scope, elm, attrs) {
            elm.text(project);
        };
    }]);