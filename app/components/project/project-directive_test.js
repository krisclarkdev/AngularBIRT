'use strict';


describe('reportFilters.project module', function() {
    beforeEach(module('reportFilters.project'));

    describe('app-project directive', function() {
        it('should print current project', function() {
            module(function($provide) {
                $provide.value('project', 'TEST_PROJ');
            });
            inject(function($compile, $rootScope) {
                var element = $compile('<span app-project></span>')($rootScope);
                expect(element.text()).toEqual('TEST_PROJ');
            });
        });
    });
});