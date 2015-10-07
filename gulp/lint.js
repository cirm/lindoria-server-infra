(function () {
  'use strict';

  var gulp   = require('gulp')
    , jshint = require('gulp-jshint')
    , stylish = require('jshint-stylish')
    , gConf  = require('./gulp.config')
    , watch  = gConf.paths.sources.watch();

  gulp.task('lint', function () {
    return gulp.src(watch)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
  });

}());