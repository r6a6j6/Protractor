describe('Protractor baby steps', function() {
    it('open website', function() {

      browser.waitForAngularEnabled(false)
      browser.get('https://www.irctc.co.in/nget/train-search');

      var EC=protractor.ExpectedConditions;
    

      browser.driver.manage().window().maximize();
      
      element(by.buttonText("Ok")).click();

      element(by.css("input[placeholder='From*']")).sendKeys("MGR CHENNAI CTL - MAS");
      element(by.css("input[placeholder='To*']")).sendKeys("NEW DELHI - NDLS");
      element(by.css("span[class='ui-button-icon-left ui-clickable fa fa-fw fa-calendar']")).click().then(function()
      {
        element(by.cssContainingText("td[class='ng-tns-c12-5 ng-star-inserted']", "10")).click();

      })
      
      
    //element(by.css("button[label='Find Trains']")).click();
    element(by.buttonText("Find trains")).click().then(function()
    {
      browser.sleep(7000);
     
    })

    browser.actions().mouseMove(element(by.css("div[class='row-fluid']"))).perform();

    element(by.css("span[class='trainName']")).getText().then(function(text)
    {
    
    console.log(text);
    })
    element(by.css("#check-availability")).click().then(function()
    {
      browser.sleep(5000);
    })
    element.all(by.css("div[class='span3']")).getText().then(function(text)
    {
    
    console.log(text);
    })

    element.all(by.buttonText("Book Now")).first().click();

    element(by.css("button[icon='fa-check']")).click().then(function()
    
    {
    //10sec
    browser.sleep(8000)
    //browser.wait(EC.visibilityOf(element(by.id("userId"))),8000)
    })
    


element(by.id("userId")).sendKeys("");
element(by.id("pwd")).sendKeys("").then(function()
{
  browser.wait(EC.urlContains("irctc.co.in/nget/booking/psgninput"),20000);

})

element(by.css("span[class='ui-messages-detail ng-star-inserted']")).getText().then(function(text)
{

  console.log(text);
})


    });
  });
  
  
