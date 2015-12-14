(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .factory('database', database);

  /** @ngInject */
  function database($log, $resource, $http) {
    var apiHost = 'data/';
    //var baseURL = 'http://localhost:8080/poketracker/';
var baseURL = window.location.protocol + '//' + window.location.hostname + '/poketracker-service/';

    var service = {
      apiHost: apiHost,
      createAccount: createAccount,
      login: login,
      getTeams: getTeams,
      getTeam: getTeam,
      createTeam : createTeam,
      insertInTeam : insertInTeam,
      insertStat : insertStat
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


    function insertInTeam(teamId, pokemonId){
      return $http.get(baseURL + 'insertInTeam/'+teamId + '/' + pokemonId);  
    }

    function insertStat(username,userTeamId,foeTeamId,battleResult,pokemonId1,pokemonId2,pokemonId3,pokemonId4){
      return $http.get(baseURL + 'insertStat/'+username + '/' + userTeamId+ '/' + foeTeamId+ '/' + battleResult+ '/' + pokemonId1+ '/' + pokemonId2+ '/' + pokemonId3+ '/' + pokemonId4);  
    }

    function getTeams(username){
      return $http.get(baseURL + 'teams/'+username);
    }

    function getTeam(teamId){
      return $http.get(baseURL + 'team/'+teamId);
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
