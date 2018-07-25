import React, { Component } from 'react'

export default class IdeaCard extends Component {
  render() {
    return (
      <div>
        <div id="ideaCard">
            idea card
            <div id="ideaTitle"> title </div>
            <div id="ideaContent"> idea content </div>
            <div id="nextIdeaButton"> next idea button</div>
            <div id="nextIdeaButton"> next idea button</div>
            <DifficultyChooser />
            <LikesChooser />
            <TimeChooser />
            <AddNewIdeaButton />
        </div>
    </div>
    )
  }
}
