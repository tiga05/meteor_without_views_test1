import angular from 'angular';
import angularMeteor from 'angular-meteor';
//import ngAnimate from 'angular-animate';
//import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
//import chartjs from 'chart.js';
//import ngRoute from 'angular-route';
import angularCharts from 'angular-chart.js';
import '../node_modules/angular-material/angular-material.css';
import '../client/main.css';
angular.module('dasProjekt', [
    angularMeteor,
    //ngAnimate,
    //ngAria,
    ngMaterial,
   angularCharts,
   // ngRoute
    uiRouter
//    chartjs

])

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: 'test'

            });

    })


    .config(function ($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('orange')
            .accentPalette('deep-orange')
            .warnPalette('red');
        /*     .primaryPalette('brown')
         .accentPalette('green')
         .warnPalette('red')
         .backgroundPalette('teal', {
         'default': '50',
         'hue-1': '100',
         'hue-2': '200',
         'hue-3': '300'

         });*/
    })

.controller('mainController', function ($scope, $mdSidenav, $log) {


    $scope.toggleLeft = buildToggler('left');

    function buildToggler(navID) {
        return function () {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }
    }//buildtoggler


    $scope.close = function () {
        $mdSidenav('left').close();
    }});
