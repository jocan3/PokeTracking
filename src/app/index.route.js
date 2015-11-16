(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/new', {
        templateUrl: 'app/new/new.html',
        controller: 'NewController',
        controllerAs: 'new'
      })
      .when('/test', {
        templateUrl: 'app/test/test.html',
        controller: 'TestController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
