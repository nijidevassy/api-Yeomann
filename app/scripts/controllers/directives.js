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
        require: "^myform",
        restrict: 'A',
        replace: true,
        scope: {},
        template: ' <div><p ng-message="required">Data required.</p><p ng-message="minlength">Too short.</p><p ng-message="maxlength">Too long.</p></div>'          
        };
});