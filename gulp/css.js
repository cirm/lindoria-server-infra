(function () {
  'use strict';

  var gulp      = require('gulp')
    , rename    = require('gulp-rename')
    , stylus    = require('gulp-stylus')
    , minifyCSS = require('gulp-minify-css')
    , config     = require('./gulp.config')
    , styl      = config.paths.sources.stylus
    , cssDest   = config.paths.destinations.css
    , temp      = config.paths.destinations.temp;

  gulp.task('css.compile', ['clean.temp'], function () {
    return gulp.src(styl)
      .pipe(stylus())
      .pipe(gulp.dest(temp));
  });
  gulp.task('css.min', ['css.compile', 'clean.css.min'], function () {
    return gulp.src(temp + '*.css')
      .pipe(rename('site.min.css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest(cssDest));
  });

}());