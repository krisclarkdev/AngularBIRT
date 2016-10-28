'use strict';

angular.module('AngularBIRT.project', [
    'AngularBIRT.project.interpolate-filter',
    'AngularBIRT.project.project-directive'
])

    .value('project', 'AngularBIRT');