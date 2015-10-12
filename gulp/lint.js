(function () {
  'use strict';

  var gulp         = require('gulp')
    , jshint       = require('gulp-jshint')
    , stylish      = require('jshint-stylish')
    , config       = require('./gulp.config')
    , JSONpackage  = require('./jshint.config.js')
    , angularRules = JSONpackage.angular
    , angularSrc   = config.paths.sources.angular
    , nodeSrc      = config.paths.sources.js
    , nodeRules    = JSONpackage.nodejs;

  gulp.task('angular.lint', function () {
    return gulp.src(angularSrc)
      .pipe(jshint(angularRules))
      .pipe(jshint.reporter(stylish));
  });

  gulp.task('node.lint', function () {
    return gulp.src(nodeSrc)
      .pipe(jshint(nodeRules))
      .pipe(jshint.reporter(stylish));
  });

  gulp.task('lint', ['node.lint', 'angular.lint']);

}());