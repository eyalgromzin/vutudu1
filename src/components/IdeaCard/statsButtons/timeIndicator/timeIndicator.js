import React, { Component } from 'react'
import TimeUpArrow from './timeUpArrow/timeUpArrow'
import TimeDownArrow from './timeDownArrow/timeDownArrow'

export default class TimeIndicator extends Component {
  render() {
    return (
      <div>
        (time icon)
        <TimeDownArrow />
        27m - 45m
        <TimeUpArrow />
      </div>
    )
  }
}
