var paths = require('../paths');
var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var filter = require('gulp-filter');
var browserSync = require('browser-sync');
/**
 * The 'htmlhint' task defines the rules of our hinter as well as which files we
 * should check. It helps to detect errors and potential problems in our
 * HTML code.
 */
gulp.task('htmlhint.dev', function () {
    return gulp.src([paths.app.html])
        //.pipe(htmlhint('./gulp/tasks/.htmlhintrc'))
        //.pipe(htmlhint.reporter())
        //.pipe(htmlhint.failReporter())
        .pipe(browserSync.stream())
        ;
});

/**
 * The 'fonts' task copies fonts to `build/dist` directory.
 */
gulp.task('fonts.dev', function () {
    return gulp.src(paths.app.fonts)
        .pipe(browserSync.stream())
        ;
});

/**
 * The 'images' task minifies and copies images to `build/dist` directory.
 */
gulp.task('images.dev', function () {
    return gulp.src(paths.app.images)
        .pipe(browserSync.stream())
        ;
});

gulp.task('i18n.dev', function () {
    return gulp.src([paths.app.i18n])
        .pipe(browserSync.stream())
        ;
});
