// Path settings for Gulp
var src = './../app/public/src/';
var out = './../app/public/out/';

var config = {
    js: {
      name: 'scripts.js',
      src: src + 'public/js/*.js',
      exclude: '!' + src + 'scripts/libs/*.js',
      out: out + 'js/'
    },
    angular: {
      name: 'app.js',
      src: [src + 'app/**/*.js', src + '.tmp/angular/*.js'],
      out: out
    },
    browserSync: {
      baseDir: './app/public/out',
      proxy: "localhost:8080",
      port: 3001, // needed if no proxy
    },
    cleanTemp: {
      delete: src + '.tmp'
    },
    html: {
      src: src + 'index.html',
      out: out
    },
    libs: {
      files: [
        src + 'public/libs/js/*.js',
        src + 'public/libs/css/*.css',
      ],
      out: out + 'libs/'
    },
    
    sass: {
      name: 'stylesheet',
      src: src + 'public/sass/**/*.scss',
      out: out + 'css/'
    },
    templateCache: {
        name: 'templates.js',
        src: src + 'app/**/*.html',
        out: src + '.tmp/angular/',
        options: {
            module: 'app'
        }
    },
    temp: src + '.tmp/'
};

module.exports = config