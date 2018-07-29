import React, { Component } from 'react'
import IdeaNextButton from './nextButton/nextButton'
import IdeaPreviousButton from './previousButton/previousButton'

export default class IdeaNextPreviousButtons extends Component {
  render() {
    return (
      <div>
        <IdeaPreviousButton />
        <IdeaNextButton />
      </div>
    )
  }
}
