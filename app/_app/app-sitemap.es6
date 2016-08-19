(function () {
  'use strict';
  let $sitemap = {
    0: {
      title: 'Getting Started',
      route: 'getting-started',
      children: {
        0: {
          title: 'Project Setup',
          route: 'project-setup'
        },
        1: {
          title: 'Firebase Setup',
          route: 'firebase-setup'
        }
      }
    },
    1: {
      title: 'Core',
      route: 'core',
      children: {
        0: {
          title: 'Firedux',
          route: 'firedux'
        }
      }
    },
    2: {
      title: 'Components',
      route: 'components',
      children: {
        0: {
          title: 'Auth',
          route: 'auth'
        },
        1: {
          title: 'Collapse',
          route: 'collapse'
        },
        2: {
          title: 'List',
          route: 'list'
        },
        3: {
          title: 'Loader',
          route: 'loader'
        },
        4: {
          title: 'Media',
          route: 'media'
        },
        5: {
          title: 'Settings',
          route: 'settings'
        },
        6: {
          title: 'Social Links',
          route: 'social-links'
        }
      }
    },
    3: {
      title: 'Services',
      route: 'services',
      children: {
        0: {
          title: 'Auth',
          route: 'auth'
        },
        1: {
          title: 'Dialog',
          route: 'dialog'
        },
        2: {
          title: 'Lang',
          route: 'lang'
        },
        3: {
          title: 'Storage',
          route: 'storage'
        }
      }
    },
    4: {
      title: 'Server',
      route: 'server',
      children: {
        0: {
          title: 'Firebase Functions',
          route: 'firebase-functions'
        },
        1: {
          title: 'Google App Engine (PHP)',
          route: 'app-engine'
        }
      }
    }
  };
  angular
    .module('sitemap', [])
    .constant('$sitemap', $sitemap);
  function camelize(str) {
    return str.replace(/-([a-z])/g, function (m, w) {
      return w.toUpperCase();
    });
  }
  angular
    .module('routes', []);
  angular.forEach($sitemap, function (section) {
    angular.forEach(section.children, function (page) {
      console.log(`${section.route}.${page.route}`);
      angular
        .module('routes')
        .component(camelize(`${section.route}-${page.route}`), {
          templateUrl: `_routes/${section.route}/${page.route}/${page.route}.html`
        });
    });
  });
  angular
    .module('routes')
    .config(function ($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider.state(`page`, {
        url: `/p/:section/:page`,
        templateProvider: function ($stateParams) {
          return `<${$stateParams.section}-${$stateParams.page}></${$stateParams.section}-${$stateParams.page}>`;
        }
      });
    });
}());
