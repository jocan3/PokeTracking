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
      createAccount: createAccount,
      login: login,
      getTeams: getTeams,
      createTeam : createTeam,
      insertInTeam : insertInTeam

      //getTeams: getTeams,
      //getStatistics: getStatistics
    };

    return service;

    function insertInTeam(teamId, pokemonId){
      return $http.get(baseURL + 'insertInTeam/'+teamId + '/' + pokemonId);  
    }

    function createTeam(username){
      console.log('database create team');
      console.log(baseURL + 'createTeam/'+username);
      return $http.get(baseURL + 'createTeam/'+username);
    }


    function getTeams(username){
      return $http.get(baseURL + 'teams/'+username);
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
