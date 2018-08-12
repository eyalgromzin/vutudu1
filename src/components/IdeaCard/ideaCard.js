import React, { Component } from 'react'
import './ideaCard.css'
import LikeDislike from './statsButtons/likesIndicator/likeDislike'
import DifficultyIndicator from './statsButtons/difficultyIndicator/difficultyIndicator'
import TimeIndicator from './statsButtons/timeIndicator/timeIndicator'
import IdeaPreviousNextButtons from './cardButtons/nextPreviousButtons/nextPreviousButtons'
import CardCountInfo from './cardButtons/cardCountInfo/cardCountInfo'
import IdeaAttachmentsButton from './cardButtons/ideaAttachmentsButton/ideaAttachmentButton'
import IdeaPlace from './cardButtons/placeButton/placeButton'


export default class IdeaCard extends Component {
  render() {
    return (
      <div id="ideaCardWithButtons">
          <div id="topCardButtons">
            <IdeaPreviousNextButtons />
            <LikeDislike />
            <TimeIndicator />
            <DifficultyIndicator />
            <CardCountInfo />
          </div>
          <div id="ideaCard"> 
            <div id="ideaTitle"> title </div>
            <div id="ideaMainContentContainer">
              <div id="ideaContentText"> content content content content content content  </div>
              <div id="ideaMainContentBottomButtons"> 
                <IdeaAttachmentsButton />
                <IdeaPlace />
              </div>
            </div>
          </div>
          <div id="statusButtons">
          </div>
      </div>
    )
  }
}
