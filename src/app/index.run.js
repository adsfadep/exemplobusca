(function() {
  'use strict';

  angular
    .module('exemplobusca')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
