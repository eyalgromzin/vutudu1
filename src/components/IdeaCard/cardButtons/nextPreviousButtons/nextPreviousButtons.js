import React, { Component } from 'react'
import './nextPreviousButtons.css'
import '../../ideaCard.css'
import {CHANGE_CURRENT_IDEA} from 'redux/ideasReducer'


 class IdeaNextPreviousButtons extends Component {
  rightArrowClick(){
    var ideasCount = this.props.ideas.length;
    var currentIdeaIndex = this.props.currentIdeaIndex;
    if(currentIdeaIndex == ideasCount){
      currentIdeaIndex = 1;
    }else {
      currentIdeaIndex++;
    }

    var currentIdea = this.props.ideas[currentIdea - 1];
    
    this.props.dispatch({ type: CHANGE_CURRENT_IDEA, payload: currentIdeaIndex });
  }

  leftArrowClick(){
    var ideasCount = this.props.ideas.length;
    var currentIdeaIndex = this.props.currentIdeaIndex;
    if(currentIdeaIndex == 0){
      currentIdeaIndex = this.props.ideas.length;
    }else {
      currentIdeaIndex--;
    }

    var currentIdea = this.props.ideas[currentIdea - 1];
    
    this.props.dispatch({ type: CHANGE_CURRENT_IDEA, payload: currentIdeaIndex });
  }

  render() {
    return (
      <React.Fragment>
        <div id="ideaNextPreviousButtons">
        <img src={require("images/leftArrow.png")} id="ideaLeftArrow" class="ideaTopButton" onClick={this.rightArrowClick}/>
        <img src={require("images/rightArrow.png")} id="ideaRightArrow" class="ideaTopButton" onClick={this.leftArrowClick}/>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
    return {
      currentIdeaIndex: state.searchReducer.currentIdeaIndex,
      ideas: state.searchReducer.ideas
    };
  }

  export default connect(mapStateToProps)(IdeaNextPreviousButtons);
