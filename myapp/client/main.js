import angular from 'angular';
import angularMeteor from 'angular-meteor';
import nganimate from 'angular-animate';
import ngaria from 'angular-aria';
import ngmaterial from 'angular-material';
//import chartjs from 'chart.js';
import angularcharts from 'angular-chart.js';
import '../node_modules/angular-material/angular-material.css';
import '../client/main.css';
angular.module('socially', [
    angularMeteor,
    nganimate,
    ngaria,
    ngmaterial,
   angularcharts,
//    chartjs

])

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

    .controller('View1Ctrl', ['$scope', '$interval', function ($scope, $interval) {
        $scope.test1="blablabla";
        $scope.cardRow = [
            {name: 'Drilling Heat', color: 'white', value: 0},
            {name: 'Drilling Speed', color: 'white', value: 0},
            {name: 'Milling Heat', color: 'white', value: 0},
            {name: 'Milling Speed', color: 'white', value: 0}
        ];
        $scope.type = ['bar','line','pie','doughnut','radar'];
        $scope.chartRow = [
            {
                name: 'Chart1',
                type: 'bar',
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                series: ['Series A'],
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                datasetOverride: [{yAxisID: 'y-axis-1'}],
                options: {
                    animation: false,
                    scales: {
                        yAxes: [
                            {
                                id: 'y-axis-1',
                                type: 'linear',
                                display: true,
                                position: 'left'

                            }]
                    }
                }
            },
            {
                name: 'Chart2',
                type: 'line',
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                series: ['Series A'],
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                datasetOverride: [{yAxisID: 'y-axis-1'}],
                options: {
                    animation: false,
                    scales: {
                        yAxes: [
                            {
                                id: 'y-axis-1',
                                type: 'linear',
                                display: true,
                                position: 'left'

                            }]
                    }
                }
            }
            //  {name: 'Chart1',descr:'irgendein Text 3'},
            //  {name: 'Wert x',descr:'blaaaa'}
        ];

        function update() {
            for (var i = 0; i < $scope.cardRow.length; i++) {
                $scope.cardRow[i].value = Math.round((Math.random() * 10) * 10);
                var value = $scope.cardRow[i].value;
                switch (true) {
                    case (value > 80):
                        $scope.cardRow[i].color = 'red';
                        break;
                    case (value > 60):
                        $scope.cardRow[i].color = 'orange';
                        break;
                    case (value > 40):
                        $scope.cardRow[i].color = 'yellow';
                        break;
                    default:
                        $scope.cardRow[i].color = 'green';
                        break;
                }
            }
            for (var y = 0; y < $scope.chartRow.length; y++) {
                for (var z = 0; z < $scope.chartRow[y].data.length; z++) {
                    $scope.chartRow[y].data[z] = $scope.chartRow[y].data[z + 1];
                }
                $scope.chartRow[y].data[z - 1] = Math.round((Math.random() * 10) * 10);
            }
        }

        $interval(update, 1000);
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

        //the following is NOT WORKING!
        /*$scope.colours=[{ // default
         fillColor: "rgba(224, 108, 112, 1)",
         strokeColor: "rgba(207,100,103,1)",
         pointColor: "rgba(220,220,220,1)",
         pointStrokeColor: "#fff",
         pointHighlightFill: "#fff",
         pointHighlightStroke: "rgba(151,187,205,0.8)"
         }];*/
    }]);