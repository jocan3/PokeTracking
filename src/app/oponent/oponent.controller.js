(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .controller('OponentController', OponentController);

  /** @ngInject */
  function OponentController($timeout, $cookies, $location, database,$routeParams) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1447033409458;
    vm.User = {}; 
    vm.MyTeam = $routeParams.myTeam;
    validateUser();
    

    vm.createTeam = function(team){
      console.log(team);
      database.createTeam(undefined).then(
        function createSuccess(response){
          var teamId = response.data.team_id;
          for (var i=0; i < team.length; ++i){
              database.insertInTeam(teamId, team[i].pokemon_id);
          } 

          console.log(vm.User.username);
          $location.path('/track/'+vm.MyTeam+'/'+teamId);          
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
