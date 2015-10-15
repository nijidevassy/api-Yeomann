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

.controller('appCntrl', ['$scope', '$location','apiService', function ($scope, $location, apiService) {
    "use strict";
    $scope.login = function () {
        if ($scope.username === apiService.username  && $scope.password === apiService.password) {
            apiService.logged = "true";
            $location.path('/about');
        } else {
            $scope.msg = "failed to authenticate";
        }   
    };
   
}]);
