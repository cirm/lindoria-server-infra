(function () {
  'use strict';

  module.exports = {
    paths: {
      repos       : {
        server: '../lindoria-server-app/',
        web   : '../lindoria-web-ui/'
      },
      sources     : {
        templates: '../lindoria-web-ui/src/js/**/*.jade',
        js       : ['../lindoria-server-app/src/js/*', '../lindoria-server-app/src/js/**/*'],
        stylus : '../lindoria-web-ui/src/css/site.styl',
        angular  : ['../lindoria-web-ui/src/js/app.module.js',
                    '../lindoria-web-ui/src/js/*.js',
                    '../lindoria-web-ui/src/js/**/*.js'],
        watch    : function () {
          return this.js.concat(this.angular, this.tests);
        }

      },
      destinations: {
        temp   : './temp/',
        build  : './build/',
        css    : './build/public/css/',
        angular: './build/public/js/'
      }


    }
  };

}());