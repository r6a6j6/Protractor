describe('calculator functionality', function() {
  var obj=  require("./Jsobjectdemo.js");
var using= require("jasmine-data-provider");
  var d= require("./data.js");
  //console.log(d.datadriven.firstinput);

  beforeEach(function() {
    obj.getURL();
  });

  using(d.datadriven, function (data, description) {
    it('Testing calculator functionality'+description, function() {
     
      
      obj.firstinput.sendKeys(data.firstinput);
      obj.secondinput.sendKeys(data.secondinput);

      obj.goButton.click()
   

expect(obj.result.getText()).toBe(data.result);
    })

  },

    afterEach(function() {
     console.log("Test is completed");
    }));
  
  

});