'use strict';

var gulp = require('gulp'),
  nunjucksRender = require('gulp-nunjucks-render'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
  clean = require('gulp-clean');

// server connect
gulp.task('connect', function() {
	connect.server({
		root: 'build',
		livereload: true
	});
});

// html
gulp.task('html', function () {
  gulp.src('src/*.html')
  .pipe(nunjucksRender({
    path: 'src'
  }))
  .pipe(gulp.dest('build/'))
  .pipe(connect.reload());
});

// js
gulp.task('js', function () {
  gulp.src('src/js/*.js')
  // .pipe(rigger())
  .pipe(gulp.dest('build/js'))
  .pipe(connect.reload());
});


// clean
gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

// watch
gulp.task('watch', function () {
	gulp.watch('src/*.html', ['html'])
  gulp.watch('src/layouts/*.html', ['html'])
	gulp.watch('src/js/*.js', ['js'])
})

// default
gulp.task('default', ['connect', 'html', 'js', 'watch']);