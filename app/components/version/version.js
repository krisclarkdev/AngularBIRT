'use strict';

angular.module('AngularBIRT.version', [
  'AngularBIRT.version.interpolate-filter',
  'AngularBIRT.version.version-directive'
])

.value('version', '0.0.1');