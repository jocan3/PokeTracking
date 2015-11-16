(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .controller('NewController', NewController);

  /** @ngInject */
  function NewController($timeout, $cookies, $location, database) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1447033409458;
    vm.User = {}; 
    validateUser();
    

    vm.createTeam = function(team){
      console.log(team);
      database.createTeam(vm.User.username).then(
        function createSuccess(response){
          var teamId = response.data.team_id;
          for (var i=0; i < team.length; ++i){
              database.insertInTeam(teamId, team[i].pokemon_id);
          } 

          console.log(vm.User.username);
          $location.path('/');          
        }
      );
    } 
   

    function validateUser(){
        if ($cookies.get('PTLoggedIn') == 'true'){
          database.login($cookies.get('PTUsername'), $cookies.get('PTPassword')).then(
            function loginSucess(response) {
              if (response.data.status == 'success'){
                vm.User.username = $cookies.get('PTUsername');
                vm.User.password = $cookies.get('PTPassword');
                return true;
              }else{
                $location.path('/login');
              }
            });
        }else{
          $location.path('/login');
        }

    }


    
  }
})();
