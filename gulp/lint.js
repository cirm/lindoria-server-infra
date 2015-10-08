(function () {
  'use strict';

  var gulp         = require('gulp')
    , jshint       = require('gulp-jshint')
    , stylish      = require('jshint-stylish')
    , config       = require('./gulp.config')
    , JSONpackage  = require('./jshint.config.js')
    , jshintConfig = JSONpackage.config
    , watch        = config.paths.sources.watch();

  gulp.task('lint', function () {
    return gulp.src(watch)
      .pipe(jshint(jshintConfig))
      .pipe(jshint.reporter(stylish));
  });

}());