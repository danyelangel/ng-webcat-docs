(function () {
  'use strict';
  class Controller {
    constructor($sitemap, $state) {
      this.$sitemap = $sitemap;
      this.route = $state.go;
    }
  }
  angular
    .module('components.nav', [])
    .component('navEl', {
      templateUrl: '_components/nav/nav.html',
      controller: Controller
    });
}());
