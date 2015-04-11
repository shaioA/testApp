'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'snap',
  'ngTouch'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

//.controller('View1Ctrl', [function($scope) {
app.controller("MainCtrl", function($scope){
  //default the menu to not show
  $scope.showmenu=false;

//this is the toggle function
  $scope.toggleMenu = function(){
    $scope.showmenu=($scope.showmenu) ? false : true;
  }

//}]);
});

app.directive('mySlideController', ['$swipe',
  function($swipe) {
    return {
      restrict: 'EA',
      link: function(scope, ele, attrs, ctrl) {
        var startX, pointX;
        $swipe.bind(ele, {
          'start': function(coords) {
            startX = coords.x;
            pointX = coords.y;
          },
          'move': function(coords) {
            var delta = coords.x - pointX;
// ...
          },
          'end': function(coords) {
// ...
          },
          'cancel': function(coords) {
// ...
          }
        });
      }
    }
  }]);
