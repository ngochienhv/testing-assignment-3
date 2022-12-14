const usecaseTestData = [
  { name: 'TC-009-001', fileName: 'test_data_calendar.ics', expected: 'Correct file type' },
  { name: 'TC-009-002', fileName: 'test_data_larger_32mb.pdf', expected: 'The file you tried to upload is too large for the server to process.' },
  { name: 'TC-009-003', fileName: 'test_data_not_calendar.txt', expected: 'Text file filetype cannot be accepted.' },
]

export default usecaseTestData;