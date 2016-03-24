var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = require('../paths');

/**
 * The 'watch' task set up the checks to see if any of the files listed below
 * change, and then to execute the listed tasks when they do.
 */
gulp.task('watch', function() {
    // Watch images and fonts files
    gulp.watch([paths.app.images], ['images.dev', browserSync.reload]);

    gulp.watch([paths.app.fonts], ['fonts.dev', browserSync.reload]);

    // Watch css files
    gulp.watch(paths.app.styles, ['scss', browserSync.reload]);

    // Watch js files
    gulp.watch([paths.app.ts, paths.gulpfile], ['typescript-dev', browserSync.reload]);

    // Watch html files
    gulp.watch([paths.app.html], ['htmlhint.dev', browserSync.reload]);

    gulp.watch([paths.app.i18n], ['i18n.dev', browserSync.reload]);
});
