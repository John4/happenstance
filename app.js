var app = angular.module('happenstance', []);

app.controller('MainController', [
  '$scope',
  function($scope){
    $scope.test = 'Hello world!';
  }
]);