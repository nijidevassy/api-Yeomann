'use strict';

/**
 * @ngdoc function
 * @name apiYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apiYeomanApp
 */
angular.module('apiYeomanApp')
    .controller('mainCntrl', ["myService", 'apiService', '$scope', '$location', function (myService, apiService, $scope, $location) {

        (function init(vm) {
            $scope.$watch(function () { return $location.path(); }, function (newValue, oldValue) {
                if (apiService.logged === "false" && newValue !== '/') {
                    $location.path('/');
                }
            });
    
            angular.extend(vm, {
                go: go
            });
            
            vm.detail = [];
            myService.details("http://nodejs-qbjsstudy.rhcloud.com/api/get_shop_data");
            vm.data = myService;

            vm.detail = vm.data.data;
            function go(path, index) {
                $location.path(path);
                myService.itemClicked = index;
            }
        }(this));
    }]);
  
