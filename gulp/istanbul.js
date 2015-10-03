(function () {
  'use strict';

  var gulp     = require('gulp')
    , istanbul = require('gulp-istanbul')
    , mocha    = require('gulp-mocha')
    , gConf    = require('./gulpConfig')
    , coverage = gConf.paths.destinations.coverage
    , tests    = gConf.paths.sources.tests
    , js       = gConf.paths.sources.js;

  gulp.task('test', ['clean.coverage'], function (cb) {
    gulp.src(js)
      .pipe(istanbul({includeUntested: true}))
      .pipe(istanbul.hookRequire())
      .on('finish', function () {
        gulp.src(tests)
          .pipe(mocha({
            reporter: 'spec'
          }))
          .on('error', cb)
          .pipe(istanbul.writeReports({
            dir       : coverage,
            reporters : ['lcov'],
            reportOpts: {
              dir: coverage
            }
          }))
          .on('end', cb);
      });
  });

}());