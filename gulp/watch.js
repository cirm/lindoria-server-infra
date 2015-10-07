(function () {
  'use strict';

  var gulp    = require('gulp')
    , gConf   = require('./gulp.config')
    , js      = gConf.paths.sources.js
    , css    = gConf.paths.sources.stylus
    , angular = gConf.paths.sources.angular;

  gulp.task('watch', function () {
    gulp.watch(js, ['lint', 'node.update']);
    gulp.watch(css, ['css.min']);
    gulp.watch(angular, ['lint', 'angular.update']);
  });

}());