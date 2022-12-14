# Software testing assignment 3 - project guide

## Run Locally

1. Install [Mocha](http://mochajs.org) globally

```
$ npm install -g mocha
```

4. Install [cross-env](https://www.npmjs.com/package/cross-env) to make sure Environment Variables are set correctly in each OS:

```
$ npm install -g cross-env
```

3. Install all project dependencies:

```
$ npm install
```

4. Run the following command to run the test:

```
$ npm run test
```

5. After run the above command, please enter Moodle Admin credentials. The test require local Moodle Admin account which is created during the installation.

## Configuration Overrides

All variables can be modified by changing the `.env` file with the appropiate files. The available environment variables to override are:

- MOCHA_BROWSER: specifies the webdriver to use. Options are:

  - chrome
  - headlessChrome
  - firefox

- TEST*BASE_URL: specifies which url the tests should run on, in this case, its \_http://localhost*
