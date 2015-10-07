(function () {
  'use strict';

  var gulp        = require('gulp')
    , install     = require('gulp-install')
    , ngAnnotate  = require('gulp-ng-annotate')
    , uglify      = require('gulp-uglify')
    , rename      = require('gulp-rename')
    , concat      = require('gulp-concat')
    , config      = require('./gulp.config')
    , angularSrc  = config.paths.sources.angular
    , angularRepo = config.paths.repos.web
    , temp        = config.paths.destinations.temp
    , angularDest = config.paths.destinations.angular;

  gulp.task('angular.deps', function () {
    return gulp.src(angularRepo + 'bower.json')
      .pipe(install())
  });

  gulp.task('angular.min', ['angular.concat'], function () {
    return gulp.src([temp + 'all.js'])
      .pipe(ngAnnotate({add: true}))
      //.pipe(uglify({mangle: true}))
      .pipe(rename('all.min.js'))
      .pipe(gulp.dest(angularDest));
  });

  gulp.task('angular.concat', ['clean.angular.min', 'clean.temp'], function () {
    return gulp.src(angularSrc)
      .pipe(concat('all.js'))
      .pipe(gulp.dest(temp))
  });

  gulp.task('angular.build', ['clean.angular.min', 'clean.temp', 'angular.min', 'angular.deps']);
  gulp.task('angular.update', ['clean.angular.min', 'clean.temp', 'angular.min'])


})();