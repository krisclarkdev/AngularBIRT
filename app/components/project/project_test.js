'use strict';

describe('reportFilters.project module', function() {
    beforeEach(module('reportFilters.project'));

    describe('project service', function() {
        it('should return current project', inject(function(project) {
            expect(project).toEqual('AngularBIRT');
        }));
    });
});
