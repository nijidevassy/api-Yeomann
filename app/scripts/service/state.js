angular.module('apiYeomanApp')
.config(function ($stateProvider, $urlRouterProvider) {
    "use strict";
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('login', {
            url: "/",
            templateUrl : "views/login.html",
            controller : 'appCntrl as ap'
        })
        .state('about', {
            url: "/about",
            templateUrl: "views/about.html",
            controller : 'mainCntrl'
        })
        .state('details', {
            url: "/details",
            templateUrl : 'views/details.html',
            controller  : 'detailsCntrl as detail'
        });

});
