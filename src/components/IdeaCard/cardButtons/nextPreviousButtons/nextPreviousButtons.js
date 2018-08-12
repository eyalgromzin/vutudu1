import React, { Component } from 'react'
import './nextPreviousButtons.css'
import '../../ideaCard.css'

export default class IdeaNextPreviousButtons extends Component {
  rightArrowClick(){

  }

  leftArrowClick(){

  }

  render() {
    return (
      <React.Fragment>
        <img src={require("images/leftArrow.png")} id="ideaLeftArrow" class="ideaTopButton" onClick={this.rightArrowClick}/>
        <img src={require("images/rightArrow.png")} id="ideaRightArrow" class="ideaTopButton" onClick={this.leftArrowClick}/>
      </React.Fragment>
    )
  }
}
