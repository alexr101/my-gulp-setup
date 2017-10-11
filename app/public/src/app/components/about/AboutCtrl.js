angular.module('app')

  .controller('AboutCtrl', ['$scope', '$http', 
    function($scope, $http){
      
      $scope.aboutUs = 'About us';
      $scope.content = 'we are a unique company that creates custom bookshelves for the avid book lover!';

      
      $http.get("./app/data/images/about.json")
        .then(function(res){
          var parallaxImages = res.data.parallaxImages
          $scope.parallaxImages = res.data.parallaxImages;
          for(var i = 0; i < parallaxImages.length; i++){
            var img = parallaxImages[i];
            console.log(i)
            $scope["img" + i] = {};
            $scope["img" + i].pattern = img.url;
            $scope["img" + i].speed = img.speed;
            $scope["img" + i].height = img.height;
          }
        });     
  

      // $http.get("./app/data/images/about.json")
      //   .then(function(res){
          
      //     var parallaxImages = res.data.parallaxImages

      //     for(var i = 0; i < parallaxImages.length; i++){
      //       var img = parallaxImages[i];

      //       $scope["myPattern" + i] = img.url;
      //       $scope["img" + i] = {};
      //       $scope["img" + i].pattern = img.url;
      //       $scope["img" + i].speed = img.speed;
      //       $scope["img" + i].height = img.height;
      //     }      
      //   });
      
      // $scope.img1 = {};
      // $scope.img1.pattern = './public/assets/images/background/modern-bookshelf.jpg';
      // $scope.img1.speed = 10;
      // $scope.img1.height = 700;


      // $scope.myPattern = "./public/assets/images/background/modern-bookshelf.jpg";
      // $scope.myPattern2 = "./public/assets/images/background/bookshelf-2.jpg";
    }]);