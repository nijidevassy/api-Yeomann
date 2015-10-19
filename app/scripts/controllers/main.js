'use strict';

/**
 * @ngdoc function
 * @name apiYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apiYeomanApp
 */
angular.module('apiYeomanApp')
.controller('mainCntrl', ["myService", 'apiService','$scope', '$location', function (myService, apiService, $scope, $location) {

    "use strict";
    $scope.$watch(function() { return $location.path(); }, function(newValue, oldValue){  
    if (apiService.logged === "false" && newValue != '/'){  
            $location.path('/');  
    }  
    });
    
    
    $scope.detail = [];
    myService.details("http://nodejs-qbjsstudy.rhcloud.com/api/get_shop_data");
    $scope.data = myService;
    
    $scope.detail = $scope.data.data;
    $scope.go = function (path, index) {
        $location.path(path);
        myService.itemClicked = index;
    };

}]);
  
