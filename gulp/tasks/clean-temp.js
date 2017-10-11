var gulp = require('gulp');
var del = require('del');
var config = require('../config').cleanTemp

gulp.task('clean-temp', function () {
  return del(config.delete);
});

