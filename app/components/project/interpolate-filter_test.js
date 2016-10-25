'use strict';

describe('reportFilters.project module', function() {
    beforeEach(module('reportFilters.project'));

    describe('interpolate filter', function() {
        beforeEach(module(function($provide) {
            $provide.value('project', 'TEST_PROJ');
        }));

        it('should replace VERSION', inject(function(interpolateFilter) {
            expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_PROJ after');
        }));
    });
});