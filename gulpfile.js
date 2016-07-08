'use strict';
var gulp = require('gulp'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create();

// Server
gulp.task('serve', function() {
    browserSync.init({
      server: "app/"
    });
    browserSync.watch('app/**/**/*.*').on('change', browserSync.reload)
});

// Default gulp task
gulp.task('default', ['serve'])