require('dotenv').config();
/// <reference path="../steps.d.ts" />

exports.config = {
  output: 'output',
  helpers: {

    Playwright: {
      url: "http://automationpractice.com/index.php",
      show: true,
      browser: 'chromium',
      waitForNavigation: "networkidle0"
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
    catalogPage: './pages/test/catalogPage.js',
    orderPage: './pages/test/orderPage.js',
  },

  plugins: {

    retryFailedStep: {
      enabled: true,
      retries: 5,
      ignoredSteps: ['wait*']
    },

  },

  mocha: {
    "reporterOptions": {
        "mochaFile": "output/result.xml"
    }
  },

};
