var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglifycss = require('gulp-uglifycss');
 
gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("styles/style.min.css"))
    .pipe(cssmin())
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('compiled/'));
});