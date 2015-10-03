(function () {
  'use strict';

  var gulp    = require('gulp')
    , gConf   = require('./gulpConfig')
    , js      = gConf.paths.sources.js
    , tests   = gConf.paths.sources.tests
    , styl    = gConf.paths.sources.stylus
    , angular = gConf.paths.sources.angular;

  gulp.task('watch', function () {
    gulp.watch(js, ['lint', 'test']);
    gulp.watch(styl, ['cssMin']);
    gulp.watch(angular, ['scripts']);
    gulp.watch(tests, ['test']);
  });

}());