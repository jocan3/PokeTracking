(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .controller('TrackController', TrackController);

  /** @ngInject */
  function TrackController($timeout, $cookies, $location, database,$routeParams,pokeapi,$mdDialog) {
    var vm = this;

    vm.creationDate = 1447033409458;
    vm.User = {}; 
    vm.myTeam = $routeParams.myTeam;
    vm.foeTeam = $routeParams.foeTeam;
    validateUser();
    
      vm.clickOnPokemon = clickOnPokemon;
      vm.submit = submit;
      vm.TeamIndex =1;
      vm.NumItems = 0;

      vm.Saving = false;
      vm.Saved = false;

     vm.Team = [];

     vm.showMessage = function() {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'app/track/dialog_template.html',
          parent: angular.element(document.body),
          clickOutsideToClose:false
        });

        
      };


     function clickOnPokemon(index){
        if (vm.Team[index].order == ''){
         if(vm.TeamIndex < 5){
            vm.Team[index].order = vm.TeamIndex;
            ++vm.TeamIndex;
          }
        }else{
          --vm.TeamIndex;
          vm.Team[index].order = '';
          var i = 0;
          var j = 1;
          for (i = 0; i < vm.Team.length; ++i){
            if (vm.Team[i].order != ''){
              vm.Team[i].order = j;
              ++j;
            }
          }

        }
      }


    function loadTeam(){
        database.getTeam(vm.myTeam).then(
            function (response) {
              console.log(response.data);
              vm.Team = response.data;
              for (var i = 0; i < vm.Team.length; ++i){
                  vm.Team[i].sprite=pokeapi.getPokemonSpriteURLById(vm.Team[i].pokemon_id);
                }
              });
    }

    function validateUser(){
        if ($cookies.get('PTLoggedIn') == 'true'){
          database.login($cookies.get('PTUsername'), $cookies.get('PTPassword')).then(
            function loginSucess(response) {
              if (response.data.status == 'success'){
                vm.User.username = $cookies.get('PTUsername');
                vm.User.password = $cookies.get('PTPassword');
                loadTeam();
                return true;
              }else{
                $location.path('/login');
              }
            });
        }else{
          $location.path('/login');
        }

    }

    function submit(){
        vm.Saving = true;
        vm.showMessage();
        var selectedPokemons = ["","","",""];
        for (var i = 0; i < vm.Team.length; ++i){
          if (vm.Team[i].order != ''){
            selectedPokemons[vm.Team[i].order-1] = vm.Team[i].pokemon_id;
          }
        }

        database.insertStat(vm.User.username,vm.myTeam,vm.foeTeam,vm.Result,selectedPokemons[0],selectedPokemons[1],selectedPokemons[2],selectedPokemons[3]).then(
            function loginSucess(response) {
              if (response.data.status == 'success'){
                vm.Saving = false;
                vm.Saved = true;
                //$location.path("/");
              }
            });

    }

    function DialogController($scope, $mdDialog){
        $scope.parentScope = vm;
         $scope.closeDialog = function() {
            $mdDialog.hide();
            $location.path("/");
          };

    }


    
  }
})();
