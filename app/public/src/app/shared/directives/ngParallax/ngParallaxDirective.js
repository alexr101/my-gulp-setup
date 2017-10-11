// 'use strict';
// if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
//   module.exports = 'ngParallax';
// }
angular.module('app')

.directive('ngParallax', [
  '$window',
  '$timeout',
  'IsMobile',
  function ($window, $timeout, IsMobile) {
    return {
        restrict: 'AE',
        scope:{
          pattern: '=',
          speed: '=',
          height: '=',
          width: '='
        },
        link: function(scope, elem, attr) {

          function updateImg(){
            var bgObj = elem[0];
                bgObj.style.height = scope.height + 'px' || "100%";
                bgObj.style.width = scope.width + 'px' || '100%';
                bgObj.style.margin = "0 auto";
                bgObj.style.position = "relative";
                bgObj.style.background = "url(" + scope.pattern + ")";
                bgObj.style.backgroundAttachment = 'fixed';
                bgObj.style.backgroundRepeat = "repeat";
                bgObj.style.backgroundSize = "cover";
            var isMobile = IsMobile.verify();
            var isMobileWidth = IsMobile.width();
          }

          scope.$watchGroup(['pattern', 'height', 'width'], function(newVal) {
            if(newVal) updateImg();
          });

          function execute(){
            if(typeof pattern !== 'undefined' && !isMobileWidth){
              var scrollTop = (document.documentElement !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
              var speed = (scrollTop / scope.speed);
              
              if(isMobile) 
                speed = speed * .10

              if(speed == 0)
                bgObj.style.backgroundPosition = '0% '+ 0 + '%';
              else
                bgObj.style.backgroundPosition = '0% '+ speed + '%';
            }
          }

          // for mobile
          window.document.addEventListener("touchmove", function(){
              execute();
          });

          // for browsers
          window.document.addEventListener("scroll", function() {
              execute();
          });

          updateImg();
          execute();
        }
    };
  }
]);