'use stric';
const gulp = require('gulp');
const	watch = require('gulp-watch');
  // sourcemaps = require('gulp-sourcemaps');
const	browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const	concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const watchify = require('watchify');
const babel = require('babelify');


function theError(error){
  var type = '';//(error.plugin == 'gulp-browserify') ? 'SCRIPTS' : 'STYLUS';
  console.log('\n::::::: ERRO COMPILANDO :::::::\n');
	//console.log(chalk.red(error.message));
  console.log(error);
  console.log('\n\n::::::: AGUARDANDO CORREÇÃO ::::::::');
  this.emit('end');
}
//
// function compile(watch) {
//   var bundler = watchify(browserify('./src/*.js', { debug: true }).transform(babel));
//
//   function rebundle() {
//     bundler.bundle()
//       .on('error', theError)
//       .pipe(uglify())
//       .pipe(rename({
//         suffix: ".min",
//         extname: ".js"
//       }))
//       .pipe(buffer())
//       .pipe(sourcemaps.init({ loadMaps: true }))
//       .pipe(sourcemaps.write('./test'))
//       .pipe(gulp.dest('./dist'));
//   }
//
//   if (watch) {
//     bundler.on('update', function() {
//       console.log('-> bundling...');
//       rebundle();
//     });
//   }
//
//   rebundle();
// }
//
// function watchJS() {
//   return compile(true);
// };

gulp.task('browserify', function() {
    gulp.src('./src/*.js')
      .pipe(browserify())
      //.transform("babelify", {presets: ["es2015", "react"]})
      .pipe(gulp.dest('./test'))
      .on('error', theError)
      .pipe(uglify())
      .pipe(rename({
        suffix: ".min",
        extname: ".js"
      }))
      .pipe(gulp.dest('./dist'))
});




gulp.task('sass', function () {
  return gulp.src('./src/static/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError ))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/static/sass/**/*.scss', ['sass']);
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['browserify']);
});

gulp.task('default', ['browserify', 'watch', 'sass:watch']);
