import DriverTasks from "./util.js";
import { By, until } from 'selenium-webdriver';

export const deleteUser = async (driver) => {
  const tasks = new DriverTasks(driver);

  await tasks.clickElement('xpath', '//a[@href="http://localhost/admin/search.php"]');
  await tasks.clickElement('xpath', '//a[@href="#linkusers"]');
  const category = await tasks.findElement('xpath', '//a[@href="http://localhost/admin/category.php?category=accounts"]');
  await category.click();
  await driver.wait(until.stalenessOf(category), 2000);
  await tasks.clickElement('linkText', 'Browse list of users');
  await tasks.clickElement('className', 'moreless-toggler');
  await tasks.inputClearElement('id', 'id_email', 'testemailstudentabc@gmail.com');
  await tasks.clickElement('id', 'id_addfilter');
  await tasks.clickElement('xpath', '//i[@title="Delete"]');
  const deleteBtn = await tasks.findElement('css', 'form > button.btn-primary');
  await deleteBtn.click();
  await driver.wait(until.stalenessOf(deleteBtn), 2000);
};

export const deleteCourse = async (driver) => {
  const tasks = new DriverTasks(driver);

  await tasks.clickElement('xpath', '//a[@href="http://localhost/admin/search.php"]');
  await tasks.clickElement('xpath', '//a[@href="#linkcourses"]');
  await tasks.clickElement('xpath', '//a[@href="http://localhost/course/management.php"]');
  await tasks.clickElement('id', 'action-menu-toggle-1');
  await tasks.clickElement('xpath', '//a[contains(@href, "action=deletecategory")]');
  const deleteBtn = await tasks.findElement('id', 'id_submitbutton');
  await deleteBtn.click();
  await driver.wait(until.stalenessOf(deleteBtn), 2000);
};