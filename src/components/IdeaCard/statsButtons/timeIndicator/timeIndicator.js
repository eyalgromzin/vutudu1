import React, { Component } from 'react'
import './timeIndicator.css'
import { connect } from 'react-redux';

class TimeIndicator extends Component {
  render() {
    return (
      <div class="bottomIndicator">
        <img src={require("images/time.png")} id="timeImage" class="bottomButton" onClick={this.handleAttachmentsClick} alt="time image"/>
        <img src={require("images/downArrow.png")} id="decreaseTime" class="bottomButton" onClick={this.handleAttachmentsClick}/>
        {this.props.minTime}-{this.props.maxTime}
        <img src={require("images/upArrow.png")} id="incrementTime" class="bottomButton" onClick={this.handleAttachmentsClick}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    minTime: state.ideasReducer.ideas[state.ideasReducer.currentIdeaIndex].minTime,
    maxTime: state.ideasReducer.ideas[state.ideasReducer.currentIdeaIndex].maxTime,
  };
}

export default connect(mapStateToProps)(TimeIndicator);
