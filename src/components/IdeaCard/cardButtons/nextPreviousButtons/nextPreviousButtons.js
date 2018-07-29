import React, { Component } from 'react'
import NextButton from './nextButton/nextButton'
import PreviousButton from './previousButton/previousButton'

export default class IdeaNextPreviousButtons extends Component {
  render() {
    return (
      <div>
        <PreviousButton />
        <NextButton />
      </div>
    )
  }
}
