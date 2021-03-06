// Karma configuration
// Generated on Mon Oct 12 2015 14:58:33 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
	    'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-messages/angular-messages.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'app/scripts/app.js',
        'app/scripts/controllers/*.js',
        'app/scripts/service/*.js',
        'test/spec/controllers/*.test.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'app/scripts/*/*.js': ['coverage'],
        'views/messages.html':['ng-html2js']
    },
            
    coverageReporter: {
      //type : 'html',
       type : 'text-summary',
      dir : 'coverage/',
      //file : 'coverage.html'
    },
      
    ngHtml2JsPreprocessor: {
      moduleName: 'messages'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
