const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
}

function watch() {
    gulp.watch('app/scss/**/*.scss', buildStyles);
}

exports.buildStyles = buildStyles;
exports.watch = watch;