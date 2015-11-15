(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig,$mdThemingProvider) {
    // Enable log
     $mdThemingProvider.theme('altTheme');
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
