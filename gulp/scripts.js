(function () {
  'use strict';

  var gulp    = require('gulp')
    , concat  = require('gulp-concat')
    , uglify  = require('gulp-uglify')
    , rename  = require('gulp-rename')
    , gConf   = require('./gulpConfig')
    , ngAnnotate   = require('gulp-ng-annotate')
    , angular = gConf.paths.sources.angular
    , temp    = gConf.paths.destinations.temp
    , jsDest  = gConf.paths.destinations.js;

  gulp.task('scripts', ['concat'], function () {
    return gulp.src(temp + 'all.js')
      .pipe(ngAnnotate({add: true}))
      //.pipe(uglify({mangle: true}))
      .pipe(rename('all.min.js'))
      .pipe(gulp.dest(jsDest));
  });

  gulp.task('concat', ['clean.min.js', 'clean.temp'], function () {
    return gulp.src(angular)
      .pipe(concat('all.js'))
      .pipe(gulp.dest(temp))
  } )

}());