
(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .directive('orderDir', OrderDir);

  /** @ngInject */
  function OrderDir() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/order/order.html',
      scope: {
          creationDate: '=',
          team: '=team'
      },
      controller: OrderController,
      controllerAs: 'order',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function OrderController($cookies, $mdDialog, $location, pokeapi) {
      var vm = this;
      vm.clickOnPokemon = clickOnPokemon;
      vm.TeamIndex =1;
      vm.NumItems = 0;
      vm.Team = vm.team;
      

      function clickOnPokemon(index){
        if (vm.Team[index].order == ''){
          vm.Team[index].number = vm.TeamIndex;
          ++vm.TeamIndex;
        }else{
          --vm.TeamIndex;
          var i = 0;
          for (i = 0; i < vm.Team.length; ++i){
            if (vm.Team[i].order != ''){
              vm.Team[i].order = vm.Team[i].order - 1;
            }
          }

        }
      }


    }
  }

})();
