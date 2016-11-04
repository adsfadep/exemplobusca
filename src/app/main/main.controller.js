(function() {
  'use strict';

  angular
    .module('exemplobusca')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $http) {
    var vm = this;

    vm.resultado = 0;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1478209187281;
    vm.showToastr = showToastr;
    vm.somar = somar;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function somar() {
        $http.get('http://localhost:8080/HelloWorldWs/ws/teste/somar', {
            params: {
                num1: vm.num1,
                num2: vm.num2
            }
        })
            .success(function(result){
                vm.resultado = result;
            })
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
