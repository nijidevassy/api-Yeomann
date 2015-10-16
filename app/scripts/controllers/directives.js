'use strict';
/*jslint white:true */
/*global angular */
/*global someFunction */
/*jshint latedef: nofunc */
angular
  .module('apiYeomanApp')
.directive("messages",function() {
    "use strict";
    return {
        require: '^?ngMessages',
        restrict: 'A',
        scope: true,
        template: ' <p ng-message="required">Data required.</p><p ng-message="minlength">Too short.</p><p ng-message="maxlength">Too long.</p>',
        controller: 'appCntrl'       
        };
});