// https://gist.github.com/sanderhahn/8595191
// REMEMBER to add a templates dependency to your angular module! 
// var app = angular.module('appname', [ ... , 'templates']);

var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    angularTemplateCache = require('gulp-angular-templatecache'),
    config = require('../config').templateCache

// Gulp task for creating template cache
gulp.task('template-cache', function() {
    return gulp
        .src(config.src)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(angularTemplateCache(config.name, config.options)) //$.angularTemplatecache('templates.js')
        .pipe(gulp.dest(config.out));
});