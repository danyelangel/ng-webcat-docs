(function () {
  'use strict';

  angular
    .module('ngWebcatDocs')
    .component('appEl', {
      templateUrl: '_app/app.html',
      transclude: true
    });
}());
