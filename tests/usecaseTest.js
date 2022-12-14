import DriverTasks from "../helpers/util.js";
import { By, until } from 'selenium-webdriver';

const usecaseTest = async (driver, fileName) => {
  const tasks = new DriverTasks(driver);
  const isCorrectFileType = fileName.split('.')[1] === "ics";

  await tasks.clickElement('xpath', '//a[@href="http://localhost/my/"]');
  await driver.wait(until.urlIs("http://localhost/my/"), 2000);
  await tasks.clickElement('xpath', '//a[@href="http://localhost/calendar/managesubscriptions.php"]');
  await tasks.clickElement('xpath', '//form[@action="http://localhost/calendar/import.php"]');
  await tasks.inputElement('id', 'id_name', 'test');
  await tasks.clickElement('css', '#id_importfrom>option[value="0"]');
  await tasks.clickElement('name', 'importfilechoose');
  const uploadTab = await tasks.findElement('xpath', '//img[@src="http://localhost/theme/image.php/boost/repository_upload/1670592843/icon"]/parent::a');
  await uploadTab.click();
  await tasks.inputElement('name', 'repo_upload_file', process.cwd() + `\\data\\files\\${fileName}`);
  const uploadBtn = await tasks.findElement('className', 'fp-upload-btn');
  await uploadBtn.click();
  if (isCorrectFileType) {
    await tasks.clickElement('id', 'id_add');
    await driver.wait(until.urlIs('http://localhost/calendar/managesubscriptions.php'));
    return 'Correct file type';
  } else {
    await driver.sleep(2000);
    const error = await tasks.findElement('css', 'div.moodle-exception-message');
    let message = await error.getText();
    return message;
  }
}

export default usecaseTest;