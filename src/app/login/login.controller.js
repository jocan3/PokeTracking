(function() {
  'use strict';

  angular
    .module('pokeTracking')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($timeout, $cookies, database, $location) {
    var vm = this;

    vm.awesomeThings = [];
    vm.username = '';
    vm.password = '';
    vm.resultCreate = {
        status : '',
        msg : ''
    };

    $cookies.remove('PTLoggedIn');
    $cookies.remove('PTPassword');
    $cookies.remove('PTUsername');

console.log($cookies.get('PTLoggedIn'));

    vm.resultLogin = {
        status : '',
        msg : ''
    };



    vm.createAccount = function (){
      console.log('creating account');
      database.createAccount(vm.username, vm.password).then(createAccountSucess)
        .catch(createAccountFailed);

        function createAccountSucess(response) {
          console.log('account success');
          vm.resultCreate = response.data;
          console.log(vm.resultCreate);

          if (vm.resultCreate.status == 'success'){
            $cookies.put('PTLoggedIn','true');
            $cookies.put('PTPassword',vm.password);
            $cookies.put('PTUsername',vm.username);
            $location.path("/");
          }
        }

        function createAccountFailed(error) {
          console.log('failed creating account' + error);
          vm.resultCreate.msg = error;
        }


    }

    vm.signIn = function (){
      console.log('login');
      database.login(vm.username, vm.password).then(loginSucess)
        .catch(loginFailed);

        function loginSucess(response) {
          console.log('account success');
          vm.resultLogin = response.data;
          console.log(vm.resultLogin);

          if (vm.resultLogin.status == 'success'){
            $cookies.put('PTLoggedIn','true');
            $cookies.put('PTPassword',vm.password);
            $cookies.put('PTUsername',vm.username);
            $location.path("/");
          }
        }

        function loginFailed(error) {
          console.log('failed login' + error);
          vm.resultLogin.msg = error;
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
