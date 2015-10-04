(function () {
  'use strict';

  var gulp        = require('gulp')
    , concat      = require('gulp-concat')
    , uglify      = require('gulp-uglify')
    , rename      = require('gulp-rename')
    , conf        = require('./gulpConfig')
    , ngAnnotate  = require('gulp-ng-annotate')
    , angularSrc  = conf.paths.sources.angular
    , temp        = conf.paths.destinations.temp
    , angularDest = conf.paths.destinations.angular;

  gulp.task('scripts', ['concat'], function () {
    return gulp.src([temp + 'all.js'])
      .pipe(ngAnnotate({add: true}))
      //.pipe(uglify({mangle: true}))
      .pipe(rename('all.min.js'))
      .pipe(gulp.dest(angularDest));
  });

  gulp.task('concat', ['clean.min.angular', 'clean.temp', 'templates'], function () {
    return gulp.src(angularSrc)
      .pipe(concat('all.js'))
      .pipe(gulp.dest(temp))
  })

}());