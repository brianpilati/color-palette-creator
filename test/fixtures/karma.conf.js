module.exports = function(config){
    config.set({
    basePath : '../../',

    files : [
      'lib/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [
    ],

    preprocessors: {
        '*.html': ['html2js']
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-jasmine',
      'jasmine-jquery',
      'karma-html2js-preprocessor',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
   ]
})}
