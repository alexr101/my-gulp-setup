// Concatenate and Minify JS files
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('../config').js

gulp.task('javascript', function() {

  console.log(config)
  gulp.src([
    config.src,
    config.exclude])
  .pipe(sourcemaps.init())
  // .pipe(uglify())
  .pipe(concat(config.name))
  .pipe(sourcemaps.write('maps'))
  .pipe(gulp.dest(config.out));
});