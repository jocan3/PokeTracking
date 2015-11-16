
(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .directive('addDir', AddDirective);

  /** @ngInject */
  function AddDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/add/add.html',
      scope: {
          creationDate: '=',
          submitFunction: '=submitFunction'
      },
      controller: AddController,
      controllerAs: 'add',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function AddController($cookies, $mdDialog, $location, pokeapi) {
      var vm = this;
      vm.querySearch = querySearch;
      vm.selectedItemChange = selectedItemChange;
      vm.clickOnPokemon = clickOnPokemon;
      vm.submit = submit;
      vm.TeamIndex =0;
      vm.NumItems = 0;
      vm.Team = [
        {
          name: "",
          sprite: "app/components/images/logo/red.png"
        },
        {
          name: "",
          sprite: "app/components/images/logo/red.png"
        },
        {
          name: "",
          sprite: "app/components/images/logo/red.png"
        },
        {
          name: "",
          sprite: "app/components/images/logo/red.png"
        },
        {
          name: "",
          sprite: "app/components/images/logo/red.png"
        },
        {
          name: "",
          sprite: "app/components/images/logo/red.png"
        }
      ];

      getAllPokemon();

      function submit(){
        if (vm.submitFunction != undefined && typeof vm.submitFunction === "function") {
                      vm.submitFunction(vm.Team);
        }

      }

      function selectedItemChange(item){
          vm.TeamIndex = -1;
          for (var i = 0; i < 6 && vm.TeamIndex < 0; ++i){
              if (vm.Team[i].name == ''){
                vm.TeamIndex = i;
              }
          }

          if (item != undefined && vm.TeamIndex > -1){
              console.log(item);
              pokeapi.getPokemon(item.resource_uri).then(
                function (response) {

                  vm.Team[vm.TeamIndex].name = item.name;
                  vm.Team[vm.TeamIndex].pokemon_id = response.data.national_id;
                  console.log(response.data);

                  pokeapi.getSprite(response.data.sprites[0].resource_uri).then(
                      function (response){
                          console.log(response.data);
                          vm.Team[vm.TeamIndex].sprite = pokeapi.apiHost + response.data.image;
                      }
                  );
                  ++vm.NumItems;
                  console.log(vm.Team)
                });
          }
        

      }

      function clickOnPokemon(index){
        if (vm.Team[index].name != ''){
          vm.Team[index].name = '';
          vm.Team[index].sprite = "app/components/images/logo/red.png";
          --vm.NumItems;
        }
      }

      function getAllPokemon(){
          pokeapi.getAllPokemon().then(
            function (response) {
              vm.AllPokemon = response.data.objects[0];
             // console.log(vm.AllPokemon)
            });
      }

      function querySearch (query) {
     //   console.log(vm.AllPokemon.pokemon);

        var results = query ? vm.AllPokemon.pokemon.filter( createFilterFor(query) ) : vm.AllPokemon.pokemon,
            deferred;
        return results;
      }

      function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
        return function filterFn(pokemon) {
        //  console.log('pokemon ');
         // console.log(pokemon);
          return (pokemon.name.indexOf(lowercaseQuery) === 0);
        };
      }


    }
  }

})();
