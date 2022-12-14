import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import puppeteer from 'puppeteer';

export const getDriverConfig = function (browser) {
  if (browser in browsers) {
    return browsers[browser].driverConfig();
  }
  else {
    throw new Error(`
            Browser not Supported.
            Make sure you wrote the name correctly.
        `);
  }
};

let browsers = {
  headlessChrome: {
    driverConfig: function () {
      const options = new chrome.Options();
      options.addArguments("--headless");
      options.addArguments("--disable-gpu");
      options.addArguments("--incognito");
      options.addArguments("--start-maximized");
      options.addArguments("--disable-logging");
      options.addArguments("--disable-in-process-stack-traces");
      options.setChromeBinaryPath(puppeteer.executablePath());
      const driver = new webdriver.Builder().
        forBrowser("chrome").setChromeOptions(options).
        build();

      return driver;
    }
  },
  chrome: {
    driverConfig: function () {
      const options = new chrome.Options();
      options.addArguments("--incognito");
      options.addArguments("--start-maximized");
      const driver = new webdriver.Builder().
        forBrowser("chrome").setChromeOptions(options).
        build();

      return driver;
    }
  },
  firefox: {
    driverConfig: function () {
      const driver = new webdriver.Builder()
        .forBrowser('firefox')
        .build();

      return driver;
    }
  }
};