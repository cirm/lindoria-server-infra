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
    return clean([angularDest + 'all.min.js']);
  });

  gulp.task('clean.css.min', function () {
    return clean([cssDest]);
  });

  gulp.task('clean.temp', function () {
    return clean([temp]);
  });
  gulp.task('clean.build', function () {
    return clean([build])
  });

  gulp.task('clean.templates', function () {
    return clean([angularDest + 'templates.min.js'])
  });

  gulp.task('clean.node', function () {
    return clean([
      'build/**',
      '!build/ssl/**',
      '!build/ssl/**',
      '!build',
      '!build/public/**',
      '!build/node_modules/**'
    ]);
  });

  gulp.task('clean.all', ['clean.temp', 'clean.build']);

}());