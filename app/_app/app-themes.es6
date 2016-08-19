(function () {
  'use strict';

  angular
    .module('themes', [])
    .config(config);

  function config($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('grey', {
        default: '900'
      })
      .accentPalette('amber').dark();
    $mdThemingProvider.theme('yellow')
      .primaryPalette('amber', {
        default: '500'
      })
      .accentPalette('grey').dark();
    $mdThemingProvider.theme('bright')
      .primaryPalette('blue', {
        default: '700'
      })
      .accentPalette('amber')
      .backgroundPalette('grey');
  }
}());
