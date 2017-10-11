angular.module('app')

.service('IsMobile', function(){
  this.verify = function(){
    return( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      );
  }

  this.width = function(){
    return document.documentElement.clientWidth <= 768;
  }
})