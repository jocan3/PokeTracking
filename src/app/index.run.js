(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
