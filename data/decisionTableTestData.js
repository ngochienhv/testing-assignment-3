import { COURSE_NAME } from "./coursesData.js";

const ALL = 'All';
const IN_PROGRESS = 'In progress';
const FUTURE = 'Future';
const PAST = 'Past';
const STARRED = 'Starred';
const REMOVED = 'Removed from view';

const SORT_BY_NAME = 'Sort by course name';
const SORT_BY_TIME = 'Sort by last accessed';

const decisionTableTestData = [
  {
    name: 'TC-008-001',
    filterOption: ALL,
    sortOption: SORT_BY_NAME,
    expected: [
      COURSE_NAME.ST,
      COURSE_NAME.TS
    ]
  },
  {
    name: 'TC-008-002',
    filterOption: IN_PROGRESS,
    sortOption: SORT_BY_NAME,
    expected: [
      COURSE_NAME.ST
    ]
  },
  {
    name: 'TC-008-003',
    filterOption: FUTURE,
    sortOption: SORT_BY_NAME,
    expected: [COURSE_NAME.TS]
  },
  {
    name: 'TC-008-004',
    filterOption: PAST,
    sortOption: SORT_BY_NAME,
    expected: []
  },
  {
    name: 'TC-008-005',
    filterOption: STARRED,
    sortOption: SORT_BY_NAME,
    expected: []
  },
  {
    name: 'TC-008-006',
    filterOption: REMOVED,
    sortOption: SORT_BY_NAME,
    expected: []
  },
  {
    name: 'TC-008-007',
    filterOption: ALL,
    sortOption: SORT_BY_TIME,
    expected: [
      COURSE_NAME.ST,
      COURSE_NAME.TS
    ]
  },
  {
    name: 'TC-008-008',
    filterOption: IN_PROGRESS,
    sortOption: SORT_BY_TIME,
    expected: [
      COURSE_NAME.ST
    ]
  },
  {
    name: 'TC-008-009',
    filterOption: FUTURE,
    sortOption: SORT_BY_TIME,
    expected: [COURSE_NAME.TS]
  },
  {
    name: 'TC-008-010',
    filterOption: PAST,
    sortOption: SORT_BY_TIME,
    expected: []
  },
  {
    name: 'TC-008-011',
    filterOption: STARRED,
    sortOption: SORT_BY_TIME,
    expected: []
  },
  {
    name: 'TC-008-012',
    filterOption: REMOVED,
    sortOption: SORT_BY_TIME,
    expected: []
  },
]

export default decisionTableTestData;