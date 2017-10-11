var gulp = require('gulp');
var config = require('../config');


gulp.task('watch', function(){
  gulp.watch(config.sass.src, ['sass', 'browser-reload']);
  gulp.watch(config.js.src, ['javascript', 'browser-reload']);
  gulp.watch(config.angular.src, ['angular-app', 'browser-reload']);
  gulp.watch(config.templateCache.src, ['template-cache', 'angular-app', 'browser-reload']);
  
  gulp.watch(config.html.src, ['html', 'browser-reload']);
});