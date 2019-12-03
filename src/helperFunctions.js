import moment from 'moment';

export const daysInMonth = momentObject => {
  return momentObject.daysInMonth() //number of days in this month
};
export const year = momentObject => {
  return momentObject.format('Y') // 2019
};
export const currentDay = momentObject => {
  return momentObject.format('D') // 9
};
export const firstDayOfMonth = momentObject => {
  let firstDay = moment(momentObject)
    .startOf('month')
    .format('d') // Day of week 0...1..5...6
  return firstDay
};
export const month = momentObject => {
  return momentObject.format('MMMM') // June
};

export const splitDaysIntoWeeks = monthArr => {
  var chunk_size = 7
  var weeks = monthArr
    .map(function(e, i) {
      return i % chunk_size === 0 ? monthArr.slice(i, i + chunk_size) : null
    })
    .filter(function(e) {
      return e
    })
  return weeks
};
