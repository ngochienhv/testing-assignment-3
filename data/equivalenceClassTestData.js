const equivalenceTestData = [
  {
    name: 'TC-007-001',
    currentPassword: process.env.TEST_USER_PASSWORD + '4',
    newPassword: 'Test@12345',
    againPassword: 'Test@12345',
    elementId: 'id_error_password',
    expected: 'Invalid login, please try again'
  }, {
    name: 'TC-007-002',
    currentPassword: process.env.TEST_USER_PASSWORD,
    newPassword: 'Test@12',
    againPassword: 'Test@12',
    elementId: 'id_error_newpassword1',
    expected: 'Passwords must be at least 8 characters long.'
  }, {
    name: 'TC-007-003',
    currentPassword: process.env.TEST_USER_PASSWORD,
    newPassword: 'Test@abc',
    againPassword: 'Test@abc',
    elementId: 'id_error_newpassword1',
    expected: 'Passwords must have at least 1 digit(s).'
  }, {
    name: 'TC-007-004',
    currentPassword: process.env.TEST_USER_PASSWORD,
    newPassword: 'TEST@1234',
    againPassword: 'TEST@1234',
    elementId: 'id_error_newpassword1',
    expected: 'Passwords must have at least 1 lower case letter(s).'
  }, {
    name: 'TC-007-005',
    currentPassword: process.env.TEST_USER_PASSWORD,
    newPassword: 'test@1234',
    againPassword: 'test@1234',
    elementId: 'id_error_newpassword1',
    expected: 'Passwords must have at least 1 upper case letter(s).'
  }, {
    name: 'TC-007-006',
    currentPassword: process.env.TEST_USER_PASSWORD,
    newPassword: 'Test1234',
    againPassword: 'Test1234',
    elementId: 'id_error_newpassword1',
    expected: 'The password must have at least 1 special character(s) such as as *, -, or #.'
  }, {
    name: 'TC-007-007',
    currentPassword: process.env.TEST_USER_PASSWORD,
    newPassword: process.env.TEST_USER_PASSWORD,
    againPassword: process.env.TEST_USER_PASSWORD,
    elementId: 'id_error_newpassword1',
    expected: 'The new password must be different than the current one'
  }, {
    name: 'TC-007-008',
    currentPassword: process.env.TEST_USER_PASSWORD,
    newPassword: 'Test@1234',
    againPassword: 'Test@12345',
    elementId: 'id_error_newpassword1',
    expected: 'These passwords do not match'
  }
];

export default equivalenceTestData;
