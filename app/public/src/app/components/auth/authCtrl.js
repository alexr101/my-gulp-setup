var authCtrl = function($scope, $stateParams, $http, Auth){
  $scope.header = 'Login';
  $scope.companyName = 'Avid Reader'

  $http.get('./app/data/images/auth.json')
    .then(function(res){
      $scope.imgUrl = res.data.background;
    });
  
  $scope.imgUrl = './public/assets/images/background/modern-bookshelf.jpg';

  $scope.register = $stateParams.register;
  $scope.login = $stateParams.login;
  var initialView = 'login';

  if($scope.register && initialView == 'login') Auth.toggle();
  else if ($scope.register && initialView == 'register') Auth.toggle();
}

angular.module('app')
  .controller('AuthCtrl', ['$scope', '$stateParams', '$http', 'Auth', authCtrl]);