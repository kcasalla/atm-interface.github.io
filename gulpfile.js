const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync').create();

function buildStyles() {
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browsersync.stream());
}

function watch() {
    browsersync.init({
        server: {
            baseDir: ['.'],
            index: ['index.html']
        },
    });

    gulp.watch('app/scss/**/*.scss', buildStyles);
    gulp.watch('**/*.html').on('change', browsersync.reload);
    gulp.watch('app/js/**/*.js', browsersync);
}

exports.buildStyles = buildStyles;
exports.watch = watch;