import React, { Component } from 'react'
import CreateIdeaButton from './createIdeaButton/createIdeaButton'

export default class TopBar extends Component {
  render() {
    return (
      <div>
        <div id="TopBar">
            <div id="topBarLogo">
            <img src="/src/images/logo.png" />
            VUTUDU
            </div>
            <CreateIdeaButton />
        </div>  
      </div>
    )
  }
}
