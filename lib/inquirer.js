import inquirer from 'inquirer';

export const askAdminCredentials = () => {
  const questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter your Admin username:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your username';
        }
      }
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your Admin password:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your password.';
        }
      }
    }
  ];
  return inquirer.prompt(questions);
}
