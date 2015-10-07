(function () {
  'use strict';

  var gulp      = require('gulp')
    , install   = require('gulp-install')
    , config    = require('./gulp.config')
    , serverSrc = config.paths.repos.server
    , buildDir  = config.paths.destinations.build;

  gulp.task('copy.node', function () {
    return gulp.src(serverSrc + 'src/js/**')
      .pipe(gulp.dest(buildDir))
  });

  gulp.task('copy.ssl', function () {
    return gulp.src('./ssl/*')
      .pipe(gulp.dest(buildDir + '/ssl/'))
  });

  gulp.task('node.deps', ['copy.node'], function () {
    return gulp.src(buildDir + '/package.json')
      .pipe(install())
  });

  gulp.task('node.build', ['clean.node', 'copy.node', 'node.deps']);
  gulp.task('node.update', ['clean.node', 'copy.node']);

})();