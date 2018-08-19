import React, { Component } from 'react'
import './likeDislike.css'
import '../../ideaCard.css'
import { connect } from 'react-redux';
import { DISLIKE_IDEA } from 'redux/ideasReducer'
import { LIKE_IDEA } from 'redux/ideasReducer'

class LikeDislike extends Component {
  constructor(props){
    super(props);

    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleDislikeClick = this.handleDislikeClick.bind(this);
  }

  handleDislikeClick(){
    this.props.dispatch({ type: DISLIKE_IDEA });
  }

  handleLikeClick(){
    this.props.dispatch({ type: LIKE_IDEA });
  }

  render() {
    return (
      <div class="bottomIndicator">
        <img src={require("images/like.png")} id="likeButton" class="bottomButton" onClick={this.handleLikeClick}/>
        {this.props.likes}
        <img src={require("images/dislike.png")} id="dislikeButton" class="bottomButton" onClick={this.handleDislikeClick}/>
        {this.props.dislikes}
        <span> ({Math.round((this.props.likes/(this.props.likes + this.props.dislikes)) * 100) }%)</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    likes: state.ideasReducer.ideas[state.ideasReducer.currentIdeaIndex].likes,
    dislikes: state.ideasReducer.ideas[state.ideasReducer.currentIdeaIndex].dislikes,
  };
}

export default connect(mapStateToProps)(LikeDislike);
