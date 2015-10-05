(function () {
  'use strict';

  var gulp          = require('gulp')
    , config        = require('./gulpConfig')
    , templateSrc   = config.paths.sources.templates
    , templateDest  = config.paths.destinations.angular
    , buildDir      = config.paths.destinations.build
    , serverSrc     = config.paths.sources.js
    , serverRepo    = config.paths.repos.server
    , angularRepo   = config.paths.repos.web
    , install       = require('gulp-install')
    , jade          = require('gulp-jade')
    , rename        = require('gulp-rename')
    , templateCache = require('gulp-angular-templatecache');

  gulp.task('templates', ['clean.templates'], function () {
    return gulp.src(templateSrc)
      .pipe(jade())
      .pipe(templateCache())
      .pipe(rename('templates.min.js'))
      .pipe(gulp.dest(templateDest))
  });

  gulp.task('buildServer', function () {
    return gulp.src(serverSrc, {
      base: serverRepo + 'src/js/'
    })
      .pipe(gulp.dest(buildDir))
  });

  gulp.task('serverDeps', ['buildServer'], function () {
    return gulp.src(buildDir + '/package.json')
      .pipe(install())
  });
  gulp.task('angularDeps', function () {
    return gulp.src(angularRepo + 'bower.json')
      .pipe(install())
  });

  gulp.task('devBuild', ['clean.build', 'serverDeps', 'scripts', 'angularDeps', 'cssMin'])

})();
