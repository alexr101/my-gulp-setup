angular.module('app')

.controller('ArtShowsCtrl', ['$scope', '$http', function($scope, $http){
  $scope.pageTitle = 'Art Shows';

  $http.get('./app/data/gallery.json')
    .then(function(res){
      $scope.images = res.images;

  })
}])