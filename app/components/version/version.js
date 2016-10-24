'use strict';

angular.module('reportFilters.version', [
  'reportFilters.version.interpolate-filter',
  'reportFilters.version.version-directive'
])

.value('version', '0.1');
