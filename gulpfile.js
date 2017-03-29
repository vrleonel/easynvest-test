'use strict';
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserify = require('gulp-browserify'),
  uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
  rename = require('gulp-rename');

function theError(error){
  var type = '';//(error.plugin == 'gulp-browserify') ? 'SCRIPTS' : 'STYLUS';
  console.log('\n::::::: ERRO COMPILANDO :::::::\n');
	//console.log(chalk.red(error.message));
  console.log(error);
  console.log('\n\n::::::: AGUARDANDO CORREÇÃO ::::::::');
  this.emit('end');
}

gulp.task('browserify', function() {
    gulp.src('./src/*.js')
      .pipe(browserify())
      .on('error', theError)
      .pipe(uglify())
      .pipe(rename({
        suffix: ".min",
        extname: ".js"
      }))
      .pipe(gulp.dest('./dist'))
});


//
// var sass = require('gulp-sass');
//
// gulp.task('sass', function () {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });
//
// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['browserify']);
});

gulp.task('default', ['browserify', 'watch']);
