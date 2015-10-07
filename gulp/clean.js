(function () {
  'use strict';

  var gulp        = require('gulp')
    , clean       = require('del')
    , config      = require('./gulp.config')
    , angularDest = config.paths.destinations.angular
    , cssDest     = config.paths.destinations.css
    , build       = config.paths.destinations.build
    , temp        = config.paths.destinations.temp;

  gulp.task('clean.angular.min', function () {
    clean([angularDest + 'all.min.js']);
  });

  gulp.task('clean.css.min', function () {
    clean([cssDest]);
  });

  gulp.task('clean.temp', function () {
    clean([temp]);
  });
  gulp.task('clean.build', function () {
    clean([build])
  });

  gulp.task('clean.templates', function () {
    clean([angularDest + 'templates.min.js'])
  });

  gulp.task('clean.node', function () {
    clean(['build/**', '!build/ssl/**', '!build/ssl/**', '!build', '!build/public/**', '!build/node_modules/**']);
  });

  gulp.task('clean.all', ['clean.temp', 'clean.build'], function () {

  });

}());