(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .factory('database', database);

  /** @ngInject */
  function database($log, $resource, $http) {
    var apiHost = 'data/';
    var baseURL = 'http://localhost:8080/poketracker/';

    var service = {
      apiHost: apiHost,
      getUser: getUser,
      createAccount: createAccount,
      login: login
      //getTeams: getTeams,
      //getStatistics: getStatistics
    };

    return service;

    function getUser(username,password) {
      return $http.get(apiHost + '/'+username+'_profile.txt');
    }

    function createAccount(username, password){
      console.log('creating account in db: ' + baseURL + 'signup');
      return $http.post(baseURL + 'signup', {username: username, password: password})
    }

    function login(username, password){
      return $http.post(baseURL + 'login', {username: username, password: password})
    }


  }
})();
