"use strict"
        
describe('Unit testing messages', function() {
    var test,rootScope;

  // Load the apiYeomannApp module, which contains the directive
    beforeEach(module('apiYeomanApp'));
//    beforeEach(module("messages"));
  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
    beforeEach(inject(function($compile, $rootScope){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    rootScope = $rootScope;
        // Compile a piece of HTML containing the directive
    
    test = angular.element("<div messages></div>");
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $compile(test)(rootScope);
    rootScope.$digest();
  }));

  it('Replaces the element with the appropriate content', function() {
          
//    // Check that the compiled element contains the templated content
   
    expect(test.html()).to.contain("Data required.");
  });
});
