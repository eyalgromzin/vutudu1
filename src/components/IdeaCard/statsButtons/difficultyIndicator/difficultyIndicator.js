import React, { Component } from 'react'
import './difficultyIndicator.css'
import IncreaseHardArrow from './increaseHardArrow/increaseHardArrow'
import DecreaseHardArrow from './decreaseHardArrow/decreaseHardArrow'

export default class DiffictultyIndicator extends Component {
  render() {
    return (
      <div>
        idea difficulty buttons
        <IncreaseHardArrow />
        <DecreaseHardArrow />
      </div>
    )
  }
}
