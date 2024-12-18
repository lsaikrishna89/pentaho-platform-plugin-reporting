/*! ******************************************************************************
 *
 * Pentaho
 *
 * Copyright (C) 2024 by Hitachi Vantara, LLC : http://www.pentaho.com
 *
 * Use of this software is governed by the Business Source License included
 * in the LICENSE.TXT file.
 *
 * Change Date: 2029-07-20
 ******************************************************************************/


module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
            'context.js',
            "**/*-require-js-cfg.js",
            'karma-require-js-cfg.js',
            {pattern: '*.+(js|min.js|xml|properties|html|css|png|gif)', included: false, watched: false},
            {pattern: '**/*.+(js|min.js|xml|properties|html|css|png|gif)', included: false, watched: false}
        ],


        // list of files to exclude
        exclude: [
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit', 'coverage'],

        preprocessors: {
            'reportviewer/compressed/*.js': 'coverage'
        },

        junitReporter: {
            useBrowserName: false,
            outputFile: "../js-reports/test-results.xml",
            suite: "unit"
        },

        coverageReporter: {
            useBrowserName: false,
            reporters: [
                {
                    type: "html",
                    dir: "../js-reports/jscoverage/html/"
                },
                {
                    type: "cobertura",
                    dir: "../js-reports/cobertura/xml/"
                }
            ],
            dir: "../js-reports/"
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: 2,
        browserDisconnectTimeout : 10000, // default 2000
        browserDisconnectTolerance : 1, // default 0
        browserNoActivityTimeout : 60000, //default 10000
    })
};

