import React, { Component } from 'react'
import './createIdeaButton.css'
import '../topBar.css'
import 'commonCss.css'

export default class CreateIdeaButton extends Component {
handleNewIdeaClick(){
  //TODO: save in redux the main state of the app
}

  render() {
    return (
      <div class="displayInlineBlock alignRight">
          <img src={require("images/newIdea.png")} class="topBarIcon verticalMiddleAlign" onClick={this.handleNewIdeaClick} />
      </div>
    )
  }
}
