(function () {
  'use strict';

  var gulp = require('gulp')
    , jshint = require('gulp-jshint')
    , gConf = require('./gulpConfig')
    , watch = gConf.paths.sources.watch();

  gulp.task('lint', function() {
    return gulp.src(watch)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
  });
  
}());