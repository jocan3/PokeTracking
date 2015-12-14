(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .directive('menuDir', MenuDirective);

  /** @ngInject */
  function MenuDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/menu/menu.html',
      scope: {
          creationDate: '='
      },
      controller: MenuController,
      controllerAs: 'menu',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MenuController($cookies, $mdDialog, $location) {
      var vm = this;
      vm.showLogout = $cookies.get('PTLoggedIn') == 'true';

      vm.goToHome = function(){
        $location.path("/");
      }

      vm.logout = function(){
        $cookies.remove('PTLoggedIn');
        $cookies.remove('PTPassword');
        $cookies.remove('PTUsername');
        $location.path("/login");
      }

      vm.about = function(){
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('body')))
            .clickOutsideToClose(false)
            .title('PokeTracker v1.0 - Created by: Jocan3')
            .content('Keep track of your Pokemon VGC Battles and use your statistics to get suggestions about what Pokemon and what order to use.')
            .ariaLabel('Alert Dialog About')
            .ok('Ok')
            //.targetEvent(ev)
        );
      };

      // "vm.creation" is avaible by directive option "bindToController: true"
      //vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
