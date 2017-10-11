// Concatenate and Minify JS files
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('../config').angular

gulp.task('angular-app', function() {
  gulp.src(config.src)
  .pipe(sourcemaps.init())
  // .pipe(uglify())
  .pipe(concat(config.name))
  .pipe(sourcemaps.write('maps'))
  .pipe(gulp.dest(config.out));
});