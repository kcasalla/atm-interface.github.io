const gulp = require('gulp');

// gulp.task('hello', async function() {
//     console.log('hello');
// });

const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
}

exports.buildStyles = buildStyles;
exports.watch = function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
}