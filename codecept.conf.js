require('dotenv').config();
/// <reference path="../steps.d.ts" />

exports.config = {
  output: 'output',
  helpers: {

    WebDriver: {
      url: 'https://www.swan.io',
      browser: 'chrome',
      smartWait: 20000,
      windowSize: '1280x800',
      host: process.env.SELENIUM_HOST,
      port: parseInt(process.env.SELENIUM_PORT),
      timeouts: {
        "script": 10000
      }
    },

    MyHelper: {
      require: './web_helper.js',
    },

    AssertWrapper: {
      "require": "codeceptjs-assert"
    },
  },

  name: 'tests codeceptjs',

  gherkin: {
    features: './features/**/*.feature',
    steps: [
      './steps/test/general.js',
    ]
  },

  include: {
    homePage: './pages/test/homePage.js',
  },

  plugins: {

    retryFailedStep: {
      enabled: true,
      retries: 5,
      ignoredSteps: ['wait*']
    },

    // can not set a specific version of chromedriver to adapt to my local chrome
    // by default the latest chromedriver is downloaded
    wdio:{
      services: ['selenium-standalone'],
      enabled: true,
      seleniumArgs: {
        seleniumArgs: ["-port", "4444"],
      },
    },

  },

  mocha: {
    "reporterOptions": {
        "mochaFile": "output/result.xml"
    }
  },

};
