'use strict';


describe('AngularBIRT.project module', function() {
    beforeEach(module('AngularBIRT.project'));

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