'use strict';

describe('detailsCntrl', function () {

  // load the controller's module
  

  var detailsCntrl,
      scope,
      locationMock,
      myServiceMock,
      apiServiceMock;
    
    beforeEach(module('apiYeomanApp'));
    beforeEach(module(initMocks));
    beforeEach(inject(initController));
    
    
    
    it('Should exist',function () {
  		expect(detailsCntrl).to.exist;
  	});
 
    
    it('Default logged should be set',function(){
  		expect(apiServiceMock.logged).to.equal('false');
  	});

  	it('location should change if apiService.logged changes',function(){
  		
  		scope.$digest(); // In order to invoke the $scope.$watch cycle
  		expect(locationMock.path.calledWith('/')).to.be.true;
  	});
    

    describe("After logeed in",function(){
        it('Should have valid company name', function(){
            apiServiceMock.logged = 'true';
            scope.$digest();
            expect(scope.companyName).to.exist;
            expect(myServiceMock.itemClicked).to.equal(0);
            expect(scope.current).to.equal(myServiceMock.itemClicked);
            expect(scope.name).to.equal(scope.companyName[0].details.company);
            
            expect(scope.stockleft).to.equal(scope.companyName[0].details.stockLeft);
            expect(scope.buylimit).to.equal(scope.companyName[0].details.buyLimit);
            expect(scope.summary).to.equal(scope.companyName[0].details.summery);
            
            expect(scope.id).to.equal(scope.companyName[0].id);
            expect(scope.title).to.equal(scope.companyName[0].title);
            expect(scope.cost).to.equal(scope.companyName[0].cost);
        });
    });
    
    
    
    function initMocks($provide) {
		apiServiceMock = {
            username : "company",
            password : "1234",
            logged : "false"
            
        };
        
        
  		myServiceMock = sinon.stub({
            details:function(){},
            itemClicked:0,
            data: [{"details":{"company":"QUALITY CHOICE (Chain Drug Marketing Association)","stockLeft":103,"buyLimit":7,"summery":"magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit","description":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","genericName":"Mineral oil"},"id":"5593ada64d6f63208bc55100","title":"Mineral oil","cost":"$7.75","$$hashKey":"object:15"}
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
		detailsCntrl = $controller('detailsCntrl', {
	      $scope:scope,
	      $location:locationMock
	    });
        
	}
});