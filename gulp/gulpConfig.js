(function () {
  'use strict';

  module.exports = {
    paths: {
      sources     : {
        stylus : '/src/css/site.styl',
        js     : ['/app/**/*.js', 'app.js'],
        tools  : ['gulpfile.js', './gulp/*.js'],
        angular: ['/src/js/*.module.js', '/src/js/*.js', '/src/js/**/*.js'],
        tests  : './tests/app_tests/**/*.spec.js',
        watch  : function () {
          return this.js.concat(this.angular, this.tests);
        }

      },
      destinations: {
        css     : './dist/css/',
        js      : './dist/js/',
        temp    : './temp/',
        coverage: './coverage',
        build : './build/'
      },
      folders : {
        server: '../lindoria-server-app/src/*/*',
        web: '../lindoria-web-ui'
      }

    }
  };

}());