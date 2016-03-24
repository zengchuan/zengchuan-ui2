var gulp = require('gulp');
var rename = require('gulp-rename');
var filter = require('gulp-filter');
var flatten = require('gulp-flatten');
var paths = require('../paths');

gulp.task('copyIndex:dev', function () {
    return gulp.src(paths.app.indexDev)
        .pipe(rename('index.html'))
        .pipe(gulp.dest(paths.dev.basePath));
});

gulp.task('copyIndex:mock', function () {
    return gulp.src(paths.app.indexMock)
        .pipe(rename('index.html'))
        .pipe(gulp.dest(paths.dev.basePath));
});

gulp.task('copyIndex:prod', function () {
    return gulp.src(paths.app.indexProd)
        .pipe(rename('index.html'))
        .pipe(gulp.dest(paths.prod.basePath));
});

gulp.task('copyImage:prod', function () {
    return gulp.src(paths.app.images)
        .pipe(gulp.dest(paths.prod.basePath));
});

gulp.task('copyFont:prod', function () {
    return gulp.src(paths.app.fonts)
        //.pipe(filter('**/*.{eot,svg,ttf,woff}'))
        .pipe(flatten())
        .pipe(gulp.dest(paths.prod.fonts));
});

gulp.task('copyJsMap:prod', function () {
    return gulp.src(paths.temp.scripts + 'build.js.map')
        .pipe(gulp.dest(paths.prod.scripts));
});

gulp.task('copyI18n:prod', function () {
    return gulp.src(paths.app.i18n)
        .pipe(gulp.dest(paths.prod.i18n));
});
