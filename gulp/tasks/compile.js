var moment = require('moment');
var gulp = require('gulp');
var header = require('gulp-header');
var paths = require('../paths');
var util = require('gulp-util');
var inject = require('gulp-inject');
var bytediff = require('gulp-bytediff');
var usemin = require('gulp-usemin');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var size = require('gulp-size');
var rename = require('gulp-rename');
var pkg = require('../../package.json');
var runSequence = require('run-sequence').use(gulp);

var formatPercent = function(num, precision){
    return (num*100).toFixed(precision);
}

var bytediffFormatter = function (data) {
    var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
    return console.log(data.fileName + ' went from ' +
    (data.startSize / 1000).toFixed(2) + ' kB to ' + (data.endSize / 1000).toFixed(2) + ' kB' +
    ' and is ' + formatPercent(1-data.percent, 2) + '%' + difference);
}

var banner = function(pkgs){
    return util.template(
        '/**\n' +
        ' * <%= pkgs.description %>\n' +
        ' * @version v<%= pkgs.version %> - <%= today %>\n' +
        ' * @author <%= pkgs.author.name %>\n' +
        ' * @copyright <%= year %>(c) <%= pkgs.author.name %>\n' +
        ' * @license <%= pkgs.license.type %>, <%= pkgs.license.url %>\n' +
        ' */\n', {file: '', pkgs: pkgs, today: moment(new Date()).format('D/MM/YYYY'), year: new Date().toISOString().substr(0, 4)});
}


/**
 * The 'compile' task compile all js, css and html files.
 *
 * 1. it compiles and minify html templates to js template cache
 * 2. css      - replace local path with CDN url, minify, add revision number, add banner header
 *    css_libs - minify, add revision number
 *    js       - annotates the sources before minifying, minify, add revision number, add banner header
 *    js_libs  - minify, add revision number
 *    html     - replace local path with CDN url, minify
 */
gulp.task('compile', function () {
        var projectHeader = header(banner(pkg));

        return gulp.src(paths.app.indexProd)
            .pipe(inject(gulp.src([paths.temp.scripts + 'build.js'], {read: false}), {
            }))
            .pipe(usemin({
                css:[
                    bytediff.start(),
                    minifyCss({keepSpecialComments:0}),
                    bytediff.stop(bytediffFormatter),
                    rev(),
                    projectHeader
                ],
            //    js: [
            //        //bytediff.start(),
            //        //uglify(),
            //        //bytediff.stop(bytediffFormatter),
            //        rev(),
            //        projectHeader
            //    ],
                html:[
                    bytediff.start(),
                    minifyHtml({empty:true}),
                    bytediff.stop(bytediffFormatter),
                    rename('index.html')
                ]
            }))
            .pipe(gulp.dest(paths.prod.basePath))
            .pipe(size({title: 'compile', showFiles: true}));
    });





