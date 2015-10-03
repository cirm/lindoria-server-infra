//(function () {
//  'use strict';
//
//  var gulp        = require('gulp')
//    , gConf       = require('./gulpConfig.js')
//    , browserSync = require('browser-sync')
//    , nodemon     = require('gulp-nodemon')
//    , angular     = gConf.paths.sources.angular
//    , js          = gConf.paths.sources.js
//    , styl        = gConf.paths.sources.stylus;
//
//  gulp.task('dev', ['devWatch', 'browser-sync']);
//
//  gulp.task('devWatch', function () {
//    gulp.watch(js, ['lint']);
//    gulp.watch(styl, ['cssMin']);
//    gulp.watch(angular, ['scripts']);
//  });
//
//  gulp.task('browser-sync', ['nodemon'], function () {
//    browserSync.init(null, {
//      proxy  : "http://localhost:8080",
//      files  : ["public/src/**/*.*"],
//      browser: "google chrome",
//      port   : 7000
//    });
//  });
//
//  gulp.task('nodemon', function (cb) {
//
//    var started = false;
//
//    return nodemon({
//      script: 'app.js'
//    }).on('start', function () {
//      // to avoid nodemon being started multiple times
//      // thanks @matthisk
//      if (!started) {
//        cb();
//        started = true;
//      }
//    });
//  });
//
//})();