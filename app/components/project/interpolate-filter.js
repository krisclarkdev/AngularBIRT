'use strict';

angular.module('reportFilters.project.interpolate-filter', [])

    .filter('projectname', ['project', function(project) {
        return function(text) {
            return String(text).replace(/\%PROJECTNAME\%/mg, project);
        };
    }]);
