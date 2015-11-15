(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $cookies, $location, database) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1447033409458;
    vm.User = {}; 
    validateUser();

   

    vm.Teams = [{
        "team_id" : "1",
        "team" : [
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/24.png", "name" : "Arbok"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/24.png", "name" : "Arbok"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"}
        ]}
      ,
      {
        "team_id" : "2",
        "team" : [
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/24.png", "name" : "Arbok"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/24.png", "name" : "Arbok"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"}
        ]},
        {
        "team_id" : "3",
        "team" : [
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/24.png", "name" : "Arbok"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/24.png", "name" : "Arbok"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"}
        ]},
        {
        "team_id" : "4",
        "team" : [
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/24.png", "name" : "Arbok"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/24.png", "name" : "Arbok"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"}
        ]},
        {
        "team_id" : "5",
        "team" : [
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/24.png", "name" : "Arbok"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/24.png", "name" : "Arbok"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"}
        ]},
        {
        "team_id" : "6",
        "team" : [
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/24.png", "name" : "Arbok"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"},
           { "sprite" : "http://pokeapi.co/media/img/24.png", "name" : "Arbok"},
           { "sprite" : "http://pokeapi.co/media/img/1383571573.78.png", "name" : "Bulbasaur"}
        ]}

    ];

    vm.selectTeam = function(team_id){
      vm.SelectedTeam = team_id;
      console.log(vm.SelectedTeam);

    }

    function validateUser(){
        if ($cookies.get('PTLoggedIn') == 'true'){
          database.login($cookies.get('PTUsername'), $cookies.get('PTPassword')).then(
            function loginSucess(response) {
              if (response.data.status == 'success'){
                return true;
              }else{
                $location.path('/login');
              }
            });
        }else{
          $location.path('/login');
        }

    }


    function getUser(username, password){
       database.getUser(username,password).then(getUserSucess)
        .catch(getUserFailed);

      function getUserSucess(response) {
        vm.User = response.data;
      }

      function getUserFailed(error) {
//        $log.error('Error retrieving users.\n' + angular.toJson(error.data, true));
      }
    }


    
  }
})();
