require('dotenv').config();
/// <reference path="../steps.d.ts" />

exports.config = {
  output: 'output',
  helpers: {

    Playwright: {
      url: "https://www.swan.io",
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
