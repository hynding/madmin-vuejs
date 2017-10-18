const {defineSupportCode} = require('cucumber');
const {Builder, By, until} = require('selenium-webdriver');
const fs = require('fs');
const platform = process.env.PLATFORM || "CHROME";

const buildAndroidDriver = function() {
  return new Builder().
  usingServer('http://localhost:4723/wd/hub').
  withCapabilities({
    platformName: 'Android',
    deviceName: 'Android device',
    browserName: 'Chrome'
  }).
  build();
};

const buildChromeDriver = function() {
  return new Builder().forBrowser("chrome").build();
};

const buildFirefoxDriver = function() {
  return new Builder().forBrowser("firefox").build();
};

const buildDriver = function() {
  switch(platform) {
    case 'ANDROID':
      return buildAndroidDriver();
    case 'FIREFOX':
      return buildFirefoxDriver();
    default:
      return buildChromeDriver();
  }
};

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(60 * 1000);
});

const World = function World() {

  const screenshotPath = "screenshots";

  this.driver = buildDriver();

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

};

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(World);
});