'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat')

gulp.task('default', ['build']);
gulp.task('build', ['scripts']);
gulp.task('scripts', () => {
  return gulp.src([
      './bower_components/jquery/dist/jquery.min.js',
      './bower_components/electric-slide/build/electric-slide.js'
    ])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./src/build/'));
});
