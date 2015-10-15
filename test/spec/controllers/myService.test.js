'use strict';

  describe('myService', function() {

    var myService, $httpBackend, service;
      beforeEach(module('apiYeomanApp'));
      beforeEach(function(){
          angular.mock.inject(function ($injector) {
              $httpBackend = $injector.get('$httpBackend');
              myService = $injector.get('myService');
              
          })
      });

      describe('details()#',function(){
      
      it('expect service.details() to make API call ',inject(function(myService){
          
          
//           var successCallback = sinon.spy();
          
//        $httpBackend.expectGET(url).respond(200, 'mock data');
//        $http.get(url).success(successCallback);
           // callback called only after flush
          $httpBackend.when('GET', "http://nodejs-qbjsstudy.rhcloud.com/api/get_shop_data")
                            .respond({
                user: 'mock data'
            });
          
          
//        expect(successCallback).not.to.have.been.called;
        var result =  myService.details('http://nodejs-qbjsstudy.rhcloud.com/api/get_shop_data')
        result.then(function(user){
            expect(result.user).to.equal('mock data');
            console.log(user);
        })
        // flush response
        $httpBackend.flush();
        
        // Verify expectations
        // Actual response is  [ 'mock data', 200, Function, { method : 'GET', url : '/path/to/resource' } ]
          
          
          
//        expect(successCallback.mostRecentCall.args).toContain('mock data');
//        expect(successCallback.mostRecentCall.args[1]).toBe(200);        
    }));
      });
          
//          $httpBackend.whenJSONP("http://nodejs-qbjsstudy.rhcloud.com/api/get_shop_data")
//            .respond({
//            data : "test";
//            });
//          
//          var result = myService.details("test");

//            $httpBackend.flush();
//
//            expect(result.data).to.equal("test");
//          }));
//      it('set default params',function(){
//          expect(service.itemClicked).to.equal("");
//      });
  });

         