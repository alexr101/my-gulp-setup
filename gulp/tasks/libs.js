// Minify libraries and export to build file

var gulp = require('gulp');
    uglify = require('gulp-uglify')
    config = require('../config').libs

gulp.task('libs', function() {
  gulp.src(config.files)
  .pipe(gulp.dest(config.out));
});


