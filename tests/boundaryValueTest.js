import DriverTasks from "../helpers/util.js";
import { By, until } from 'selenium-webdriver';

const boundaryValueTest = async (driver, username) => {
  const tasks = new DriverTasks(driver);

  driver.executeScript(`document.getElementById('user-action-menu').classList.add('show')`);
  await tasks.clickElement('xpath', '//a[@href="http://localhost/user/preferences.php"]',);
  await tasks.clickElement('linkText', 'Edit profile');
  await tasks.inputClearElement('id', 'id_firstname', username);
  let submitBtn = await tasks.findElement('id', 'id_submitbutton');
  await submitBtn.click();
  await driver.wait(until.stalenessOf(submitBtn), 2000);
  const userTitle = await tasks.findElement('css', 'div.page-header-headings > h1')
  let title = await userTitle.getText();
  return title;
}

export default boundaryValueTest;