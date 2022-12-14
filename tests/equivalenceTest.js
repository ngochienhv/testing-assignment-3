import DriverTasks from "../helpers/util.js";
import { By, until } from 'selenium-webdriver';

const equivalenceTest = async (driver, currentPassword, newPassword, againPassword, elementId) => {
  const tasks = new DriverTasks(driver);

  driver.executeScript(`document.getElementById('user-action-menu').classList.add('show')`);
  await tasks.clickElement('xpath', '//a[@href="http://localhost/user/preferences.php"]',);
  await tasks.clickElement('linkText', 'Change password');
  await tasks.inputClearElement('id', 'id_password', currentPassword);
  await tasks.inputClearElement('id', 'id_newpassword1', newPassword);
  await tasks.inputClearElement('id', 'id_newpassword2', againPassword);
  let submitBtn = await tasks.findElement('id', 'id_submitbutton');
  await submitBtn.click();
  await driver.wait(until.stalenessOf(submitBtn), 2000);
  const error = await tasks.findElement('id', elementId);
  let errorMessage = await error.getText();
  return errorMessage;
}

export default equivalenceTest;