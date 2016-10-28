'use strict';

angular.module('AngularBIRT.project.interpolate-filter', [])

    .filter('projectname', ['project', function(project) {
        return function(text) {
            return String(text).replace(/\%PROJECTNAME\%/mg, project);
        };
    }]);