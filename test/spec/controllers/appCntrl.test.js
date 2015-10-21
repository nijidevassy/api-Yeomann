'use strict';

describe('appCntrl', function () {

  // load the controller's module
  

  var appCntrl,
      scope,
      locationMock,
      myServiceMock,
      apiServiceMock;
    
    beforeEach(module('apiYeomanApp'));
    beforeEach(module(initMocks));
    beforeEach(inject(initController));
    
    it('Should exist',function () {
  		expect(appCntrl).to.exist;
  	});
    
    describe('Checking default params',function () {
          it("Check whether the login function navigates",function(){
            appCntrl.login();
              expect(locationMock.path.calledOnce)
          })
    });

    function initMocks($provide) {
		apiServiceMock = {
            username : "company",
            password : "1234",
            logged : "false"
        };
        
  		myServiceMock = sinon.stub({
            details:function(){}
        })
	 	$provide.service('apiService', function () { 
	      return apiServiceMock;
	    });
	    $provide.factory('myService', function () {
	      return myServiceMock;
	    });
 	}

  	function initController($controller,$rootScope){
		scope = $rootScope.$new();
		locationMock = sinon.stub({path:function(){}});
		appCntrl = $controller('appCntrl', {
	      $scope:scope,
	      $location:locationMock
	    });
    }
});