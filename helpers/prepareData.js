import DriverTasks from "./util.js";
import { By, until } from 'selenium-webdriver';
import { base_url } from "../index.js";

export const createUser = async (driver) => {
  const tasks = new DriverTasks(driver);

  await tasks.clickElement('xpath', '//a[@href="http://localhost/admin/search.php"]');
  await tasks.clickElement('xpath', '//a[@href="#linkusers"]');
  const category = await tasks.findElement('xpath', '//a[@href="http://localhost/admin/category.php?category=accounts"]');
  await category.click();
  await driver.wait(until.stalenessOf(category), 2000);
  await tasks.clickElement('linkText', 'Add a new user');
  await tasks.inputClearElement('id', 'id_username', process.env.TEST_USER_USERNAME);
  const editPass = tasks.findElement('xpath', '//a[@data-passwordunmask="edit"]');
  await editPass.click();
  await tasks.inputClearElement('id', 'id_newpassword', process.env.TEST_USER_PASSWORD);
  await tasks.inputClearElement('id', 'id_firstname', 'Student');
  await tasks.inputClearElement('id', 'id_lastname', 'User');
  await tasks.inputClearElement('id', 'id_email', 'testemailstudentabc@gmail.com');
  await tasks.clickElement('id', 'id_submitbutton');
  await driver.wait(until.urlIs("http://localhost/admin/user.php"));
}

export const createCourse = async (driver, fullName, shortName, time) => {
  const tasks = new DriverTasks(driver);

  const siteAdmin = await tasks.findElement('xpath', '//a[@href="http://localhost/admin/search.php"]');
  await siteAdmin.click();
  await tasks.clickElement('xpath', '//a[@href="#linkcourses"]');
  await tasks.clickElement('linkText', 'Add a new course');
  await tasks.inputClearElement('id', 'id_fullname', fullName);
  await tasks.inputClearElement('id', 'id_shortname', shortName);
  await tasks.clickElement('css', `#id_startdate_day>option[value="${time}"]`);
  const saveBtn = await tasks.findElement('id', 'id_saveanddisplay');
  await saveBtn.click();
  await driver.wait(until.stalenessOf(saveBtn), 2000);
  const participantsBtn = await tasks.findElement('xpath', '//li[@data-key="participants"]');
  await participantsBtn.click();
  await driver.wait(until.stalenessOf(participantsBtn), 2000);
  const enrolMethod = await tasks.findElement('xpath', '//select/optgroup[@label="Enrolments"]/option[contains(@value, "/enrol/instances.php")]');
  await enrolMethod.click();
  await driver.wait(until.stalenessOf(enrolMethod), 2000);
  await tasks.clickElement('xpath', '//i[@title="Enrol users"]');
  await tasks.inputClearElement('id', 'addselect_searchtext', 'testemailstudentabc@gmail.com');
  const userSelect = await tasks.findElement('xpath', '//select[@id="addselect"]/optgroup/option');
  await userSelect.click();
  await tasks.clickElement('id', 'add');
  await driver.get(base_url);
}
