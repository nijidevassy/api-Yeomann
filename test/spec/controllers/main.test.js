"use strict";

describe('mainCntrl',function () {
	var mainCntrl,apiServiceMock,myServiceMock,scope,locationMock;
    
	beforeEach(module('apiYeomanApp')); // Module in required before the controller is injected
	beforeEach(module(initMocks));
  	beforeEach(inject(initController));
  	
  	it('Should exist',function(){
  		expect(mainCntrl).to.exist;
  	});
    
     it('Default logged should be set',function(){
  		expect(apiServiceMock.logged).to.equal('false');
  	});

  	it('location should change if apiService.logged changes',function(){
  		
  		scope.$digest(); // In order to invoke the $scope.$watch cycle
  		expect(locationMock.path.calledWith('/')).to.be.true;
  	});
    
    it('details() called with url',function(){
        expect(myServiceMock.details).to.be.calledOnce;
    }); 
    
    it('check whether scope.data gets value of myService',function(){
        expect(mainCntrl.data).to.be.equal(myServiceMock);
        expect(mainCntrl.detail).to.equal(myServiceMock.data);
    });
    
    it('go()#',function(){
        mainCntrl.go('/',0);
        expect(locationMock.path.calledWith('/')).to.be.true;
        expect(myServiceMock.itemClicked).to.equal(0); 
    });
    
    function initMocks($provide) {
		apiServiceMock = {
            username : "company",
            password : "1234",
            logged : "false"
        };
        
  		myServiceMock = sinon.stub({
            details:function(url){},
            data:[{"details":{"company":"QUALITY CHOICE (Chain Drug Marketing Association)","stockLeft":103,"buyLimit":7,"summery":"magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit","description":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","genericName":"Mineral oil"},"id":"5593ada64d6f63208bc55100","title":"Mineral oil","cost":"$7.75","$$hashKey":"object:15"}
                  ]
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
		mainCntrl = $controller('mainCntrl', {
	      $scope:scope,
	      $location:locationMock
	    });
        
	}
});