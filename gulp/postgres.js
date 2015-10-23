//
(function () {
  'use strict';

  var gulp = require('gulp');
  var config    = require('./gulp.config');
  var dbSrc = config.paths.sources.db;
  var buildDir = config.paths.destinations.build;

  gulp.task('copy.db', function () {
    return gulp.src(dbSrc)
      .pipe(gulp.dest(buildDir + "/postgres/provision"))
  })

})();
