(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $cookies, $location, database, pokeapi,$mdDialog) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1447033409458;
    vm.User = {}; 
    validateUser();

   

    vm.Teams = [];

    vm.showMessage = function() {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('.mainContent')))
        .clickOutsideToClose(false)
        .title('No team has been selected!')
        .content('Please click on one of your teams before start tracking.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        //.targetEvent(ev)
    );
  };


    function loadTeams(){
        database.getTeams(vm.User.username).then(
            function (response) {
              vm.Teams = response.data;
              for (var i = 0; i < vm.Teams.length; ++i){
                var team = vm.Teams[i];
                console.log(team);
                console.log(team.length);
                for (var j = 0; j < team.length; ++j){
                  team[j].sprite=pokeapi.getPokemonSpriteURLById(team[j].pokemon_id);
                }
              }
              console.log(vm.Teams);

            });
    }

    vm.selectTeam = function(team_id){
      vm.SelectedTeam = team_id;
      console.log(vm.SelectedTeam);

    }

    vm.addNewTeam = function(){
      $location.path("/new");
    }

    vm.startTracking = function(){
      if (vm.SelectedTeam == undefined){
        vm.showMessage();
      }else{
        $location.path("/oponent/"+ vm.SelectedTeam);
      }
    }

    function validateUser(){
        if ($cookies.get('PTLoggedIn') == 'true'){
          database.login($cookies.get('PTUsername'), $cookies.get('PTPassword')).then(
            function loginSucess(response) {
              if (response.data.status == 'success'){
                vm.User.username = $cookies.get('PTUsername');
                vm.User.password = $cookies.get('PTPassword');
                loadTeams();
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
