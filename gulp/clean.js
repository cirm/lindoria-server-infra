(function () {
  'use strict';

  var gulp        = require('gulp')
    , clean       = require('del')
    , config      = require('./gulpConfig')
    , coverage    = config.paths.destinations.coverage
    , angularDest = config.paths.destinations.angular
    , cssDest     = config.paths.destinations.css
    , build       = config.paths.destinations.build
    , temp        = config.paths.destinations.temp;

  gulp.task('clean.min.angular', function () {
    clean([angularDest + 'all.min.js']);
  });

  gulp.task('clean.min.css', function () {
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

  gulp.task('clean.all', ['clean.coverage', 'clean.temp', 'clean.min.css', 'clean.min.js'], function () {

  });

}());