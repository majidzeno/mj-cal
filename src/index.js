import React, { Component } from 'react';
import moment from 'moment';
import renderEventsInCalender from './renderEventsInCalender';
import {
  daysInMonth,
  year,
  currentDay,
  firstDayOfMonth,
  splitDaysIntoWeeks
} from './helperFunctions';
import daysOfTheCurrentMonth from './daysOfCurrentMonth';
import './styles.css';

const allMonthsArr = moment.months()

export default class Calendar extends Component {
  state = {
    currentYear: moment().year(), // 2019
    currentMonth: allMonthsArr[moment().month()], // September
    currentMonthIndex: moment().month(), // 8
    numberofdaysofTheCurrentmonth: null,
    momentObj: moment(),
    today: moment().date(), // 18
    events: null
  };

  componentDidMount() {
    // daysInMonth(this.state.momentObj);
    year(this.state.momentObj)
    currentDay(this.state.momentObj)
    firstDayOfMonth(this.state.momentObj)
    this.setState({
      numberofdaysofTheCurrentmonth: daysInMonth(this.state.momentObj)
    })
  }

  componentDidUpdate() {
    this.props.events &&
      daysOfTheCurrentMonth(
        renderEventsInCalender(this.props.events),
        this.state.momentObj,
        this.state.today
      )
  }

  nextMonth = () => {
    let currentMonthIndex = this.state.currentMonthIndex + 1

    if (currentMonthIndex > allMonthsArr.length - 1) {
      currentMonthIndex = 0
    }
    let currentMonth = allMonthsArr[currentMonthIndex]

    return this.setState({
      currentMonth: currentMonth,
      currentMonthIndex: currentMonthIndex,
      momentObj: this.state.momentObj.add(1, 'M'),
      currentYear: year(this.state.momentObj),
      numberofdaysofTheCurrentmonth: daysInMonth(this.state.momentObj)
    })
  };
  prevMonth = () => {
    let currentMonthIndex = this.state.currentMonthIndex - 1
    if (currentMonthIndex < 0) {
      currentMonthIndex = allMonthsArr.length - 1
    }
    let currentMonth = allMonthsArr[currentMonthIndex]
    return this.setState({
      currentMonth: currentMonth,
      currentMonthIndex: currentMonthIndex,
      momentObj: this.state.momentObj.subtract(1, 'M'),
      currentYear: year(this.state.momentObj),
      numberofdaysofTheCurrentmonth: daysInMonth(this.state.momentObj)
    })
  };

  renderDays = () => {
    let eventsInCalender = null
    if (this.props.events) {
      eventsInCalender = renderEventsInCalender(this.props.events)
    }

    let weeks =
      // this.props.events &&
      splitDaysIntoWeeks(
        daysOfTheCurrentMonth(
          eventsInCalender,
          this.state.momentObj,
          this.state.today
        )
      )

    let totalWeeks = []

    weeks.map((row, i) => {
      return totalWeeks.push(<tr key={1 / (i + 1)}>{row}</tr>)
    })
    return totalWeeks.map(day => {
      return day
    })
  };

  render() {
    const weekdayShortNames = moment.weekdaysShort()

    return (
      <div>
        <div className='monthNav'>
          <div
            className='monthNav__iconPrev'
            onKeyPress={() => {}}
            onClick={this.prevMonth}
            role='button'
            tabIndex='0'
          >
            {/* <FontAwesomeIcon icon="arrow-left" style={{ display: "none" }} /> */}
            Prev
          </div>
          <div className='monthNav__currentMonth'>
            <span> {this.state.currentMonth}</span>
            <span>{this.state.currentYear}</span>
          </div>
          <div
            onKeyPress={() => {}}
            className='monthNav__iconNext'
            onClick={this.nextMonth}
            role='button'
            tabIndex='0'
          >
            {/* <FontAwesomeIcon icon="arrow-right" style={{ display: "none" }} /> */}
            Next
          </div>
        </div>
        <table className='days'>
          <thead>
            <tr className='daysHeader'>
              {weekdayShortNames.map(day => {
                return <th key={day}>{day}</th>
              })}
            </tr>
          </thead>
          <tbody className='daysBody'>{this.renderDays()}</tbody>
        </table>
      </div>
    )
  }
}
