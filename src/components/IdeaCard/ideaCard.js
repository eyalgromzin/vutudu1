import React, { Component } from 'react'
import './ideaCard.css'
import LikeDislike from './statsButtons/likesIndicator/likeDislike'
import DifficultyIndicator from './statsButtons/difficultyIndicator/difficultyIndicator'
import TimeIndicator from './statsButtons/timeIndicator/timeIndicator'
import IdeaPreviousNextButtons from './cardButtons/nextPreviousButtons/nextPreviousButtons'
import CardCountInfo from './cardButtons/cardCountInfo/cardCountInfo'
import IdeaAttachmentsButton from './cardButtons/ideaAttachmentsButton/ideaAttachmentButton'
import IdeaPlaceButton from './cardButtons/placeButton/placeButton'


class IdeaCard extends Component {
  render() {
    return (
      <div id="ideaCardWithButtons">
          
          <div id="ideaCard"> 
            <div id="topCardButtons">
              <IdeaPreviousNextButtons />
              <div id="cardIndicators"> 
              <LikeDislike />
              <TimeIndicator />
              <DifficultyIndicator />
            </div>
            <CardCountInfo />
            </div>
            <div id="ideaTitle"> 
              {this.props.title}
            </div>
            <div id="ideaContentText"> 
              {this.props.content}
            </div>
            <div id="`ideaMainContentBottomButtons`"> 
              <IdeaAttachmentsButton />
              <IdeaPlaceButton />
            </div>
          </div>
          <div id="statusButtons">
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    content: state.content,
    title: state.title
  };
}

export default connect(mapStateToProps)(IdeaCard);