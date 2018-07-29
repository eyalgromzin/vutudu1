import React, { Component } from 'react'
import './createIdeaButton.css'

import '../topBar.css'

export default class CreateIdeaButton extends Component {
  render() {
    return (
      <div class="topBarIcon alignRight">
        <img src="/src/images/newIdea.png" />
      </div>
      <createIdeaButton />
    )
  }
}
