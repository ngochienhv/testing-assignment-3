import { By, until } from 'selenium-webdriver';

export default class DriverTasks {
  constructor(driver) {
    this.driver = driver;
  }
  changeMethod(method) {
    this.method = method;
  }
  findElement(method, query) {
    const methodToUse = method ? method : this.method;
    const element = this.driver.findElement(
      By[methodToUse](query)
    );

    return element;
  }
  findElements(method, query) {
    const methodToUse = method ? method : this.method;
    return this.driver.findElements(
      By[methodToUse](query)
    );
  }
  async clickElement(method, query) {
    const element = await this.driver.wait(until.elementLocated(By[method](query)));
    await element.click();
  }
  async inputElement(method, query, key) {
    const element = await this.driver.wait(until.elementLocated(By[method](query)));
    await element.sendKeys(key);
  }
  async inputClearElement(method, query, key) {
    const element = await this.driver.wait(until.elementLocated(By[method](query)));
    await element.clear();
    await element.sendKeys(key);
  }
  hoverElement(method, query) {
    const methodToUse = method ? method : this.method;
    const element = this.findElement(query, methodToUse);
    driver.actions().mouseMove(element).perform();
  }
  getAttribute(method, query, attribute) {
    const methodToUse = method ? method : this.method;
    const element = this.findElement(query);

    return element.getAttribute(attribute);
  }
  scrollTo(method, query) {
    const methodToUse = method ? method : this.method;
    const element = this.findElement(query, methodToUse);
    driver.executeScript("arguments[0].scrollIntoView(false)", element);
    driver.sleep(300);
  }
}
