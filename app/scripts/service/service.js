angular.module('apiYeomanApp')
.factory("myService", ['$http', function ($http) {
    
    "use strict";
    var service = {};
    service.details = function (url) {
        var getData = $http.get(url);
        getData.success(function (response) {
            service.data = response.results;
        });
        getData.error(function (response) {
            console.warn("Couldnt obtain Data");
        });
        return getData;
    };
    service.itemClicked = "";
    service.images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.png","images/Company.png"];
    
    return service;
}])

.service("apiService",function() {
    "use strict";
    this.username = "company";
    this.password = "1234";
    this.logged = "false";
});