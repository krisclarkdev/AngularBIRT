'use strict';

describe('AngularBIRT.version module', function() {
  beforeEach(module('AngularBIRT.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});