import React, { Component } from 'react'
import './createIdeaButton.css'
import '../topBar.css'
import 'commonCss.css'
import CHANGE_PAGE_TO_CREATE_IDEA from 'redux/CommonReducer'

export default class CreateIdeaButton extends Component {
  handleNewIdeaClick(){
    this.changePageToCreateIdea();
  }

  changePageToCreateIdea = () => {
    this.props.dispatch({ type: CHANGE_PAGE_TO_CREATE_IDEA });
  }

  render() {
    return (
      <div class="displayInlineBlock alignRight">
          <img src={require("images/newIdea.png")} class="topBarIcon verticalMiddleAlign" onClick={this.handleNewIdeaClick} />
      </div>
    )
  }
}
