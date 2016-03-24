var Builder = require('systemjs-builder');
var paths = require('../paths');
var gulp = require('gulp');

gulp.task('bundle', ['typescript'], function (cb) {
    var builder = new Builder();

    builder.loadConfig('./jspm.conf.js')
        .then(function() {
            builder.buildStatic(paths.dev.basePath + 'zc/core/boot/zc-bootstrap-prod', paths.temp.scripts + 'build.js', { sourceMaps: true })
                .then(function() {
                    return cb();
                })
                .catch(function(ex) {
                    cb(ex);
                });
        });
});



