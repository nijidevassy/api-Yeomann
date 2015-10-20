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

.controller('appCntrl', ['$scope', '$location','apiService', function($scope, $location, apiService) {
    (function init(vm) {
        function login() {
        if (vm.username === apiService.username  && vm.password === apiService.password) {
            apiService.logged = "true";
            $location.path('/about');
        } else {
            vm.msg = "failed to authenticate";
        }
        };
        
        angular.extend(vm, {
            login:login,
            logout:logout 
        });
        
        function logout () {
            apiService.logged = "false";
            return $location.path('/');
        }  
    }(this));
}]);

