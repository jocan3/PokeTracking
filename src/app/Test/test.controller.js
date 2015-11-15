(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .controller('TestController', TestController);

  /** @ngInject */
  function TestController($timeout, webDevTec, toastr, database) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1447033409458;
    vm.showToastr = showToastr;
    vm.User = {}; 

   

    activate();
    getUser('jocan3','0623');

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


    function activate() {
      
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
