// Karma configuration
// Generated on Thu Sep 24 2015 11:23:30 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
   // frameworks: ['mocha', 'chai', 'requirejs'],

    frameworks: ['mocha', 'sinon-chai'],



    // list of files / patterns to load in the browser
    files: [
      // angular source
      'public/bower_components/angular/angular.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'tests/scripts/socket.io-1.3.5.js',

      // app code
      'public/js/**/*.js',

      // our spec files   
      'tests/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
      'karma.conf.js',
      'tests/protractor-tests/**/*'
    ],

    //plugins: ['karma-mocha', 'karma-requirejs', 'karma-chai'],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    browsers: ['Chrome', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
