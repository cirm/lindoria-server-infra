(function () {
    'use strict';

    var gulp = require('gulp')
        , config = require('./gulpConfig')
        , templateSrc = config.paths.sources.templates
        , tempDir = config.paths.destinations.temp
        , buildDir = config.paths.destinations.build
        , serverSrc = config.paths.folders.server
        , install = require('gulp-install')
        , jade = require('gulp-jade')
        , templateCache = require('gulp-angular-templatecache');

    gulp.task('templates', function () {
        gulp.src(templateSrc)
            .pipe(jade())
            .pipe(gulp.dest(tempDir))
    });

    gulp.task('templateCache', ['templates'], function (){
       return gulp.src(tempDir)
           .pipe(templateCache())
           .pipe(gulp.dest(buildDir))
    });

    gulp.task('buildServer', function() {
        return gulp.src(serverSrc)
            .pipe(gulp.dest(buildDir))
    });

    gulp.task('serverDeps', function() {
        return gulp.src(buildDir + 'js/package.json')
            .pipe(install())
    })

})();
