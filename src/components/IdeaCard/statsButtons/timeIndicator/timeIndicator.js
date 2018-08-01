import React, { Component } from 'react'

export default class TimeIndicator extends Component {
  render() {
    return (
      <div class="bottomIndicator">
        <img src={require("images/time.png")} id="timeImage" class="bottomButton" onClick={this.handleAttachmentsClick} alt="time image"/>
        <img src={require("images/upArrow.png")} id="incrementTime" class="bottomButton" onClick={this.handleAttachmentsClick}/>
        <img src={require("images/downArrow.png")} id="decreaseTime" class="bottomButton" onClick={this.handleAttachmentsClick}/>
      </div>
    )
  }
}
