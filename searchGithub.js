// Define Node Modules
const webdriver = require("selenium-webdriver");
const chrome = require("chromedriver");
const {By, linkText, sendKeys, until, Keys} = require("selenium-webdriver");
const { Key } = require("selenium-webdriver");


//Declare constants
const searchBox = ".header-search-input";
const searchSuggestions = "#jump-to-suggestion-search-global .jump-to-suggestion-name";
const results1 = ".repo-list-item:nth-child(1) .f4 em";
const results2 = ".repo-list-item:nth-child(2) .f4 em";
const results3 = ".repo-list-item:nth-child(3) .f4 em";
const searchSuggestions2 = "//li[2]/a/div[2]";
var { ctrPassed, ctrFailed }= 0;

// Get Driver
const start = async (browser) => 


{
  let driver = await newDriver(browser);

  console.log("Go to github.com.");
  await driver.get("https://www.github.com");
  
  console.log("Click on the search box and type 'javascript.'");
  await driver.findElement(By.css(searchBox)).sendKeys("javascript");

  console.log("click on the javascript search suggestion below the search box");
  await driver.findElement(By.css(searchBox)).sendKeys(Key.ENTER);

  console.log("Verify if the result shows javascript repositories.");
  const getJStext1 = driver.findElement(By.css(results1)).getText();
   if((await getJStext1).includes("javascript"))
  {
    console.log("PASSED: 1st Result show javascript repositories");
    ctrPassed = ctrPassed + 1;
  } 
  else 
  {
    console.log("FAILED: Result does NOT show javascript repositories.");
    ctrPassed = ctrFailed + 1;
  }

  const getJStext2 = driver.findElement(By.css(results2)).getText();
   if((await getJStext2).includes("javascript"))
  {
    console.log("PASSED: 2nd Result show javascript repositories");
    ctrPassed = ctrPassed + 1;
  } 
  else 
  {
    console.log("FAILED: Result does NOT show javascript repositories.");
    ctrPassed = ctrFailed + 1;
  }

  const getJStext3 = driver.findElement(By.css(results3)).getText();
   if((await getJStext3).includes("javascript"))
  {
    console.log("PASSED: 3rd result show javascript repositories");
    ctrPassed = ctrPassed + 1;
  } 
  else 
  {
    console.log("FAILED: Result does NOT show javascript repositories.");
    ctrPassed = ctrFailed + 1;
  }

  console.log(ctrPassed ," Results show javascript repositories.");


    
 
  //driver.quit();
};

// Init
const newDriver = async (browser) => {
  const driver = await new webdriver.Builder().forBrowser(browser).build();
  return driver;
};

// Run
start("chrome");
