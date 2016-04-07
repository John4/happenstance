var app = angular.module('happenstance', []);

app.controller('MainController', [
  '$scope',
  function($scope){
    $scope.events = [
      { name: 'event 1', startTime: 1, endTime: 4},
      { name: 'event 2', startTime: 8, endTime: 12},
      { name: 'event 3', startTime: 3, endTime: 6},
      { name: 'event 4', startTime: 12, endTime: 1},
      { name: 'event 5', startTime: 9, endTime: 10}
    ];
  }
]);