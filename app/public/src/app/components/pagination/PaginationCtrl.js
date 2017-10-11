angular.module('app')

.controller('PaginationCtrl', function($scope) {
  $scope.filteredItems = [];
  $scope.currentPage = 1;
    $scope.viewby = 10;

  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5;
  
  $scope.init = function(itemsArr) {
    $scope.items = [];

    for (var i=0;i<=itemsArr.length-1;i++) {
      $scope.items.push( itemsArr[i] );
    }
  };

  $scope.init([1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16]); 
  
  $scope.numPages = function () {
    return Math.ceil($scope.items.length / $scope.itemsPerPage);
  };

  $scope.setItemsPerPage = function(num){
    $scope.itemsPerPage = num;
    $scope.currentPage = 1;
  }

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };
  
  $scope.$watch('currentPage + itemsPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.itemsPerPage)
    var end = begin + $scope.itemsPerPage;
    
    $scope.filteredItems = $scope.items.slice(begin, end);
  });
});
