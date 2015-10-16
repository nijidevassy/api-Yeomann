"use strict"
        
describe('Unit testing messages', function() {
    var $compile,$rootScope;

  // Load the apiYeomannApp module, which contains the directive
    beforeEach(module('apiYeomanApp'));
//    beforeEach(module("messages"));
  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replaces the element with the appropriate content', function() {
    // Compile a piece of HTML containing the directive
    var element = $compile("<div messages></div>")($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain(" <p ng-message='required'>Data required.</p><p ng-message='minlength'>Too short.</p><p ng-message='maxlength'>Too long.</p>");
  });
});