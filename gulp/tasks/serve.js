var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var httpProxy = require('http-proxy');
var modRewrite     = require('connect-modrewrite');
var paths = require('../paths');
var proxyTarget = 'http://localhost:9080/zc'; // The location of your backend
var proxyApiPrefix = 'zc-api'; // The element in the URL which differentiate between API request and static file request

var proxy = httpProxy.createProxyServer({
    target: proxyTarget
});

var proxyMiddleware = function (req, res, next) {
    if (req.url.indexOf(proxyApiPrefix) !== -1) {
        proxy.web(req, res);
    } else {
        next();
    }
};

var startBrowserSync = function (baseDir, middleware, files, browser) {

    browser = browser === undefined ? 'default' : browser;
    files = files === undefined ? 'default' : files;
    middleware = middleware === undefined ? function (req, res, next) {next();} : middleware;

    browserSync({
        files: files,
        port: 9090,
        notify: false,
        server: {
            baseDir: baseDir,
            middleware: [
                middleware,
                modRewrite(['!\\.\\w+$ /index.html [L]', '!\\.\\w+$ /index.test.html [L]']) // require for HTML5 mode
            ]
        },
        browser: browser
    });

};

gulp.task('serve.dev.before',  function() {
    runSequence('clean:dev', 'copyIndex:dev', 'scss:dev', 'typescript', 'watch');
});

gulp.task('serve.dev', ['serve.dev.before'], function() {
    startBrowserSync([paths.dev.basePath, 'app', 'jspm_packages', './' ], proxyMiddleware);
});

gulp.task('serve.prod.before',  function() {
    runSequence('clean:prod', 'copyImage:prod', 'copyI18n:prod', 'copyFont:prod', 'scss:prod', 'bundle', 'copyJsMap:prod', 'compile', 'clean:dev');
});
/**
 * The 'serve.prod' task serve the prod environment.
 */
gulp.task('serve.prod', ['serve.prod.before'], function() {
    startBrowserSync([paths.prod.basePath], proxyMiddleware);
});

gulp.task('serve.mock.before',  function() {
    runSequence('clean:dev', 'copyIndex:mock', 'scss:dev', 'typescript-mock', 'watch');
});

gulp.task('serve.mock', ['serve.mock.before'], function() {
    startBrowserSync([paths.dev.basePath, 'app', 'jspm_packages', './' ], proxyMiddleware);
});





