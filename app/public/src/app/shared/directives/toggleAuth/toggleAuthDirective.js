angular.module('app')

.directive('toggleAuth',['Auth', function(Auth){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      
      element.on('click', function(){
        Auth.toggle();
      })
      
    }
  }

}])