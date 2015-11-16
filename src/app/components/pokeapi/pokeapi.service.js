(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .factory('pokeapi', pokeapi);

  /** @ngInject */
  function pokeapi($log, $resource, $http) {
    var apiHost = 'http://pokeapi.co/';
    var baseURL = 'http://pokeapi.co/api/v1/';

    var service = {
      apiHost: apiHost,
      getAllPokemon : getAllPokemon,
      getPokemon : getPokemon,
      getSprite: getSprite,
      getPokemonSpriteURLById : getPokemonSpriteURLById
    };

    return service;



    function getAllPokemon() {
      return $http.get(baseURL + 'pokedex/');
    }

    function getPokemon(uri){
      return $http.get(apiHost + uri); 
    }

    function getPokemonSpriteURLById(id){
      return apiHost + 'media/img/' + id + '.png'; 
    }

    function getSprite(uri){
      return $http.get(apiHost + uri);
    }
  

  }
})();
