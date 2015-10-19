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
      it('expect service.details() to make API call ', function(){
          
          $httpBackend.when('GET', 'http://nodejs-qbjsstudy.rhcloud.com/api/get_shop_data')
                            .respond(function(){
              service = {user: 'mock data'};
              return service;
            });
          
        myService.details('http://nodejs-qbjsstudy.rhcloud.com/api/get_shop_data');
            $httpBackend.flush();
            expect(service.user).to.equal('mock data');
      });
       });
       
      describe('itemclick and images[]',function(){
           it('checks whether images[] has value set',function(){
               expect(myService.images).to.exist;
           });
           it('checks whether itemclicked has value',function(){
               myService.itemClicked = 1;
               expect(myService.itemClicked).to.equal(1);
           });
       });
      
 
  });

    describe('apiService', function() {
        var apiService;
        beforeEach(module('apiYeomanApp'));
        beforeEach(function(){
          angular.mock.inject(function ($injector) {
              apiService = $injector.get('apiService');
          })
      });
        it('check default values',function() {
            expect(apiService.username).to.equal("company");
            expect(apiService.password).to.equal("1234");
            expect(apiService.logged).to.equal("false");
        });
});

         