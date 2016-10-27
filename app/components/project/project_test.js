'use strict';

describe('AngularBIRT.project module', function() {
    beforeEach(module('AngularBIRT.project'));

    describe('project service', function() {
        it('should return current project', inject(function(project) {
            expect(project).toEqual('AngularBIRT');
        }));
    });
});
