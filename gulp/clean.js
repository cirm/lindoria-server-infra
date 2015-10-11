(function () {
  'use strict';

  var gulp        = require('gulp')
    , clean       = require('del')
    , config      = require('./gulp.config')
    , angularDest = config.paths.destinations.angular
    , cssDest     = config.paths.destinations.css
    , build       = config.paths.destinations.build
    , temp        = config.paths.destinations.temp;

  gulp.task('clean.angular.min', function (cb) {
    clean([angularDest + 'all.min.js'], cb);
  });

  gulp.task('clean.css.min', function (cb) {
    clean([cssDest], cb);
  });

  gulp.task('clean.temp', function (cb) {
    clean([temp], cb);
  });
  gulp.task('clean.build', function (cb) {
    clean([build], cb)
  });

  gulp.task('clean.templates', function (cb) {
    clean([angularDest + 'templates.min.js'], cb)
  });

  gulp.task('clean.node', function (cb) {
    clean(['build/**', '!build/ssl/**', '!build/ssl/**', '!build', '!build/public/**', '!build/node_modules/**'], cb);
  });

  gulp.task('clean.all', ['clean.temp', 'clean.build']);

}());