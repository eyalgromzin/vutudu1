import React, { Component } from 'react'
import IdeaAttachmentsButton from './cardButtons/addAttachmentButton/addAttachmentButton'
import IdeaPlace from './cardButtons/placeButton/placeButton'

export default class CreateIdeaCard extends Component {
  render() {
    return (
      <div id="ideaCard">
          <div id="ideaCard"> 
            <div id="ideaTitle"> title </div>
            <div id="ideaMainContent">
              <div id="ideaContent"> content </div>
            </div>
          </div>
      </div>
    )
  }
}
