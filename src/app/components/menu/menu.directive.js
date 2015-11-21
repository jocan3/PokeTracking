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

      // "vm.creation" is avaible by directive option "bindToController: true"
      //vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
