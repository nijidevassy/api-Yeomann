'use strict';

/**
 * @ngdoc function
 * @name apiYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apiYeomanApp
 */
angular
  .module('apiYeomanApp')
.controller('detailsCntrl', ["myService", 'apiService', '$scope', '$location', function (myService, apiService, $scope, $location) {
    (function init(vm) {
        angular.extend(vm, {
            current:myService.itemClicked,
            companyName:myService.data
        });
    
$scope.$watch(function() { return $location.path(); },                      function(newValue, oldValue){  
    if (apiService.logged === "false" && newValue != '/'){  
            $location.path('/');  
    }  

    else {
    vm.name = vm.companyName[vm.current].details.company;
    vm.head = "COMPANY PROFILE";
    vm.id = vm.companyName[vm.current].id;
    vm.title = vm.companyName[vm.current].title;
    vm.cost =  vm.companyName[vm.current].cost;
    vm.stockleft = vm.companyName[vm.current].details.stockLeft;
    vm.buylimit = vm.companyName[vm.current].details.buyLimit;
    vm.summary = vm.companyName[vm.current].details.summery;
    }
        });
    }(this));
}]);
