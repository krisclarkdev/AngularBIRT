'use strict';

// Declare app level module which depends on views, and components
angular.module('AngularBIRT', [
  'ngRoute',
  'ngSanitize',
  'AngularBIRT.app',
  'AngularBIRT.main',
  'AngularBIRT.project',
  'AngularBIRT.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/main'});
}]);

angular.module('AngularBIRT').run(function($rootScope, viewerService, angularBirtConstructor) {
  try {
    viewerService.doLoadModules();
    viewerService.doInitActuate();

    angularBirtConstructor.doInit();
  }catch(ex){
    console.log(ex);
  }
});