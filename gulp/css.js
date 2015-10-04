(function () {
  'use strict';

  var gulp      = require('gulp')
    , rename    = require('gulp-rename')
    , stylus    = require('gulp-stylus')
    , minifyCSS = require('gulp-minify-css')
    , config     = require('./gulpConfig')
    , styl      = config.paths.sources.stylus
    , cssDest   = config.paths.destinations.css
    , temp      = config.paths.destinations.temp;

  gulp.task('stylus', ['clean.temp'], function () {
    return gulp.src(styl)
      .pipe(stylus())
      .pipe(gulp.dest(temp));
  });
  gulp.task('cssMin', ['stylus', 'clean.min.css'], function () {
    return gulp.src(temp + '*.css')
      .pipe(rename('site.min.css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest(cssDest));
  });

}());