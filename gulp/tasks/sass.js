// Convert Sass to CSS, create a sourcemap and minify.

var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config').sass;

gulp.task('sass', function() {
  gulp.src(config.src) 
  .pipe(sass({style: 'expanded'}))
    .on('error', gulpUtil.log)
  .pipe(sourcemaps.init())
  .pipe(cleanCSS())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.out));
});;