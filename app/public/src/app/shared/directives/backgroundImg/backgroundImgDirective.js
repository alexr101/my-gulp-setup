angular.module('app')

.directive('backgroundImg', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      var imgUrl = 'url(' + attrs.backgroundImg + ')';

      element.css({
        'background': 'linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), ' + imgUrl,
        'background-position': 'center'
      });
    }
  }
})