(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.status="";
  $scope.colour="black";
  $scope.borderColour="black";
  $scope.checkDishes = function () {
    if($scope.dishes=="")
    {
      $scope.status= "Please enter data first";
      $scope.colour="red";
      $scope.borderColour="red";
      return;
    }
    var noDishes=$scope.dishes.split(",").length;
    if(noDishes>3){
      $scope.status= "Too much!";
      $scope.colour="green";
      $scope.borderColour="green";
    }
    else {
      $scope.status= "Enjoy!";
      $scope.colour="green";
      $scope.borderColour="green";
    }
  };
};

})();
