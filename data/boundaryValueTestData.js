const boundaryValueTestData = [
  {
    name: "TC-006-001", data: "a", expected: 'a User'
  }, {
    name: "TC-006-002", data: "ab", expected: 'ab User'
  }, {
    name: "TC-006-003", data: "testtesttesttesttesttesttesttesttesttesttesttestte", expected: 'testtesttesttesttesttesttesttesttesttesttesttestte User'
  }, {
    name: "TC-006-004", data: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttes", expected: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttes User"
  }, {
    name: "TC-006-005", data: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest", expected: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest User'
  }
];

export default boundaryValueTestData;