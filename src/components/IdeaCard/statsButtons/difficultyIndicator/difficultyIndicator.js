import React, { Component } from 'react'
import './difficultyIndicator.css'
import '../../ideaCard.css'

export default class DiffictultyIndicator extends Component {
  render() {
    return (
      <div class="bottomIndicator">
        <img src={require("images/difficulty.png")} id="difficultyImage" class="bottomButton" onClick={this.handleAttachmentsClick}/>
        <img src={require("images/upArrow.png")} id="increaseDifficultu" class="bottomButton" onClick={this.handleAttachmentsClick}/>
        <img src={require("images/downArrow.png")} id="decreaseDifficulty" class="bottomButton" onClick={this.handleAttachmentsClick}/>
      </div>
    )
  }
}
