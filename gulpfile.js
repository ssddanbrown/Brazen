var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');

gulp.task('sass-dev', function () {
    gulp.src('./styles/*.scss')
      .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
          browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});

gulp.task('sass', function () {
    gulp.src('./styles/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
          browsers: ['last 2 versions']
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['sass-dev']);
gulp.task('production', ['sass']);

gulp.task('watch', function() {
	livereload.listen();
  gulp.watch(['index.html']).on('change', livereload.changed);
	gulp.watch('./styles/**', ['sass-dev']);
});
