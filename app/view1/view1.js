'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

//.controller('View1Ctrl', [function($scope) {
    .controller("View1Ctrl", function($scope, basicService){
      //default the menu to not show
      $scope.showmenu=false;

//this is the toggle function
      $scope.savePair = function(){
        $scope.showmenu=($scope.showmenu) ? false : true;
      };

        //this is the toggle function
        $scope.savePair = function(pair){
            basicService.savePair(pair).then(function(data){
                $scope.alert = data;
            },function(error){});
        };

//}]);
    });