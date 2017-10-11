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