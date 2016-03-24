var gulp = require('gulp');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');
var cache = require('gulp-cached');
var browserSync = require('browser-sync');
var tsProject = typescript.createProject('tsconfig.json');

var paths = require('../paths');

gulp.task('tslint', function() {
    return gulp.src(paths.app.ts)
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task('typescript', ['html-ts'], function () {
    return gulp.src(paths.app.ts)
        .pipe(cache('typescript'))
        .pipe(sourcemaps.init())
        .pipe(tslint())
        .pipe(tslint.report('prose', {emitError: false}))
        .pipe(typescript(tsProject))
        //.pipe(sourcemaps.write('./maps', {includeContent: false, sourceRoot: '/app/src'}))
        .pipe(gulp.dest(paths.dev.basePath))
        .pipe(browserSync.stream());
});

gulp.task('typescript-mock', ['html-ts'], function () {
    return gulp.src(paths.app.tsMock)
        .pipe(cache('typescript'))
        .pipe(sourcemaps.init())
        .pipe(tslint())
        .pipe(tslint.report('prose', {emitError: false}))
        .pipe(typescript(tsProject))
        //.pipe(sourcemaps.write('./maps', {includeContent: false, sourceRoot: '/app/src'}))
        .pipe(gulp.dest(paths.dev.basePath))
        .pipe(browserSync.stream());
});

gulp.task('html-ts', function () {
    return gulp.src(paths.app.html)
        .pipe(gulp.dest(paths.dev.basePath))
        ;
});

