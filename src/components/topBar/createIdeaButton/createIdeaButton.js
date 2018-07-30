import React, { Component } from 'react'
import './createIdeaButton.css'
import '../topBar.css'

export default class CreateIdeaButton extends Component {
  render() {
    return (
      <div>
        <div class="topBarIcon alignRight">
          newIdeaButton
          <img src={require("images/newIdea.png")} class="topBarIcon" />
        </div>        
      </div>
    )
  }
}
