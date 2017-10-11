var app = angular.module("app", ["ui.router" /*, "ui.bootstrap"*/]);
angular.module('app')
  
  // Gets rid of unwanted prefixes in routes
  .config(['$locationProvider', function($locationProvider){
    $locationProvider.hashPrefix('');
  }])

  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/gallery");

      var gallery = {
        name:'gallery',
        url: '/gallery',
        views: {
          '': {
            templateUrl: 'app/components/gallery/galleryView.html',
            controller: 'GalleryCtrl'
          },
          'images@gallery': { // You can find the reference to this inside the galleryView.html file
            templateUrl: 'app/components/gallery/partials/partial-gallery-images.html',
            controller: 'GalleryCtrl'
          },
          'sideMenu@gallery': {
            templateUrl: 'app/components/sideMenu/sideMenuView.html',
          },
          'newsletter@gallery': {
            templateUrl: 'app/components/newsletter/newsletterView.html'
          },
          'artShows@gallery': {
            templateUrl: 'app/components/artShows/artShows.html',
            controller: 'ArtShowsCtrl'
          }
        }
      }

      var about = {
        name: 'about',
        url: '/about',
        templateUrl: 'app/components/about/aboutView.html',
        controller: 'AboutCtrl'
      }

      var giftCards = {
        name: 'giftCards',
        url: '/gift-cards',
        templateUrl: 'app/components/giftCards/giftCardsView.html',
        controller: 'GiftCardCtrl'
      }

      var contact = {
        name: 'contact',
        url: '/contact',
        views: {
          '':{
            templateUrl: 'app/components/contact/contactView.html',
            controller: 'ContactCtrl'
          },

        },
      }

      var privacyPolicy = {
        name: 'privacyPolicy',
        url: '/privacyPolicy',
        templateUrl: 'app/components/privacyPolicy/privacyPolicyView.html',
        controller: 'PrivacyPolicyCtrl'
      }

      var auth = {
        name: 'auth',
        url: '/auth',
        params: {
          login: false,
          register: false
        },
        templateUrl: 'app/components/auth/authView.html',
        controller: 'AuthCtrl'
      }

      $stateProvider.state(gallery);
      $stateProvider.state(about);
      $stateProvider.state(giftCards);
      $stateProvider.state(contact);
      $stateProvider.state(privacyPolicy);
      $stateProvider.state(auth);
  }]);
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
angular.module('app')

.controller('ArtShowsCtrl', ['$scope', '$http', function($scope, $http){
  $scope.pageTitle = 'Art Shows';

  $http.get('./app/data/gallery.json')
    .then(function(res){
      $scope.images = res.images;

  })
}])
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
var contactCtrl = function($scope){
  $scope.header = "Contact Us";
  $scope.instructions = "Please let us know if you need anything by using our contact form below"
};

angular.module('app')

  .controller('ContactCtrl', ['$scope', contactCtrl]);

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
angular.module('app')

  .controller('GiftCardCtrl', ['$scope', '$http',
    function($scope, $http){
      
      $scope.name = "Alex";
    }]);
var navigationCtrl = function($scope, $location){
  $scope.isActive = function(path){
    return path === $location.path();
  }
}

angular.module('app')
  .controller('NavigationCtrl',['$scope', '$location', navigationCtrl])

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


var sideMenuCtrl = function($scope){
  // logic
}

angular.module('app')

.controller('SideMenuCtrl', ['$scope', sideMenuCtrl])
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
angular.module('app')

.factory('Auth', function(){

  var auth = function(){};

  auth.state = 'login';

  auth.toggle = function(){
    var loginForm = document.getElementsByClassName('login-form')[0];
    var registerForm = document.getElementsByClassName('register-form')[0];

    if(loginForm.style.display === 'none'){
      loginForm.style.display = 'inline-block';
      registerForm.style.display = 'none';
      auth.state = 'login';
    } else {
      registerForm.style.display = 'inline-block';
      loginForm.style.display = 'none';
      auth.state = 'register';
    }
  }

  return auth;
})
angular.module('app')

// It's a singleton
.service('TestService', function(){
  this.name = 'test';
})
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
angular.module('app')

.directive('contactEnvelope', function(){
  return {
    restrict: 'E',
    scope: {},
    replace: true,
    templateUrl: './app/components/contact/partials/contactEnvelope.html',
    link: function(scope, element, attrs){

      var $thanks = angular.element(document.getElementsByClassName('thanks'));
      var $reset = angular.element(document.getElementsByClassName('reset'));
      var $sendMe = angular.element(document.getElementsByClassName('send_me'));
      var $contactMe = angular.element(document.getElementsByClassName('contact_me'));
      var $contact = angular.element(document.getElementsByClassName('contact'));
      var $contactForm = angular.element(document.getElementsByClassName('contact_form'));
      var $topFlap = angular.element(document.getElementsByClassName('top_flap'));

      $thanks.hide();
      $sendMe.hide();

      $contactMe.on('click', openEnvelope);
      $reset.on('click', closeEnvelope);
      $sendMe.on('click', closeEnvelope);

      function openEnvelope(){
        $contact.animate({marginTop:'80px'}, 300);
        $topFlap.removeClass('close_sesame');
        $contactForm.delay(500).queue(function(){
          $contactForm.addClass('open_form').dequeue();
        })
        angular.element(this).fadeOut(300);
        $sendMe.fadeIn(300);
      }

      function closeEnvelope(){
        $contact.delay(800).animate({marginTop:'0px'}, 300);
        $topFlap.delay(800).queue(function(){
          angular.element(this).addClass('close_sesame').dequeue();
        });
        $contactForm.removeClass('open_form');
        $sendMe.fadeOut(300);
        $contactMe.fadeIn(300);
      }
    }
  }
})

// $('.reset,.send_me').on('click',function(){
//   $('.contact').delay(800).animate({marginTop:'0px'},300);
//   $('.top_flap').delay(800).queue(function(){$(this).addClass('close_sesame').dequeue();});
//   $('.contact_form').removeClass('open_form');
//   $('.send_me').fadeOut(300);
//   $('.contact_me').fadeIn(300);
// });

// $('.thanks, .send_me').hide();

// $('.contact_me').on('click',function(){
//   $('.contact').animate({marginTop:'80px'},300);
//   $('.top_flap').removeClass('close_sesame');
//   $('.contact_form').delay(500).queue(function(){$('.contact_form').addClass('open_form').dequeue();});
//   $(this).fadeOut(300);
//   $('.send_me').fadeIn(300);
// });
angular.module('app')

.directive('loremIpsum', function(){
  return {
    restrict: 'AE',
    link: function(scope, element, attrs){
      element[0].innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    }
  }
})
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
function setClassWhenAtTop($window, $timeout) {
    var $win = angular.element($window);
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var topClass = attrs.setClassWhenAtTop,
                topPadding = parseInt(attrs.paddingWhenAtTop, 10),
                allParents = element.parents(),
                $parent = angular.element(allParents[0]),
                $grandParent = angular.element(allParents[1]), //skip ui-view
                windowHeight = $win.height(),
                grandParentPadding =  parseInt($grandParent.css('padding-bottom'), 10),
                elementWidth,
                grandParentHeight,
                offsetTop;

                $timeout(function(){ 
                  grandParentHeight = $grandParent.height();
                }, 100);

            // Do an IS MOBILE check!

            $win.on("scroll resize", function () {
                // dynamic page layout so have to recalculate every time;
                // take offset of parent because after the element gets fixed
                // it now has a different offset from the top
                    elementWidth = $parent.css('width'),
                    offsetTop = $parent.offset().top - topPadding;
                var eOffsetToWindow = offsetTop - $win.scrollTop();
                    offsetBottom = topPadding + grandParentHeight - grandParentPadding - $parent.height();
 
                if ($win.scrollTop() >= offsetTop && $win.scrollTop() <= offsetBottom) {
                    element.addClass(topClass);
                    element.width(elementWidth);
                    element.css('padding-top', topPadding + 'px');
                    $parent.height(element.height());
                } else if ($win.scrollTop() > offsetBottom) {
                    element.removeClass(topClass);
                    element.css('padding-top', (offsetBottom - grandParentPadding) + 'px');
                } else {
                    element.removeClass(topClass);
                    $parent.css('height', null);
                    element.css('padding-top', '');
                }
            });
        }
    };
}

angular.module('app')
.directive('setClassWhenAtTop', ['$window','$timeout', setClassWhenAtTop]);
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
angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('components/about/aboutView.html','<div class="container padding-bot-md"><div class="jumbotron"><h1>{{aboutUs}}</h1><p>{{content}}</p></div><div><p lorem-ipsum></p><p lorem-ipsum></p><p lorem-ipsum></p><p lorem-ipsum></p><p lorem-ipsum></p></div></div><div ng-repeat="img in parallaxImages"><div class="box"><div ng-parallax pattern="img.url" speed="img.speed" height="img.height"></div></div></div>');
$templateCache.put('components/artShows/artShows.html','<h2>{{ pageTitle }}</h2><div class="row"><div ng-repeat="image in images"></div></div>');
$templateCache.put('components/auth/authView.html','<div background-img="{{imgUrl}}"><div class="login-page container"><div class="form border-sm"><form class="login-form"><h2>Welcome Back!</h2><input type="text" placeholder="username"> <input type="password" placeholder="password"> <button>login</button><p class="message">Not registered? <a toggle-auth>Create an account</a></p></form><form class="register-form"><h2>Signup to {{ companyName }} for Free!</h2><input type="text" placeholder="name"> <input type="password" placeholder="password"> <input type="text" placeholder="email address"> <button>create</button><p class="message">Already registered? <a toggle-auth>Sign In</a></p></form></div></div></div>');
$templateCache.put('components/contact/contactView.html','<div class="container padding-ver-md"><!--<div class="jumbotron">\n    <h1>{{header}}</h1>\n    <p>{{instructions}}</p>\n  </div>--><contact-envelope></contact-envelope></div>');
$templateCache.put('components/gallery/galleryView.html','<div class="container"><div class="padding-ver-md"><div class="left-60"><div class="jumbotron"><h1>Page Title</h1><p lorem-ipsum></p><!--<h2>Our Book Gallery</h2>\n        <p>Book lovers, where do you keep your books? If you have a private library, congrats; but if you don\u2019t, probably you\u2019re keeping them on the bookshelves. Here are 32 really cool bookshelves which you\u2019d love to have for organizing your reading materials.</p>--></div><div ui-view="images"></div></div><div class="right-35"><div set-class-when-at-top="fix-to-top" padding-when-at-top="{{navHeight}}"><div ui-view="newsletter"></div><div ui-view="images"></div></div></div></div><div ui-view="artShows"></div></div>');
$templateCache.put('components/giftCards/giftCardsView.html','<div class="container"><div class="jumbotron"><h1>Gift Cards</h1><p>gf</p></div><div><p lorem-ipsum></p><p lorem-ipsum></p><p lorem-ipsum></p><p lorem-ipsum></p><p lorem-ipsum></p><p lorem-ipsum></p><p lorem-ipsum></p><div ui-view="images"></div></div></div>');
$templateCache.put('components/newsletter/newsletterView.html','<div id="newsletter" class="col-xs-12 xs-hidden border-md rounded margin-ver-md container"><div class="bottom-buffer"><h3>Join our newsletter!</h3><form action=""><div class="form-group"><label for="email">Email</label><input id="email" class="form-control" type="email"></div><button type="submit" class="btn btn-primary text-right">Join</button></form></div></div>');
$templateCache.put('components/privacyPolicy/privacyPolicyView.html','<div class="container"><div class="jumbotron"><h1>Privacy Policy</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div><a href="#terms1">Terms1</a> <a href="#terms2">Terms2</a> <a href="#terms3">Terms3</a> <a href="#terms4">Terms4</a> <a href="#terms5">Terms5</a> <a href="#terms6">Terms6</a> <a href="#terms7">Terms7</a> <a href="#terms8">Terms8</a><p id="terms1">Terms1</p><p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p><p id="terms2">Terms2</p><p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p><p id="terms3">Terms3</p><p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p><p id="terms4">Terms4</p><p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p><p id="terms5">Terms5</p><p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p><p id="terms6">Terms6</p><p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p><p id="terms7">Terms7</p><p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p><p id="terms8">Terms8</p><p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p></div>');
$templateCache.put('components/sideMenu/sideMenuView.html','<div class="container"><div ui-view="newsletter"></div></div>');
$templateCache.put('components/contact/partials/contactEnvelope.html','<div class="envelope"><div class="contact_form"><span class="reset">x</span><form name="contact" action="POST" id="say_hi"><fieldset><section class="form_part"><label for="name" id="name_label">Name</label><input type="text" name="name" id="name" size="30" value="" class="text-input"></section><section class="form_part"><label for="email" id="email_label">Email</label><input type="text" name="email" id="email" size="30" value="" class="text-input"></section><section class="form_part"><label for="message" id="message_label">Message</label><textarea class="message" name="message" id="message"></textarea></section></fieldset></form></div><p class="contact_me">CONTACT</p><p class="send_me">SEND</p><p class="thanks">THANKS</p><span class="top_flap close_sesame"></span> <span class="side_flaps"></span> <span class="bottom_flap"></span></div>');
$templateCache.put('components/gallery/partials/partial-gallery-images.html','<div class="row"><div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 top-buffer" ng-repeat="image in images"><!--<div>--> <img class="gallery-img" ng-src="{{image}}" alt=""><!--</div>\t--></div><imagegallery></imagegallery></div>');
$templateCache.put('components/giftCards/partials/partial-cards.html','<div class="row"><div class="col-lg-4 col-md-6 col-sm-6" ng-repeat="image in images"><div class="thumbnail"><img ng-src="{{ image.url }}" alt=""></div></div></div>');}]);
//# sourceMappingURL=maps/app.js.map
