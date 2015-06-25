var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    gulp.src('./styles/*.scss')
      .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});

gulp.task('default', ['sass']);

gulp.task('watch', function() {
	livereload.listen();
  gulp.watch(['index.html']).on('change', livereload.changed);
	gulp.watch('./styles/**', ['sass']);
});
