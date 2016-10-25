'use strict';

angular.module('reportFilters.project', [
    'reportFilters.project.interpolate-filter',
    'reportFilters.project.project-directive'
])

    .value('project', 'AngularBIRT');
