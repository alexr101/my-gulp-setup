var gulp = require('gulp');

var requireDir = require('require-dir');
    requireDir('tasks', { recurse: true });
 

gulp.task('default', [
                      'html',
                      'sass',
                      // 'libsJs', // error when you use dash on libs...possible gulp bug
                      'libs',
                      'template-cache',
                      'javascript',
                      'angular-app',
                      'clean-temp', 
                      'browser-sync',
                      'watch'
                      ]);



