var contactCtrl = function($scope){
  $scope.header = "Contact Us";
  $scope.instructions = "Please let us know if you need anything by using our contact form below"
};

angular.module('app')

  .controller('ContactCtrl', ['$scope', contactCtrl]);
