/**
 * @author    Zeng chuan
 * @copyright Copyright (c) 2016, Zeng chuan
 * @license   GPL-3.0
 */
'use strict';

module.exports = {
    gulpfile:   'gulpfile.js',
    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in 'app/'). These file paths are used in the configuration of
     * build tasks.
     *
     * - 'styles'       contains all project css styles
     * - 'images'       contains all project images
     * - 'fonts'        contains all project fonts
     * - 'scripts'      contains all project javascript except unit test files
     * - 'html'         contains main html files
     * - 'templates'    contains all project html templates
     * - 'config'       contains Angular app config files
     */
    app: {
        basePath: 'app/',
        ts:[ 'app/**/*.ts',  '!app/**/*.mock.ts'],
        tsMock: 'app/**/*.ts',
        html: ['app/**/*.html', '!app/index-dev.html', '!app/index-mock.html','!app/index-prod.html'],
        styles: 'app/**/*.scss',
        images: 'app/**/*.{png,gif,jpg,jpeg}',
        fonts: ['app/**/*.{eot,svg,ttf,woff,woff2}', 'jspm_packages/**/*.{eot,svg,ttf,woff,woff2}'],
        //i18n:  ['app/**/**/i18n/*.json', 'app/i18n/*.json'],
        i18n:  ['app/i18n/*.json'],
        indexDev: 'app/index-dev.html',
        indexMock: 'app/index-mock.html',
        indexProd: 'app/index-prod.html'
    },

    /**
     * The 'dev' folder is where our html templates are compiled to JavaScript during
     * the build process and then they are concatenating with all other js files and
     * copy to 'dist' folder.
     */
    dev: {
        basePath:       'build/dev/',
        styles:    'build/dev/styles/'
    },

    /**
     * The 'build' folder is where our app resides once it's
     * completely built.
     *
     * - 'dist'         application distribution source code
     * - 'docs'         application documentation
     */
    prod: {
        basePath: 'build/dist',
        fonts: 'build/dist/fonts/',
        images: 'build/dist/images/',
        styles: 'build/dist/styles/',
        i18n: 'build/dist/i18n/',
        scripts: 'build/dist/scripts/',
        index: 'build/dist/index.html'
    },

    temp: {
        basePath: 'build/temp',
        styles: 'build/temp/styles/',
        scripts: 'build/temp/scripts/'
    }
};

