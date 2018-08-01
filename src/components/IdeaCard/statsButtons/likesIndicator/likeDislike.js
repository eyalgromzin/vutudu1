import React, { Component } from 'react'
import './likeDislike.css'
import '../../ideaCard.css'

export default class LikeDislike extends Component {
  render() {
    return (
      <div class="bottomIndicator">
        <img src={require("images/like.png")} id="likeButton" class="bottomButton" onClick={this.handleLikeClick}/>
        <img src={require("images/dislike.png")} id="dislikeButton" class="bottomButton" onClick={this.handleDislikeClick}/>
      </div>
    )
  }
}
