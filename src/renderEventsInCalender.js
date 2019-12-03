import moment from "moment";

const renderEventsInCalender = events => {
  let eventsArr = Object.values(events),
    eventsLogOfThisYear = {};
  eventsArr.map(eventObj => {
    let eventMonthStart = Number(eventObj.start.split("-")[1]) - 1,
      eventMonthEnd = Number(eventObj.end.split("-")[1]) - 1,
      eventDayStart = Number(eventObj.start.split("-")[2]),
      eventDayEnd = Number(eventObj.end.split("-")[2]),
      eventSpanOfInOneMonth = eventDayEnd - eventDayStart;
    if (eventMonthStart === eventMonthEnd) {
      if (!eventsLogOfThisYear[eventMonthEnd]) {
        eventsLogOfThisYear[eventMonthEnd] = [];
      }
      for (let i = 0; i <= eventSpanOfInOneMonth; i++) {
        eventsLogOfThisYear[eventMonthStart].push(eventDayStart + i);
      }
    } else {
      if (!eventsLogOfThisYear[eventMonthStart]) {
        eventsLogOfThisYear[eventMonthStart] = [];
      }
      if (!eventsLogOfThisYear[eventMonthEnd]) {
        eventsLogOfThisYear[eventMonthEnd] = [];
      }

      let monthEndDay = moment("2019-" + (eventMonthStart + 1)).daysInMonth(),
        firstMonthSpan = monthEndDay - eventDayStart,
        secondMonthSpan = eventDayEnd - 1;
      for (let i = 0; i <= firstMonthSpan; i++) {
        eventsLogOfThisYear[eventMonthStart].push(eventDayStart + i);
      }
      for (let i = 0; i <= secondMonthSpan; i++) {
        eventsLogOfThisYear[eventMonthEnd].push(i + 1);
      }
    }
    return eventsLogOfThisYear;
  });
  return eventsLogOfThisYear;
};

export default renderEventsInCalender;
