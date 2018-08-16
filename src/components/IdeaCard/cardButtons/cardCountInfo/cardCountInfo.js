import React, { Component } from 'react'
import './cardCountInfo.css'

class CardCountInfo extends Component {
  render() {
    return (
      <div id="cardCountInfo">
        {this.props.currentIdeaIndex}/{this.props.ideas.length}
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      currentIdeaIndex: state.searchReducer.currentIdeaIndex,
      ideas: state.searchReducer.ideas
    };
  }

  export default connect(mapStateToProps)(CardCountInfo);