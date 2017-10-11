var gulp = require('gulp'),
    browserSync = require('browser-sync').create()
    config = require('../config').browserSync

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: config.baseDir
        },
        proxy: config.proxy
    });
});

gulp.task("browser-reload", function(done){
    browserSync.reload();
    done();
})
