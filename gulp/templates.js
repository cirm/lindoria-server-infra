(function () {
  'use strict';

  var gulp          = require('gulp')
    , config        = require('./gulp.config')
    , jade          = require('gulp-jade')
    , templateCache = require('gulp-angular-templatecache')
    , rename        = require('gulp-rename')
    , templateSrc   = config.paths.sources.templates
    , templateDest  = config.paths.destinations.angular;

  gulp.task('templates.build', ['clean.templates'], function () {
    return gulp.src(templateSrc)
      .pipe(jade())
      .pipe(templateCache({module: 'app'}))
      .pipe(rename('templates.min.js'))
      .pipe(gulp.dest(templateDest))
  });
})();
