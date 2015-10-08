(function () {
  'use strict';

  var gulp   = require('gulp')
    , jshint = require('gulp-jshint')
    , stylish = require('jshint-stylish')
    , config  = require('./gulp.config')
    , jshintconf = require('../')
    , jshintConfig = jshintconf.jshintrc
    , watch  = config.paths.sources.watch();

  jshintConfig.lookup = false;

  gulp.task('lint', function () {
    console.log(jshintConfig);
    return gulp.src(watch)
      .pipe(jshint(jshintConfig))
      .pipe(jshint.reporter(stylish));
  });

}());