var del = require('del') ;
var gulp = require('gulp');
var util = require('gulp-util');
var paths = require('../paths');

const LOG = util.log;
const COLORS = util.colors;

gulp.task('clean:dev',  function (cb) {
    const files = [].concat(paths.dev.basePath, paths.temp.basePath);
    LOG('Cleaning: ' + COLORS.blue(files));

    return del(files, cb);
});

gulp.task('clean:prod', function (cb) {
    const files = [].concat(paths.dev.basePath, paths.prod.basePath, paths.temp.basePath);
    LOG('Cleaning: ' + COLORS.blue(files));

    return del(files, cb);
});

