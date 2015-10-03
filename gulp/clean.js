(function () {
  'use strict';

  var gulp     = require('gulp')
    , clean    = require('del')
    , gConf    = require('./gulpConfig')
    , coverage = gConf.paths.destinations.coverage
    , jsOut    = gConf.paths.destinations.js
    , cssOut   = gConf.paths.destinations.css
    , temp     = gConf.paths.destinations.temp;

  gulp.task('clean.coverage', function (cb) {
    clean([
      coverage
    ], cb);
  });

  gulp.task('clean.min.js', function (cb) {
    clean([
      jsOut
    ], cb);
  });

  gulp.task('clean.min.css', function (cb) {
    clean([
      cssOut
    ], cb);
  });

  gulp.task('clean.temp', function (cb) {
    clean([
      temp
    ], cb);
  });

  gulp.task('clean.all', ['clean.coverage', 'clean.temp', 'clean.min.css', 'clean.min.js'], function () {

  });

}());