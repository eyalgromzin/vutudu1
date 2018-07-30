import React, { Component } from 'react'
import './createIdeaButton.css'
import '../topBar.css'
import 'commonCss.css'

export default class CreateIdeaButton extends Component {
  render() {
    return (
      <div class="displayInlineBlock alignRight">
          <img src={require("images/newIdea.png")} class="topBarIcon verticalMiddleAlign" />
      </div>
    )
  }
}
