import React, { Component } from 'react'
import './likeDislike.css'
import '../../ideaCard.css'

class LikeDislike extends Component {
  render() {
    return (
      <div class="bottomIndicator">
        <img src={require("images/like.png")} id="likeButton" class="bottomButton" onClick={this.handleLikeClick}/>
        {this.props.likes}
        <img src={require("images/dislike.png")} id="dislikeButton" class="bottomButton" onClick={this.handleDislikeClick}/>
        {this.state.dislikes}
        <span> (45%)</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    likes: state.dislikes,
    dislikes: state.likes,
  };
}

export default connect(mapStateToProps)(LikeDislike);
