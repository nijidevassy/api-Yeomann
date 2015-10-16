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
        templateUrl: 'views/message.html'         
        };
});