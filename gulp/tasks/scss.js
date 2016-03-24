var gulp = require('gulp');
var globbing = require('gulp-css-globbing');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var paths = require('../paths');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('scss:dev', function () {
    return gulp.src(paths.app.styles)
        .pipe(globbing({
            extensions: ['.scss']
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({style: 'compressed', errLogToConsole: true}))
        .pipe(concat('zc.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dev.styles))
        .pipe(browserSync.stream())
       ;
});

gulp.task('scss:prod', function () {
    return gulp.src(paths.app.styles)
        .pipe(globbing({
            extensions: ['.scss']
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({style: 'compressed', errLogToConsole: true}))
        .pipe(concat('zc.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.temp.styles))
        ;
});


