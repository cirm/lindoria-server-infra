(function () {
  'use strict';

  var gulp = require('gulp');

  gulp.task('build.dev', ['clean.build', 'node.build', 'angular.build', 'templates.build', 'css.min', 'copy.ssl']);
  gulp.task('update.dev', ['node.update', 'angular.update', 'templates.build', 'css.min']);

})();
