angular.module('hyviaMobileApp')

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('signin', {
        url: '/sign-in',
        templateUrl: 'modules/login/views/sign-in.html',
        controller: 'SignInCtrl'
      })
      .state('signup', {
        url: '/sign-up',
        templateUrl: 'modules/login/views/sign-up.html',
        controller: 'RegisterCtrl'
      })
      .state('forgotpassword', {
        url: '/forgot-password',
        templateUrl: 'templates/forgot-password.html'
      })

    $urlRouterProvider.otherwise('/sign-in');

  });
