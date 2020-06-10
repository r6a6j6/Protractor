var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['Elementbasics.js'],
    specs: ['Elementbasics.js'],

    capabilities: {
      'browserName': 'chrome'
    },

   

    onPrepare: function() {
      browser.driver.manage().window().maximize();
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
   },
suites:{
Smoke:['alerts.js','dropdown.js'],
Regression:'Elementbasics.js'

},

   jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }

  };
    