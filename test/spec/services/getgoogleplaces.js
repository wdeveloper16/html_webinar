'use strict';

describe('Service: GetGooglePlaces', function () {

  // load the service's module
  beforeEach(module('utahHomeApp'));

  // instantiate service
  var GetGooglePlaces;
  beforeEach(inject(function (_GetGooglePlaces_) {
    GetGooglePlaces = _GetGooglePlaces_;
  }));

  it('should do something', function () {
    expect(!!GetGooglePlaces).toBe(true);
  });

});
