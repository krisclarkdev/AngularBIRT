var app = angular.module('AngularBIRT');

app.directive('ngSparkline', function() {
    return {
        restrict: 'A',
        template: '<div class="sparkline">ngSparkline</div>'
    }
});