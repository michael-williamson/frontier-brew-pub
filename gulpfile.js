
'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass-main', function () {
  return gulp.src('./scss/style.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});  

gulp.task('sass-contact', function () {
  return gulp.src('./scss/contact.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});  



 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass-main','sass-contact']);
});  