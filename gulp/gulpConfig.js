(function () {
  'use strict';

  module.exports = {
    paths: {
      sources     : {
        stylus : './public/src/css/site.styl',
        js     : ['./app/**/*.js', 'app.js'],
        tools  : ['gulpfile.js', './gulp/*.js'],
        angular: ['./public/src/js/*.module.js', './public/src/js/*.js', './public/src/js/**/*.js'],
        tests  : './tests/app_tests/**/*.spec.js',
        watch  : function () {
          return this.js.concat(this.angular, this.tests);
        }

      },
      destinations: {
        css     : './public/dist/css/',
        js      : './public/dist/js/',
        temp    : './temp/',
        coverage: './coverage'
      }

    }
  };

}());