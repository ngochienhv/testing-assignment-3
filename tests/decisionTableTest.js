import DriverTasks from "../helpers/util.js";
import { By, until } from 'selenium-webdriver';

const decisionTableTest = async (driver, filterOption, sortOption) => {
  const tasks = new DriverTasks(driver);

  await tasks.clickElement('xpath', '//a[@href="http://localhost/my/courses.php"]');
  await driver.sleep(3000);
  let filterBtn = await tasks.findElement('id', 'groupingdropdown');
  await filterBtn.click();
  await tasks.clickElement('linkText', filterOption);
  let sortBtn = await tasks.findElement('id', 'sortingdropdown');
  await sortBtn.click();
  await tasks.clickElement('linkText', sortOption);
  await driver.sleep(2000);
  let courses = await tasks.findElements("xpath", "//div[@class='card dashboard-card']/div/div/div/a/span[@class='multiline']");
  let coursesTitle = await Promise.all(courses.map(async (course) => {
    let title = await course.getAttribute("innerHTML");
    return title.trim();
  }));
  return coursesTitle;
}

export default decisionTableTest;