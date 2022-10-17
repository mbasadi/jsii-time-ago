import TimeAgo from '../src';

const timeDifferences = [
  -100,
  -10,
  10,
  1 * 60,
  2 * 60,
  1 * 60 * 60,
  2 * 60 * 60,
  1 * 60 * 60 * 24,
  2 * 60 * 60 * 24,
  1 * 60 * 60 * 24 * 30,
  2 * 60 * 60 * 24 * 30,
  1 * 60 * 60 * 24 * 30 * 365.25,
  2 * 60 * 60 * 24 * 30 * 365.25,
].map((item, index) => {
  return index > 2 ? item * 1000 : item;
});
const timeCasesResults = [
  'just now',
  'just now',
  'just now',
  '1 minute ago',
  '2 minutes ago',
  '1 hour ago',
  '2 hours ago',
  '1 day ago',
  '2 days ago',
  '1 month ago',
  '2 months ago',
  '1 year ago',
  '2 years ago',
];
const cases:[number, string][]=timeDifferences.map((time, index)=>{
  return [time, timeCasesResults[index]];
});
describe('Relative times', () => {
  test.each(cases)('Given a date with %p milliseconds relative time difference shows as %p', (time, expectedResult)=>{
    return expect(TimeAgo.timeAgo(time)).toEqual(expectedResult);
  });
});