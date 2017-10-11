angular.module('app')

  .controller('GalleryCtrl', ['$scope', '$http', 
    function($scope, $http){
      
      $scope.navHeight = '60';

      // $scope.img1Location = "./public/images/background/modern-bookshelf.jpg";
      // $scope.img1Speed = 1;

      $scope.img2Location = '';
      $scope.img2Speed = 1;

      $http.get("./app/data/images/galleries.json")
        .then(function(res){
          $scope.images = res.data.homeGallery;
          console.log($scope.images)
        });
    }]);