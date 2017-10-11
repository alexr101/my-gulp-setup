var navigationCtrl = function($scope, $location){
  $scope.isActive = function(path){
    return path === $location.path();
  }
}

angular.module('app')
  .controller('NavigationCtrl',['$scope', '$location', navigationCtrl])