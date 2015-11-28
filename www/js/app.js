angular.module('hyviaMobileApp', ['ionic'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tabs.home', {
        url: '/home',
        views: {
          'home-tab': {
            templateUrl: 'templates/home.html',
            controller: 'HomeTabCtrl'
          }
        }
      })
      .state('tabs.facts', {
        url: '/facts',
        views: {
          'home-tab': {
            templateUrl: 'templates/facts.html'
          }
        }
      })
      .state('tabs.facts2', {
        url: '/facts2',
        views: {
          'home-tab': {
            templateUrl: 'templates/facts2.html'
          }
        }
      })
      .state('tabs.about', {
        url: '/about',
        views: {
          'about-tab': {
            templateUrl: 'templates/about.html'
          }
        }
      })
      .state('tabs.navstack', {
        url: '/navstack',
        views: {
          'about-tab': {
            templateUrl: 'templates/nav-stack.html'
          }
        }
      })
      .state('tabs.contact', {
        url: '/contact',
        views: {
          'contact-tab': {
            templateUrl: 'templates/contact.html'
          }
        }
      });


    $urlRouterProvider.otherwise('/sign-in');

  })

  .controller('SignInCtrl', function ($scope, $state) {

    $scope.signIn = function (user) {
      console.log('Sign-In', user);
      $state.go('tabs.home');
    };

  })

  .controller('HomeTabCtrl', function ($scope) {
    console.log('HomeTabCtrl');
  });
