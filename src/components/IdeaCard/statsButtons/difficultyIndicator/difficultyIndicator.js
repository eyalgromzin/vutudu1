import React, { Component } from 'react'
import './difficultyIndicator.css'
import '../../ideaCard.css'

class DiffictultyIndicator extends Component {
  render() {
    return (
      <div class="bottomIndicator">
        <img src={require("images/difficulty.png")} id="difficultyImage" class="bottomButton" onClick={this.handleAttachmentsClick}/>
        <img src={require("images/upArrow.png")} id="increaseDifficulty" class="bottomButton" onClick={this.handleAttachmentsClick}/>
        {this.props.hardCount}
        <img src={require("images/downArrow.png")} id="decreaseDifficulty" class="bottomButton" onClick={this.handleAttachmentsClick}/>        
        {this.props.easyCount}
        <span> {Math.round((this.props.hardCount / this.props.easy) * 100)}  </span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    hardCount: state.hard,
    easyCount: state.easy,
  };
}

export default connect(mapStateToProps)(DiffictultyIndicator);