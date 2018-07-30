import React, { Component } from 'react'
import './ideaCard.css'
import LikeDislike from './statsButtons/likesIndicator/likeDislike'
import DifficultyIndicator from './statsButtons/difficultyIndicator/difficultyIndicator'
import TimeIndicator from './statsButtons/timeIndicator/timeIndicator'

import IdeaPreviousNextButtons from './cardButtons/nextPreviousButtons/nextPreviousButtons'
import CardCountInfo from './cardButtons/cardCountInfo/cardCountInfo'
import IdeaAttachmentsButton from './cardButtons/ideaAttachmentsButton/ideaAttachmentButton'
import IdeaAttachmentsDrawer from './cardButtons/ideaAttachmentsDrawer/ideaAttachmentsDrawer'
import IdeaPlace from './cardButtons/placeButton/placeButton'


export default class IdeaCard extends Component {
  render() {
    return (
      <div>
        <div id="ideaCard">
            idea card
            <div id="cardButtons">
              <IdeaPreviousNextButtons />
              <CardCountInfo />
              <IdeaAttachmentsButton />
              <IdeaAttachmentsDrawer />
              <IdeaPlace />
            </div>
            <div id="ideaTitle"> title </div>
            <div id="ideaContent"> idea content </div>
            <div id="statusButtons">
              <DifficultyIndicator />
              <LikeDislike />
              <TimeIndicator />
            </div>
        </div>
    </div>
    )
  }
}