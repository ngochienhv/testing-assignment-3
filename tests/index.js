import { expect } from 'chai';

import { base_url, browser } from '../index.js';
import DriverTasks from "../helpers/util.js";
import boundaryValueTestData from '../data/boundaryValueTestData.js';
import equivalenceTestData from '../data/equivalenceClassTestData.js';
import usecaseTestData from '../data/usecaseTestData.js';
import decisionTableTestData from '../data/decisionTableTestData.js';
import { getDriverConfig } from '../helpers/driversServices.js';
import { askAdminCredentials } from '../lib/inquirer.js';
import { coursesData } from '../data/coursesData.js';

import boundaryValueTest from './boundaryValueTest.js';
import equivalenceTest from './equivalenceTest.js';
import decisionTableTest from './decisionTableTest.js';
import usecaseTest from './usecaseTest.js';
import { createUser, createCourse } from '../helpers/prepareData.js';
import { deleteUser, deleteCourse } from '../helpers/cleanData.js'

const login = async (driver, credential) => {
  const tasks = new DriverTasks(driver);

  await tasks.clickElement('xpath', '//a[@href="http://localhost/login/index.php"]');
  await tasks.inputClearElement('id', 'username', credential.username);
  await tasks.inputClearElement('id', 'password', credential.password);
  await tasks.clickElement('id', 'loginbtn');
}

describe('Test Suite - To start the test, we will need your Moodle Admin account for setup step, please enter your Admin credential', function () {
  let driver;
  let adminCredentials;

  const driverConfig = () => {
    driver = getDriverConfig(browser);
    driver.get(base_url);
    driver.manage().window().maximize();
  }

  this.timeout('60000');

  before(async function () {
    this.timeout(60000);
    adminCredentials = await askAdminCredentials();
    driverConfig();
    await login(driver, adminCredentials);
    await createUser(driver);
    await (async () => {
      for (let course of coursesData) {
        await createCourse(driver, course.fullName, course.shortName, course.time);
      }
    })();
    return driver.quit();
  });

  beforeEach(async () => {
    driverConfig();
    const userCredentials = {
      username: process.env.TEST_USER_USERNAME,
      password: process.env.TEST_USER_PASSWORD,
    }
    return login(driver, userCredentials);
  });

  afterEach(() => {
    return driver.quit();
  });

  after(async () => {
    driverConfig();
    await login(driver, adminCredentials);
    await deleteUser(driver);
    await deleteCourse(driver);
    return driver.quit();
  });

  describe('Test boundary value - Change firstname', () => {
    boundaryValueTestData.forEach(test => {
      it(`${test.name}`, async () => {
        return boundaryValueTest(driver, test.data).then((result) => {
          expect(result).to.equal(test.expected);
        })
      });
    });
  })

  describe('Test Equivalence class - Change password', () => {
    equivalenceTestData.forEach(test => {
      it(`${test.name}`, async () => {
        return equivalenceTest(driver, test.currentPassword, test.newPassword, test.againPassword, test.elementId).then((result) => {
          expect(result).to.equal(test.expected)
        })
      });
    });
  });

  describe('Test Decision Table - Filter and sort courses', () => {
    decisionTableTestData.map(test => {
      it(`${test.name}`, async () => {
        return decisionTableTest(driver, test.filterOption, test.sortOption).then((result) => {
          expect(result).to.have.same.members(test.expected);
        });
      });
    });
  });

  describe('Test Usecase - Import calendar using file import ', () => {
    usecaseTestData.forEach(test => {
      it(`${test.name}`, async () => {
        return usecaseTest(driver, test.fileName).then((result) => {
          expect(result).to.equal(test.expected);
        })
      });
    });
  });

});